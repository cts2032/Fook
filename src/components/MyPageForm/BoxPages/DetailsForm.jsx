import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import apiServer from "../../../api/api";
import { Navigate } from "react-router-dom";
import { Button } from "../../QuestionForm/NewQuestion";

const DetailsForm = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [birth, setBirth] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateUser = { name, birth, email, phonenumber };
    try {
      const response = await axios.patch(
        `${apiServer}/api/user/${localStorage.getItem("id")}?name=${username}`,

        updateUser
      );
      alert("수정 성공");
      Navigate("/mypage");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h1>내 정보 수정</h1>
      <Form>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNickname">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="변경할 이름을 입력해주세요."
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="변경할 이메일을 입력해주세요."
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              value={phonenumber}
              placeholder="변경할 전화번호를 입력해주세요."
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Birth</Form.Label>
            <Form.Control
              type="text"
              value={birth}
              placeholder="변경할 생일을 입력해주세요."
              onChange={(e) => setBirth(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Form>
    </div>
  );
};

export default DetailsForm;
