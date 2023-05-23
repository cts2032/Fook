import React from "react";
import { Container, IngredientBox, SearchContainer } from "./AIFormSty";
import axios from "axios";
import apiServer from "../../api/api";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

export const Button = styled.button`
  position: absolute;
  margin: auto;
  top: 650px;
  left: 0;
  right: 0;
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
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddIngredient = () => {
    if (ingredient === "" || amount === "") {
      alert("재료와 양을 모두 입력해주세요.");
      return;
    }

    setFormData([
      ...formData,
      {
        ingredient: ingredient,
        amount: amount,
      },
    ]);

    setIngredient("");
    setAmount("");
    console.log(location);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("formData: ", formData);

    const data = formData.reduce((acc, cur) => {
      acc[cur.ingredient.trim()] = parseInt(cur.amount.trim());
      return acc;
    }, {});
    console.log(data);
    try {
      const response = await axios
        .post(`${apiServer}/api/ai/predict`, data)
        .then((response) => {
          const data = response.data;
          window.location.href = `http://localhost:3000/ai/rec?result=${data}`;
        });
      console.log(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setFormData([]);
    setIngredient("");
    setAmount("");
  };

  return (
    <Container>
      <div>
        <h2 style={{ marginBottom: "20px" }}>AI 추천</h2>
      </div>
      <SearchContainer>
        <IngredientBox>
          {formData.map((item, index) => (
            <div key={index}>
              <input type="text" value={item.ingredient} disabled />
              <input type="text" value={item.amount} disabled />
            </div>
          ))}
        </IngredientBox>
        <input
          type="text"
          value={ingredient}
          placeholder="재료를 입력해주세요."
          onChange={(e) => setIngredient(e.target.value)}
        />
        <input
          type="text"
          value={amount}
          placeholder="숫자만 입력해주세요.(g,ml)"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddIngredient}>추가</button>
      </SearchContainer>
      <Button onClick={handleSubmit}>search</Button>
    </Container>
  );
};

export default AIForm;
