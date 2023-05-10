import React from "react";

import { Table } from "react-bootstrap";
import { Container, Header } from "./NoticeFormSty";
// import ReactPaginate from "react-paginate";

const NoticeForm = () => {
  return (
    <Container>
      <Header>
        <h2 style={{ marginLeft: "15px", marginBottom: "30px" }}>공지사항</h2>
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
            <td>공지사항입니다.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>2</td>
            <td>회원분들께 알려드립니다.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>안녕하세요.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>4</td>
            <td>안녕하세요.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>5</td>
            <td>안녕하세요.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>6</td>
            <td>안녕하세요.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>7</td>
            <td>안녕하세요.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>8</td>
            <td>안녕하세요.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>9</td>
            <td>안녕하세요.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>10</td>
            <td>안녕하세요.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>11</td>
            <td>안녕하세요.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
          <tr>
            <td>12</td>
            <td>안녕하세요.</td>
            <td>admin</td>
            <td>2023/04/26</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default NoticeForm;
