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
  height: 40px;
  margin-top: 200px;
`;

export const Search = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin-left: 100px;
  input {
    width: 600px;
    height: inherit;
    padding: 4px 10px;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 5px;
    /* outline: none; */
    background-color: #fff;
    color: #777;
    font-size: 13px;
    transition: width 0.4s;
  }
  .material-icons {
    height: 24px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 5px;
    margin: auto;
    &:hover {
      color: #5d9c59;
      cursor: pointer;
    }
  }
`;
