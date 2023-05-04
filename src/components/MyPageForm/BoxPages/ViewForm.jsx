import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  height: 670px;
  width: 800px;
  padding: 10px;
`;

export const Header = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const ViewForm = () => {
  return (
    <Container>
      <Header>
        <h3>내가 작성한 글</h3>
      </Header>
      <Table striped bordered hover size="sm">
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
            <td>1</td>
            <td>영상이 안 떠요!</td>
            <td>aaa</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>2</td>
            <td>회원 수정은 어디서 하나요?</td>
            <td>bbb</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕하세요.</td>
            <td>aaa</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕하세요.</td>
            <td>ccc</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕하세요.</td>
            <td>ccc</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕하세요.</td>
            <td>ccc</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕하세요.</td>
            <td>ccc</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕하세요.</td>
            <td>ccc</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕하세요.</td>
            <td>ccc</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕하세요.</td>
            <td>ccc</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕하세요.</td>
            <td>ccc</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕하세요.</td>
            <td>ccc</td>
            <td>2023/04/26</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewForm;
