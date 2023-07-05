import React from "react";

import { Table } from "react-bootstrap";
import { Container, Header, NewPostButton } from "./NoticeFormSty";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import apiServer from "../../api/api";
import { useEffect } from "react";
import styled from "styled-components";
import Paging from "../Paging/Paging";
import { PageContainer } from "../QuestionForm/QuestionFormSty";

export const Detail = styled(Link)`
  text-decoration-line: none;
  color: black;
  &:hover {
    color: #5d9c59;
    font-weight: 700;
  }
`;

const NoticeForm = () => {
  const [boarditem, setBoardItem] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;

  useEffect(() => {
    try {
      axios.get(`${apiServer}/api/admin/getboard`).then((response) => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sortedBoardItems = boarditem.sort((a, b) => b.id - a.id);

  return (
    <Container>
      <Header>
        <h2 style={{ marginLeft: "15px" }}>공지사항</h2>
        {localStorage.getItem("id") === "admin" && (
          <Link to="/notice/newpost">
            <NewPostButton>새 게시글</NewPostButton>
          </Link>
        )}
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
                <Detail to={`/notice/detail/${item.id}`}>{item.subject}</Detail>
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

export default NoticeForm;
