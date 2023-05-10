import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import apiServer from "../../../api/api";

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
  const [myitem, setMyItem] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`${apiServer}/api/board/detail/${localStorage.getItem("id")}`)
        .then((response) => {
          const data = response.data;
          console.log(data);
          setMyItem(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
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
          {myitem.map((item) => (
            <tr rkey={item.id}>
              <td>{item.id}</td>
              <td>{item.subject}</td>
              <td>{item.username}</td>
              <td>{item.create_date.split("T").shift()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewForm;
