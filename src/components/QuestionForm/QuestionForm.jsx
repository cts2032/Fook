import React, { useEffect, useState } from "react";
import { Container, Header, NewQuestionBtn } from "./QuestionFormSty";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";
import apiServer from "../../api/api";
// import ReactPaginate from "react-paginate";

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
          <tr>
            <td>
              {boarditem.map((item) => (
                <ul>
                  <li key={item.id}>{item.id}</li>
                </ul>
              ))}
            </td>
            <td>
              {boarditem.map((item) => (
                <ul>
                  <li key={item.id}>{item.subject}</li>
                </ul>
              ))}
            </td>
            <td>
              {boarditem.map((item) => (
                <ul>
                  <li key={item.id}>{item.username}</li>
                </ul>
              ))}
            </td>
            <td>
              {boarditem.map((item) => (
                <ul>
                  <li key={item.id}>{item.create_date}</li>
                </ul>
              ))}
            </td>
          </tr>
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
