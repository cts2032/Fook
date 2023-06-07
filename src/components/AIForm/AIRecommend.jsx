import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 900px;
  height: max-content;
  margin: 0 auto;
  box-shadow: 1px 5px 15px 5px lightgray;
  margin-top: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  margin-bottom: 20px;
  border-radius: 20px;
`;
const BackButton = styled.button`
  padding: 10px;
  width: 100px;
  background-color: #c7e8ca;
  color: gray;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #5d9c59;
    color: white;
  }
`;
const AIRecommend = () => {
  const url = new URLSearchParams(window.location.search);
  const data = url.get("result").replace(/"/g, "");
  const imageUrl =
    data === `${data}` ? process.env.PUBLIC_URL + `/image/${data}.png` : null;

  return (
    <Container>
      <TextBox>
        <div>AI의 추천은</div>
        <div>
          <strong>"{data}"</strong> 입니다.
        </div>
      </TextBox>
      <ImageContainer src={imageUrl} alt="example" />
      <Link to={`/ai`}>
        <BackButton>돌아가기</BackButton>
      </Link>
    </Container>
  );
};
export default AIRecommend;
