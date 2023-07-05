import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  NewQuestionBtn,
  PageContainer,
} from "./QuestionFormSty";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";
import apiServer from "../../api/api";
import QuestionDetail from "./QuestionDetail";
import styled from "styled-components";
import { PageBox } from "../BestRecipeForm/BestRecipeSty";
import Paging from "../Paging/Paging";
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
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;

  useEffect(() => {
    try {
      axios.get(`${apiServer}/api/board/getboard`).then((response) => {
        const data = response.data;
        setBoardItem(response.data);
      });
    } catch (error) {
      console.log(error);
    }
    // 유저정보 가져오기
    axios
      .get(`${apiServer}/api/user/get_id/${localStorage.getItem("id")}`)
      .then((response) => {
        const userData = response.data;

        try {
          axios
            .get(`${apiServer}/likes?user_id=${userData[0].id}`)
            .then((response) => {
              // 요청에 대한 처리 로직 추가
              const Questionlikes = response.data;
              Questionlikes.likes.forEach((like) => {
                localStorage.setItem(
                  `questionlike_${like}`,
                  JSON.stringify(true)
                );
              });
            })
            .catch((error) => {
              console.error(error);
            });
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sortedBoardItems = boarditem.sort((a, b) => b.id - a.id);

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
          {sortedBoardItems.slice(offset, offset + limit).map((item, index) => (
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
      <PageContainer>
        <Paging
          total={boarditem.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </PageContainer>
    </Container>
  );
};

export default QuestionForm;
