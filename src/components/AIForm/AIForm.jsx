import React from "react";
import { Container, Search, SearchContainer } from "./AIFormSty";
import { Link } from "react-router-dom";

const AIForm = () => {
  return (
    <Container>
      <div>
        <h2>AI 추천</h2>
      </div>
      <SearchContainer>
        <Search>
          <input type="text" placeholder="AI의 추천!" />
          <Link to="/ai/rec">
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              className="material-icons"
            >
              search
            </button>
          </Link>
        </Search>
      </SearchContainer>
    </Container>
  );
};

export default AIForm;
