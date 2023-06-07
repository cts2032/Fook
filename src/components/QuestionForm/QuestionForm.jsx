import React, { useEffect, useState } from "react";
import { Container, Header, NewQuestionBtn } from "./QuestionFormSty";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";
import apiServer from "../../api/api";
import QuestionDetail from "./QuestionDetail";
import styled from "styled-components";
// import ReactPaginate from "react-paginate";

export const Detail = styled(Link)`
  text-decoration-line: none;
  color: black;
  &:hover {
    color: #5d9c59;
    font-weight: 700;
  }
`;

const QuestionForm = () => {
  const [boarditem, setBoardItem] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${apiServer}/api/board/getboard`).then((response) => {
        const data = response.data;
        console.log(data);
        setBoardItem(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Header>
        <h2 style={{ margin: "15px" }}>Q&A 게시판</h2>
        <div>
          <Link to="/q&a/newpost">
            <NewQuestionBtn>새 질문</NewQuestionBtn>
          </Link>
        </div>
      </Header>
      <Table striped bordered hover size="m">
        <thead>
          <tr>
            <th>no.</th>
            <th>Title</th>
            <th>Username</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {boarditem.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <Detail to={`/q&a/detail/${item.id}`}>{item.subject}</Detail>
              </td>
              <td>{item.username}</td>
              <td>{item.create_date.split("T").shift()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <ReactPaginate
        pageCount={12}
        pageRangeDisplayed={10}
        marginPagesDisplayed={0}
        breakLabel={""}
        previousLabel={"이전"}
        nextLabel={"다음"}
        onPageChange={changePage}
        containerClassName={"pagination-ul"}
        activeClassName={"currentPage"}
        previousClassName={"pageLabel-btn"}
        nextClassName={"pageLabel-btn"}
      /> */}
    </Container>
  );
};

export default QuestionForm;
