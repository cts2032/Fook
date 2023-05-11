import axios from "axios";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import apiServer from "../../api/api";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comment from "./Comment";

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

export const Date = styled.div`
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
const QuestionDetail = () => {
  const { id } = useParams();
  const [boarditem, setBoardItem] = useState([]);
  const navigate = useNavigate();

  const deleteQ = async (event) => {
    const result = window.confirm("정말로 삭제하시겠습니까?");
    event.preventDefault();
    if (result) {
      try {
        const response = await axios.delete(
          `${apiServer}/api/board/delete/${localStorage.getItem("id")}`,
          { id }
        );
        console.log(response);
        alert("질문 삭제 완료");
        navigate("/q&a");
      } catch (error) {
        alert("질문 삭제에 실패했습니다.");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    try {
      axios.get(`${apiServer}/api/board/getboard`).then((response) => {
        const data = response.data;
        console.log(data);
        setBoardItem(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <QuestionContainer>
        {boarditem.map((item) => (
          <div key={item.id}>
            {item.username === localStorage.getItem("id") ? (
              <BtnContainer>
                <Link to={`/q&a/newpost/modify/${item.id}`}>
                  <button>수정</button>
                </Link>
                <button onClick={deleteQ}>삭제</button>
              </BtnContainer>
            ) : (
              <div style={{ marginBottom: "0" }} />
            )}
            <Header>{item.subject}</Header>
            <Content>{item.content}</Content>
            <Date>{item.create_date.split("T").shift()}</Date>
          </div>
        ))}
        {/* <div key={boarditem.id}>
          <Header>{boarditem.id}</Header>
          <Content>{boarditem.id}</Content>
          <Date>{boarditem.create_date.split("T").shift()}</Date>
        </div> */}
        {/* <LikeContainer>
        <span class="material-icons">favorite_border</span>
      </LikeContainer> */}
      </QuestionContainer>
      <Comment />
    </>
  );
};

export default QuestionDetail;
