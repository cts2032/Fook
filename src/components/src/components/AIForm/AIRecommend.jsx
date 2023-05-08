import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  height: 600px;
  margin: 0 auto;
  box-shadow: 1px 5px 15px 5px lightgray;
  margin-top: 30px;
  padding: 20px;
`;

const AIRecommend = () => {
  return (
    <Container>
      <div>AI의 추천</div>
    </Container>
  );
};

export default AIRecommend;
