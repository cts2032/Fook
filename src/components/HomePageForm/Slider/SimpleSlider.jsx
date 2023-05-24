import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import food1 from "../../Image/pizza.jpg";
import food2 from "../../Image/main2.jpg";
import food3 from "../../Image/foodImg.jpg";
import food4 from "../../Image/foodImg2.jpg";
import { Img, ImgBox } from "./SimpleSliderSty";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import apiServer from "../../../api/api";
import { Link } from "react-router-dom";

const SimpleSlider = () => {
  const [boarditem, setBoardItem] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    try {
      axios.get(`${apiServer}/api/recipe/getboard`).then((response) => {
        const data = response.data;
        console.log(data);
        setBoardItem(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // 좋아요 많은 순으로 내림차순 정렬
  const sortedBoardItems = boarditem.sort(
    (a, b) => b.like_count - a.like_count
  );

  // 5개만 나타내기
  const SlicingItem = sortedBoardItems.slice(0, 6);

  const extractImageSource = (content) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = content;
    const imageElement = tempElement.querySelector("img");
    if (imageElement) {
      return imageElement.src;
    }
    return null;
  };

  return (
    <div>
      <Slider {...settings}>
        {SlicingItem.map(
          (item) =>
            extractImageSource(item.content) && (
              <ImgBox key={item.id}>
                <Link to={`/best/detail/${item.id}`}>
                  <Img
                    src={extractImageSource(item.content)}
                    alt={`food${item.id}`}
                  />
                </Link>
              </ImgBox>
            )
        )}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
