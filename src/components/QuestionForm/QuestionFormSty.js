import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  height: 600px;
  margin: 0 auto;
  /* box-shadow: 1px 5px 15px 5px lightgray; */
  margin-top: 30px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewQuestionBtn = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #5d9c59;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 50px;
`;
