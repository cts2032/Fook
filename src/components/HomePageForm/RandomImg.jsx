import axios from "axios";
import React, { useEffect, useState } from "react";
import apiServer from "../../api/api";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImgBox = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RandomImg = () => {
  const [boarditem, setBoardItem] = useState([]);
  const [randomImage, setRandomImage] = useState(null);
  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    try {
      axios.get(`${apiServer}/api/recipe/getboard`).then((response) => {
        const data = response.data;
        setBoardItem(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (boarditem.length > 0) {
      const imagesWithContent = boarditem.filter(
        (item) => extractImageSource(item.content) !== null
      );
      if (imagesWithContent.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * imagesWithContent.length
        );
        const randomItem = imagesWithContent[randomIndex];
        const imageSource = extractImageSource(randomItem.content);
        setRandomImage(imageSource);
        setRandomItem(randomItem);
      }
    }
  }, [boarditem]);

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
      {randomItem && (
        <Link to={`/best/detail/${randomItem.id}`}>
          <ImgBox>
            {randomImage && <Img src={randomImage} alt="Random Image" />}
          </ImgBox>
        </Link>
      )}
    </div>
  );
};

export default RandomImg;
