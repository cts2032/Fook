import React, { useEffect, useState } from "react";
import {
  Boards,
  Home,
  HomeNotice,
  MainRecipe,
  Notice,
  Title,
  TodayRecipe,
} from "./HomePageSty";
import SimpleSlider from "./Slider/SimpleSlider";
import RandomImg from "./RandomImg";
import axios from "axios";
import apiServer from "../../api/api";
import { Link } from "react-router-dom";
import { Detail } from "../NoticeForm/NoticeForm";

const HomeForm = () => {
  const [boarditem, setBoardItem] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${apiServer}/api/admin/getboard`).then((response) => {
        const data = response.data;
        setBoardItem(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const sortedBoardItems = boarditem.sort((a, b) => b.id - a.id);
  const SlicingItem = sortedBoardItems.slice(0, 5);

  return (
    <Home style={{ display: "block" }}>
      <Boards>
        <MainRecipe>
          <div>
            <Title>인기 레시피</Title>
          </div>
          <SimpleSlider />
        </MainRecipe>
        <TodayRecipe>
          <div>
            <Title>랜덤 레시피</Title>
          </div>
          <RandomImg />
        </TodayRecipe>
        <Notice>
          <div>
            <Title>공지사항</Title>
          </div>
          {SlicingItem.map((item, index) => (
            <HomeNotice key={item.id}>
              <p>{index + 1}.</p>
              <p>
                <Detail to={`/notice/detail/${item.id}`}>{item.subject}</Detail>
              </p>
            </HomeNotice>
          ))}
        </Notice>
      </Boards>
    </Home>
  );
};

export default HomeForm;
