import axios from "axios";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import apiServer from "../../../api/api";
import { useState } from "react";

export const ViewContainer = styled.div`
  width: 900px;
  height: 500px;
  margin: 0 auto;
  box-shadow: 1px 5px 15px 5px lightgray;
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 20px;
`;

export const Header = styled.div`
  width: 100%;
  height: 37px;
  text-align: center;
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  width: 100%;
  height: 370px;
  text-align: center;
`;

export const Date = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 110px;
  height: 33px;
  margin-left: 750px;
  button {
    padding: 5px;
    width: 50px;
    height: 30px;
    background-color: #c7e8ca;
    color: gray;
    border: none;
    border-radius: 4px;
    font-size: 8px;
    cursor: pointer;

    &:hover {
      background-color: #5d9c59;
      color: white;
    }
  }
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

const MyDetail = () => {
  const [myitem, setMyItem] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${apiServer}/api/board/detail/${localStorage.getItem("id")}`)
        .then((response) => {
          const data = response.data;
          setMyItem(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <ViewContainer>
        {myitem.map((item) => (
          <div key={item.id}>
            <Header>{item.subject}</Header>
            <Content>{item.username}</Content>
            <Date>{item.create_date.split("T").shift()}</Date>
          </div>
        ))}
        <Header>dd</Header>
        <Content>dd</Content>
        <Date>2023.05.11</Date>

        {/* <LikeContainer>
        <span class="material-icons">favorite_border</span>
      </LikeContainer> */}
      </ViewContainer>
    </>
  );
};

export default MyDetail;
