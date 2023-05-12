import React from "react";
import { Container, SearchContainer } from "./AIFormSty";
import axios from "axios";
import apiServer from "../../api/api";
import { useState } from "react";
import styled from "styled-components";

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

const AIForm = () => {
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("재료: ", ingredient);
    console.log("양: ", amount);

    if (ingredient === "") {
      alert("재료를 입력해주세요.");
      return;
    }
    if (amount === "") {
      alert("양을 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(`${apiServer}/api/ai/predict`, {
        ingredient,
        amount,
      });
      alert("ai 추천 성공");
      // navigate("/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div>
        <h2>AI 추천</h2>
      </div>
      <SearchContainer>
        <input
          type="text"
          value={ingredient}
          placeholder="재료를 입력해주세요."
          onChange={(e) => setIngredient(e.target.value)}
        />
        <input
          type="text"
          value={amount}
          placeholder="숫자만 입력해주세요."
          onChange={(e) => setAmount(e.target.value)}
        />

        <button>추가</button>
      </SearchContainer>
      <Button onClick={handleSubmit}>search</Button>
    </Container>
  );
};

export default AIForm;
