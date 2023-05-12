import React from "react";
import styled from "styled-components";
import boardImg from "../Image/foodImg.jpg";
import Comment from "./Comment";

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
  margin-bottom: 15px;
`;

export const Content = styled.div`
  width: 100%;
  height: 370px;
  text-align: center;
`;

export const Img = styled.img`
  width: 500px;
  height: 300px;
  margin-left: 180px;
  margin-bottom: 10px;
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

const ViewPost = () => {
  return (
    <>
      <ViewContainer>
        <Header>
          <h3>제목</h3>
        </Header>
        <Content>
          {/* <div>
          <Img src={boardImg} alt="img"></Img>
        </div> */}
          <div>내용~~~~~~~~~~~~</div>
        </Content>
        <Date>
          <div>2023.05.03</div>
        </Date>
        {/* <LikeContainer>
        <span class="material-icons">favorite_border</span>
      </LikeContainer> */}
      </ViewContainer>
      <Comment />
    </>
  );
};

export default ViewPost;
