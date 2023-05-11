import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  height: 600px;
  margin: 0 auto;
  box-shadow: 1px 5px 15px 5px lightgray;
  margin-top: 30px;
  padding: 20px;
`;

export const SearchContainer = styled.div`
  width: 800px;
  height: 200px;
  margin-top: 50px;
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 43px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 70px;
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
