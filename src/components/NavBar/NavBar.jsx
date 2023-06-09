import React, { useState } from "react";
import {
  Button,
  Click,
  Nav,
  NavButtons,
  Search,
  User,
  UserList,
  UserListForm,
} from "./NavBarSty";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import apiServer from "../../api/api";

const NavBar = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const menuItems = [
    {
      text: "공지사항",
      onClick: () => {
        navigate("/notice");
      },
    },
    {
      text: "인기 레시피",
      onClick: () => {
        navigate("/best");
      },
    },
    {
      text: "Q&A",
      onClick: () => {
        navigate("/q&a");
      },
    },
    {
      text: "AI추천",
      onClick: () => {
        navigate("/ai");
      },
    },
  ];

  useEffect(() => {
    axios
      .get(`${apiServer}/api/user/get_id/${localStorage.getItem("id")}`)
      .then((response) => {
        const userData = response.data;
        setUser(userData[0].name);
        console.log(userData);
        console.log("유저 이름 : ", userData[0].name);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const [view, setView] = useState(false);

  return (
    <Nav>
      <Search>
        <input type="text" placeholder="만들고싶은 요리를 검색해보세요." />
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          className="material-icons"
        >
          search
        </button>
      </Search>
      <NavButtons>
        <Button>
          <div>
            <ul
              onClick={() => {
                setView(!view);
              }}
            >
              <span className="material-symbols-outlined">menu</span>
              {view && (
                <>
                  <UserListForm>
                    <Click>
                      {menuItems.map((item, index) => {
                        return (
                          <UserList key={index} onClick={item.onClick}>
                            {item.text}
                          </UserList>
                        );
                      })}
                    </Click>
                  </UserListForm>
                </>
              )}
            </ul>
          </div>
        </Button>
      </NavButtons>
      {localStorage.getItem("id") !== null && (
        <User>
          <div>반갑습니다!</div>
          <div>
            <strong>{user}</strong> 님
          </div>
        </User>
      )}
    </Nav>
  );
};

export default NavBar;
