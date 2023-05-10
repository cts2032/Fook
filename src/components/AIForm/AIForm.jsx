import React from "react";
import { Container, SearchContainer } from "./AIFormSty";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import apiServer from "../../api/api";
import { useState } from "react";

const AIForm = () => {
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("재료: ", ingredient);
    console.log("양: ", amount);
    try {
      const response = await axios.post(`${apiServer}/api/~~~`, {
        ingredient: ingredient,
        amount: amount,
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
        {/* <select id='select'>
          <option value="간장">간장</option>
          <option value="마늘">마늘</option>
          <option value="감자">감자</option>
        </select> */}
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
        g
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          className="material-icons"
          onClick={handleSubmit}
        >
          search
        </button>
      </SearchContainer>
    </Container>
  );
};

export default AIForm;
