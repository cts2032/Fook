import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  height: 600px;
  margin: 0 auto;
  background-color: white;
  justify-content: space-between;
  box-shadow: 1px 5px 15px 5px lightgray;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 500px;
  margin-bottom: 20px;
  border: 1px solid red;
  margin-left: 70px;
  input[type="text"] {
    width: 250px;
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
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
    margin: 0 auto;
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

export const ResultContainer = styled.div`
  width: 300px;
  height: 500px;
  margin-bottom: 20px;
  border: 1px solid red;
  margin-right: 70px;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const IngredientBox = styled.div`
  width: 100%;
  height: max-content;
  .ingredient {
    float: center;
    width: 230px;
    border: none;
    font-size: 20px;
    margin-right: 10px;
    text-align: center;
    background-color: #c7e8ca;
    border-radius: 50px 0px 1000px 1000px;
    color: gray;
    :hover {
      color: black;
    }
  }
  .amount {
    width: 180px;
    border: none;
    float: right;
    font-size: 20px;
    margin-right: 38.5px;
    text-align: center;
    background-color: #c7e8ca;
    border-radius: 0 0 1000px 1000px;
    color: gray;
    :hover {
      color: black;
    }
  }
  span {
    cursor: pointer;
    color: gray;
    :hover {
      color: black;
    }
  }
  .InputBox {
  }
`;

export const Button = styled.button`
  position: relative;
  bottom: 0;
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
