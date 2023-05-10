import React from "react";

import { Link, useNavigate } from "react-router-dom";
import logo from "../Image/fook_logo3.png";
import { Button } from "../NavBar/NavBarSty";
import { BnContainer, Brand, LButtonBox, RButtonBox } from "./BotNavSty";

const BotNav = () => {
  const navigate = useNavigate();

  const onClickMy = () => {
    if (!localStorage.getItem("id")) {
      navigate("/login");
      alert("로그인 후 이용가능합니다.");
      return;
    } else navigate(`/mypage/${localStorage.getItem("id")}`);
  };
  // const onClickMy = () => {
  //   navigate(`/mypage`);
  // };

  const handleLogout = async (event) => {
    event.preventDefault();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("id");
    alert("로그아웃 성공");
    navigate("/login");
  };

  return (
    <>
      <Link to="/">
        <Brand src={logo} alt=""></Brand>
      </Link>
      <BnContainer>
        <LButtonBox>
          <Button
            style={{ float: "right", marginRight: "15px" }}
            onClick={onClickMy}
          >
            <span>MyPage</span>
            <span class="material-symbols-outlined">
              settings_accessibility
            </span>
          </Button>
        </LButtonBox>

        <RButtonBox>
          {localStorage.getItem("id") === null ? (
            <Link to="/login">
              <Button>
                <span class="material-symbols-outlined">login</span>
                <span>Login</span>
              </Button>
            </Link>
          ) : (
            <Button onClick={handleLogout}>
              <span class="material-symbols-outlined">logout</span>
              <span>Logout</span>
            </Button>
          )}
        </RButtonBox>
      </BnContainer>
    </>
  );
};

export default BotNav;
