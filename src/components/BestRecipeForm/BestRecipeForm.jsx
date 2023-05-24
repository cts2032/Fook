import React, { useEffect } from "react";
import {
  Container,
  DateLike,
  Header,
  LikeButton,
  NewPostButton,
  PageBox,
  Post,
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostTitle,
  Title,
} from "./BestRecipeSty";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import apiServer from "../../api/api";
import DOMPurify from "dompurify";
import noImage from "../Image/no_image.png";
import Paging from "../Paging/Paging";

const BestRecipeForm = () => {
  const [boarditem, setBoardItem] = useState([]);
  const [like, setLike] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const offset = (page - 1) * limit;

  const ChangeLike = () => {
    if (!like) {
      setLikeNumber(likeNumber + 1);
    }
    if (like) {
      setLikeNumber(likeNumber - 1);
    }
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
    // 유저정보 가져오기
    axios
      .get(`${apiServer}/api/user/get_id/${localStorage.getItem("id")}`)
      .then((response) => {
        const userData = response.data;
        console.log("유저아이디 : ", userData[0].id);

        try {
          axios
            .get(`${apiServer}/likes?user_id=${userData[0].id}`)
            .then((response) => {
              // 요청에 대한 처리 로직 추가
              console.log(response.data);
              const Recipelikes = response.data;
              console.log(
                "좋아요 한 레시피게시물: " + Recipelikes.recipe_likes
              );
              Recipelikes.recipe_likes.forEach((like) => {
                localStorage.setItem(
                  `recipelike_${like}`,
                  JSON.stringify(true)
                );
              });
            })
            .catch((error) => {
              console.error(error);
            });
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Function to extract image source from content
  const extractImageSource = (content) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = content;
    const imageElement = tempElement.querySelector("img");
    if (imageElement) {
      return imageElement.src;
    }
    return noImage;
  };

  return (
    <Container>
      <Header>
        <Title>후기 게시판</Title>
        <Link to="/best/newpost">
          <NewPostButton>새 게시글</NewPostButton>
        </Link>
      </Header>
      <PostContainer>
        {boarditem.slice(offset, offset + limit).map((item) => (
          <Post key={item.id}>
            <Link to={`/best/detail/${item.id}`}>
              <PostImage src={extractImageSource(item.content)} />
            </Link>
            <PostContent>
              <PostTitle>{item.subject}</PostTitle>
              <PostDescription
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.content),
                }}
              />
              <DateLike>
                <PostDate>{item.create_date}</PostDate>
              </DateLike>
            </PostContent>
          </Post>
        ))}
        <PageBox>
          <Paging
            total={boarditem.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </PageBox>
      </PostContainer>
    </Container>
  );
};

export default BestRecipeForm;
