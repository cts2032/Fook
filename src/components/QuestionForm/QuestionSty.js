import styled from "styled-components";

export const QuestionContainer = styled.div`
  width: 900px;
  height: 300px;
  margin: 0 auto;
  box-shadow: 1px 5px 15px 5px lightgray;
  margin-top: 30px;
  margin-bottom: 80px;
  padding: 20px;
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

export const Header = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  width: 100%;
  height: 130px;
  text-align: center;
`;

export const CD = styled.div`
  width: 100%;
  height: 25px;
  margin-bottom: 15px;
  text-align: center;
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
  width: 70px;
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
  padding: 20px;
  ul {
    width: 100%;
    display: flex;
    padding: 10px;
    margin: 0 auto;
    .user {
      width: 20%;
    }
    .comment {
      width: 60%;
    }
    .date {
      width: 20%;
    }
  }
`;
