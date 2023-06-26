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
  border: 3px solid #ddd;
  border-radius: 10px;
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
  border: 3px solid #ddd;
  border-radius: 10px;
  margin-right: 70px;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const IngredientBox = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    cursor: pointer;
    margin-top: 22px;
    color: gray;
    :hover {
      color: black;
    }
  }
  .speech-bubble {
    position: relative;
    background: #ffeb60;
    border-radius: 0.4em;
    width: max-content;
    max-width: 80%;
    height: 60px;
    padding: 5px;
    right: 5px;
    margin: 10px;
    margin-left: auto;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    color: #333333;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  }
  .speech-bubble:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-left-color: #ffeb60;
    border-right: 0;
    border-top: 0;
    margin-top: -6px;
    margin-right: -10px;
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
