import ReactQuill from "react-quill";
import styled from "styled-components";

export const QuestionContainer = styled.div`
  width: 900px;
  height: max-content;
  margin: 0 auto;
  box-shadow: 1px 5px 15px 5px lightgray;
  margin-top: 30px;
  margin-bottom: 80px;
  padding: 20px;
`;

export const Header = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  width: 100%;
  height: max-content;
  text-align: center;
`;

export const CD = styled.div`
  width: 100%;
  height: 25px;
  margin-bottom: 15px;
  text-align: center;
`;

export const ButtonLike = styled.div`
  width: 870px;
  display: flex;
  justify-content: left;
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 47.5%;
  height: 40px;
  justify-content: right;
  button {
    margin-right: 10px;
    margin-top: 5px;
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
  width: 52.5%;
  height: 40px;
`;

export const LikeButton = styled.div`
  margin-left: 413px;
  width: 35px;
  height: 40px;
  display: flex;
  flex-direction: column;
  .material-icons {
    font-size: 24px;
    text-align: center;
    color: #ff4c4c;
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  width: 900px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px;
  width: 700px;
  margin-right: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
`;

export const Input2 = styled.input`
  width: 100%;
`;

export const Button2 = styled.button`
  padding: 10px;
  width: 70px;
  background-color: #c7e8ca;
  color: gray;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;
export const Button = styled.button`
  padding: 10px;
  width: 50px;
  height: 40px;
  margin-left: 10px;
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

export const Button3 = styled.button`
  padding: 5px;
  width: 50px;
  height: 32px;
  margin-left: 10px;
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

export const CommentContainer = styled.div`
  width: 900px;
  height: max-content;
  margin: 0 auto;
  box-shadow: 1px 5px 15px 5px lightgray;
  margin-top: 15px;
  margin-bottom: 100px;
  padding: 20px;
  ul {
    width: 100%;
    display: flex;
    padding: 5px;
    margin: 0 auto;
  }
`;

export const CommentDiv = styled.div`
  display: flex;
  height: max-content;
  flex-direction: column;
`;

export const CommentUl = styled.ul`
  border-bottom: 1px dotted #bbb;
  height: max-content;
  min-height: 60px;
  input {
    width: 338px;
    height: 40px;
    margin-right: 45px;
    border: 1px solid #ccc;
  }
  .user {
    width: 15%;
  }
  .comment {
    width: 45%;
  }
  .date {
    width: 15%;
  }
  .button {
    width: 25%;
  }
`;
export const CommentUl2 = styled.ul`
  border-bottom: 1px dotted #bbb;
  height: max-content;
  p {
    margin-left: 50px;
    margin-top: 10px;
    margin-right: 10px;
    color: #aaa;
  }
  input {
    width: 297px;
    height: 40px;
    border: 1px solid #ccc;
    margin-right: 10px;
  }
  .user {
    width: 15%;
  }
  .comment {
    width: 36%;
  }
  .date {
    width: 15%;
  }
`;

export const CommentUl3 = styled.ul`
  border-bottom: 1px dotted #bbb;
  height: max-content;
  p {
    margin-left: 50px;
    margin-top: 10px;
    margin-right: 10px;
    color: #aaa;
  }
  input {
    width: 450px;
    height: 30px;
    margin-left: 70px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
  .user {
    width: 15%;
  }
  .comment {
    width: 36%;
  }
  .date {
    width: 15%;
  }
  .button {
    margin-top: 20px;
    width: 6%;
  }
`;
export const CommentLi = styled.li`
  padding-top: 10px;
  display: flex;
  .material-symbols-outlined {
    font-size: 22px;
    color: gray;
  }
`;

export const StyledReactQuill = styled(ReactQuill)`
  .ql-toolbar {
    border: none;
    padding: 8px;
    background-color: #f5f5f5;
    font-size: 14px;
    font-family: "Noto Sans KR", sans-serif;
    border-radius: 5px 5px 0 0;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }

  .ql-container {
    border: none;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
  }

  .ql-editor {
    min-height: 300px;
    line-height: 1.6;
  }

  .ql-snow .ql-picker-label {
    color: #000;
  }

  .ql-snow .ql-picker-options {
    padding: 8px;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }

  .ql-snow .ql-picker-item {
    padding: 5px;
    cursor: pointer;
  }

  .ql-snow .ql-picker-item:hover {
    background-color: #f5f5f5;
  }

  .ql-snow .ql-picker-item.ql-selected {
    background-color: #0077c6;
    color: #fff;
  }

  .ql-snow .ql-action {
    color: #000;
  }

  .ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #0077c6;
  }

  .ql-snow .ql-picker.ql-expanded .ql-picker-item {
    color: #000;
  }

  .ql-snow .ql-picker.ql-expanded .ql-picker-item:hover,
  .ql-snow .ql-picker.ql-expanded .ql-picker-item.ql-selected {
    background-color: #f5f5f5;
  }

  .ql-toolbar .ql-formats + .ql-formats,
  .ql-toolbar .ql-snow + .ql-snow {
    margin-left: 8px;
  }

  .ql-snow.ql-toolbar:after {
    clear: both;
    content: "";
    display: table;
  }
`;
