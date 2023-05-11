import React from "react";
import { BtnContainer, Button, Container, SearchContainer } from "./AIFormSty";
import axios from "axios";
import apiServer from "../../api/api";
import { useState } from "react";
import styled from "styled-components";

const AIForm = () => {
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");
  const [inputs, setInputs] = useState({
    count: 1,
    ingredient1: "",
    amount1: "",
  });

  const addInput = () => {
    const number = inputs.count + 1;

    setInputs({
      ...inputs,
      count: number,
      [`ingredient${number}`]: "",
      [`amount${number}`]: "",
    });
  };

  const deleteInput = (i) => {
    if (inputs.count === 1) {
      alert("하나 이상의 입력값은 필수사항입니다.");
      return;
    }

    const newInputs = { ...inputs };

    for (let n = i; n <= newInputs.count; n++) {
      if (n === i) {
        delete newInputs[`ingredient${n}`];
        delete newInputs[`amount${n}`];
      } else {
        Object.defineProperty(
          newInputs,
          "ingredient" + (n - 1),
          "amount" + (n - 1),
          Object.getOwnPropertyDescriptor(newInputs, "ingredient" + n),
          Object.getOwnPropertyDescriptor(newInputs, "amount" + n)
        );
        delete newInputs[`input${n}`];
      }
    }

    setInputs({ ...newInputs, count: inputs.count - 1 });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log("재료: ", inputs.ingredient, "양: ", inputs.amount);

    if (inputs.ingredient === "") {
      alert("재료를 입력해주세요.");
      return;
    }
    if (amount === "") {
      alert("양을 입력해주세요.");
      return;
    }

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
        {/* <input
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
        /> */}
        {inputs.count > 0 &&
          [...Array(inputs.count)].map((item, i) => {
            return (
              <div key={i + 1}>
                <input
                  type="text"
                  placeholder="재료를 입력해주세요."
                  value={inputs[`ingredient${i + 1}`]}
                  name={`ingredient${i + 1}`}
                  onChange={(e) => {
                    setInputs({ ...inputs, [e.target.name]: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="무게를 입력해주세요. "
                  value={inputs[`amount${i + 1}`]}
                  name={`amount${i + 1}`}
                  onChange={(e) => {
                    setInputs({ ...inputs, [e.target.name]: e.target.value });
                  }}
                />
                <button
                  onClick={() => {
                    deleteInput(i + 1);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
        <button onClick={addInput}>추가</button>
      </SearchContainer>
      <BtnContainer>
        <Button onClick={handleSubmit}>search</Button>
      </BtnContainer>
    </Container>
  );
};

export default AIForm;
