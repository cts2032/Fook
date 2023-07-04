import React from "react";
import {
  Container,
  IngredientBox,
  ResultContainer,
  SearchContainer,
} from "./AIFormSty";
import axios from "axios";
import apiServer from "../../api/api";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

export const Button = styled.button`
  margin: auto;
  position: relative;
  bottom: -250px;
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

  // handleDelete 함수 정의
  const handleDelete = (index) => {
    // 새로운 배열 생성하여 삭제할 인덱스를 제외한 나머지 요소들을 복사
    const updatedFormData = formData.filter((item, i) => i !== index);

    // formData 업데이트
    setFormData(updatedFormData);
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
      <div className="text">
        냉장고에 남아있는 재료들로 <br />
        AI에게 레시피를 추천받아보세요!
      </div>
      <div style={{ display: "flex" }}>
        <SearchContainer>
          <div>재료</div>
          <input
            type="text"
            value={ingredient}
            placeholder="재료를 입력해주세요."
            onChange={(e) => setIngredient(e.target.value)}
          />
          <div>양</div>
          <input
            type="text"
            value={amount}
            placeholder="숫자만 입력해주세요.(g,ml)"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleAddIngredient}>추가</button>
        </SearchContainer>
        <Button onClick={handleSubmit}>search</Button>
        <ResultContainer>
          <IngredientBox>
            {formData.map((item, index) => (
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  backgroundColor: "transparent",
                  borderRadius: "10px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "30px",
                    }}
                    onClick={() => handleDelete(index)}
                    className="material-symbols-outlined"
                  >
                    cancel
                  </span>
                </div>
                <div className="speech-bubble" key={index}>
                  <input
                    type="text"
                    value={"재료 : " + item.ingredient}
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      textAlign: "center",
                      fontSize: "17px",
                    }}
                    disabled
                  />
                  <input
                    type="text"
                    value={"양 : " + item.amount}
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      textAlign: "center",
                      fontSize: "17px",
                    }}
                    disabled
                  />
                </div>
              </div>
            ))}
          </IngredientBox>
        </ResultContainer>
      </div>
    </Container>
  );
};

export default AIForm;
