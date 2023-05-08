import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  height: 900px;
  padding: 20px;
  /* margin-bottom: 100px; */
`;

export const Header = styled.div`
  width: 100%;
  height: 45px;
  padding: 10px;
  margin-bottom: 20px;
`;

const ViewForm = () => {
  return (
    <Container>
      <Header>
        <h3>내가 작성한 글</h3>
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
