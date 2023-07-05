import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import apiServer from "../../../api/api";
import {
  Button,
  Container,
  Form,
  Header,
  Input,
} from "../../LoginForm/LoginFormSty";

const DeleteForm = () => {
  const [username, setUsername] = useState("");
  const [usernameok, setUsernameOk] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const result = window.confirm("정말로 삭제하시겠습니까?");
    event.preventDefault();
    if ((username === "") & (usernameok === "")) {
      alert("아이디를 입력해주세요.");
    }
    if (username !== usernameok) {
      alert("아이디가 일치하지 않습니다.");
    } else {
      if (result) {
        try {
          const response = await axios.delete(
            `${apiServer}/api/user/delete/${localStorage.getItem("id")}`,
            {
              username,
            }
          );
          localStorage.removeItem("accessToken");
          localStorage.removeItem("id");
          alert("회원탈퇴 완료");
          navigate("/");
          // localStorage.setItem("username", response.data.name);
        } catch (error) {
          alert("아이디를 다시 확인해주세요.");
          console.log(error);
        }
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>회원탈퇴</Header>
        <Input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="아이디를 다시 입력해주세요"
          value={usernameok}
          onChange={(e) => setUsernameOk(e.target.value)}
          required
        />
        <Button type="submit">회원탈퇴</Button>
        <Link
          to="/signup"
          style={{ justifyContent: "center", marginTop: "10px" }}
        ></Link>
      </Form>
    </Container>
  );
};

export default DeleteForm;
