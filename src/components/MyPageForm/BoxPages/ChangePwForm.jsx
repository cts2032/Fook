import React from "react";
import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Header,
  Input,
} from "../../LoginForm/LoginFormSty";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiServer from "../../../api/api";
import { Warning } from "../../RegisterForm/RegisterSty";

const ChangePwForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentpassword, setCurrentpassword] = useState("");
  const [newPasswordOk, setNewPasswordOk] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const containsSpecialCharacter = (password) => {
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharacterRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("New Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!containsSpecialCharacter(password)) {
      alert("비밀번호에는 최소 1개의 특수 문자가 포함되어야 합니다.");
      return;
    }

    try {
      const response = await axios.patch(
        `${apiServer}/api/user/updatepw/${localStorage.getItem("id")}`,
        {
          password,
        }
      );
      alert("비밀번호 변경 성공");
      navigate("/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>비밀번호 변경</Header>
        <Input
          type="password"
          placeholder="새 비밀번호"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (containsSpecialCharacter(e.target.value)) {
              setNewPasswordOk(true);
            } else {
              setNewPasswordOk(false);
            }
          }}
          required
        />
        {!newPasswordOk ? (
          <Warning>특수문자를 1개 이상 포함해야 합니다.</Warning>
        ) : (
          <div style={{ marginBottom: "0" }} />
        )}
        <Input
          type="password"
          placeholder="새 비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">확인</Button>
      </Form>
    </Container>
  );
};

export default ChangePwForm;
