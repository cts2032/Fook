import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  height: 600px;
  margin: 0 auto;
  background-color: #fafafa;
  box-shadow: 1px 5px 15px 5px lightgray;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
  height: max-content;
  margin-bottom: 20px;

  input[type="text"] {
    border: none;
    border-bottom: 1px solid #ccc;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px;
    font-size: 16px;
    font-family: "Helvetica Neue", "Arial", sans-serif;
    color: #333;
  }

  button {
    background-color: #c7e8ca;
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 70px;
    font-size: 16px;
    font-family: "Helvetica Neue", "Arial", sans-serif;
    color: gray;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #5d9c59;
      color: white;
    }
  }
`;

export const IngredientBox = styled.div`
  width: 100%;
  height: max-content;
  input {
    background-color: #c7e8ca;
  }
`;

export const Button = styled.button`
  background-color: #833ab4;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff7f50;
  }
`;
