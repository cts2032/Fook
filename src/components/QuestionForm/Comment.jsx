import React, { useState } from "react";
import styled from "styled-components";
import apiServer from "../../api/api";
import axios from "axios";
import { useEffect } from "react";

export const InputContainer = styled.div`
  width: 900px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px;
  width: 800px;
  margin-right: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
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

export const CommentContainer = styled.div`
  width: 900px;
  height: 300px;
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

const Comment = () => {
  const ID = String(localStorage.getItem("id"));
  const [username, setUsername] = useState(ID);
  const [create_date, setCreate_date] = useState(new Date());
  const now = new Date();
  const formattedDate = now.toISOString();
  const [comment, setComment] = useState("");
  const [commentItem, setCommentItem] = useState("");

  //댓글 보내기
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("작성자: ", username);
    console.log("댓글: ", comment);
    console.log("날짜: ", formattedDate);

    try {
      const response = await axios.post(`${apiServer}/api/~~~`, {
        username,
        comment,
        create_date,
      });
      alert("댓글 등록 성공");
      //   navigate("/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //댓글 가져오기
  useEffect(() => {
    try {
      axios.get(`${apiServer}/api/~~~`).then((response) => {
        const data = response.data;
        console.log(data);
        setCommentItem(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <InputContainer>
        <Input
          type="text"
          placeholder="댓글을 입력해주세요."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></Input>
        <input type="hidden" value={username} onChange={setUsername} />
        <input type="hidden" value={create_date} onChange={setCreate_date} />
        <Button onClick={handleSubmit}>등록</Button>
      </InputContainer>
      <CommentContainer>
        {/* {commentItem.map((item) => (
          <div key={item.id}>
            <div>{item.username}</div>
            <div>{item.content}</div>
            <div>{item.create_date.split("T").shift()}</div>
          </div>
        ))} */}
        <ul>
          <li className="user">작성자</li>
          <li className="comment">댓글~~~~~~~~~~~~~~~~~~~~~~~~~</li>
          <li className="date">2023.01.01</li>
        </ul>
        <div style={{ border: "1px dashed #ddd" }} />
        <ul>
          <li className="user">zzz</li>
          <li className="comment">zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</li>
          <li className="date">2023.01.02</li>
        </ul>
        <div style={{ border: "1px dashed #ddd" }} />
        <ul>
          <li className="user">sdf</li>
          <li className="comment">qweqweqwedsdfagagafdds</li>
          <li className="date">2023.01.02</li>
        </ul>
      </CommentContainer>
    </>
  );
};

export default Comment;
