import axios from "axios";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import apiServer from "../../api/api";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const ViewContainer = styled.div`
  width: 900px;
  height: 600px;
  margin: 0 auto;
  box-shadow: 1px 5px 15px 5px lightgray;
  margin-top: 30px;
  padding: 20px;
  /* input {
    width: 850px;
    height: 40px;
    background-color: transparent;
    border: 1px solid lightgray;
    outline: none;
    border: 1px solid red;
  } */
`;

export const Header = styled.div`
  width: 100%;
  height: 45px;
  text-align: center;
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  width: 100%;
  height: 460px;
  margin-bottom: 15px;
  text-align: center;
`;

export const Date = styled.div`
  margin-left: 700px;
  height: 30px;
  text-align: center;
`;

export const LikeContainer = styled.div`
  width: 100%;
  height: 30px;
  text-align: right;
  .material-icons {
    margin-right: 60px;
    font-size: 24px;
    color: #ff4c4c;
    &:hover {
      cursor: pointer;
    }
  }
`;

const QuestionDetail = () => {
  const { id } = useParams();
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
    <ViewContainer>
      {boarditem.map((item) => (
        <div key={item.id}>
          <Header>{item.subject}</Header>
          <Content>{item.username}</Content>
          <Date>{item.create_date.split("T").shift()}</Date>
        </div>
      ))}

      {/* <LikeContainer>
        <span class="material-icons">favorite_border</span>
      </LikeContainer> */}
    </ViewContainer>
  );
};

export default QuestionDetail;
