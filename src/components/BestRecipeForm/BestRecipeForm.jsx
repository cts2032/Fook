import React, { useEffect } from "react";
import {
  Container,
  DateLike,
  Header,
  LikeButton,
  NewPostButton,
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

const BestRecipeForm = () => {
  const [boarditem, setBoardItem] = useState([]);
  const [like, setLike] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);
  // const [id, setId] = useState("");

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
  }, []);

  return (
    <Container>
      <Header>
        <Title>후기 게시판</Title>
        <Link to="/best/newpost">
          <NewPostButton>새 게시글</NewPostButton>
        </Link>
      </Header>
      <PostContainer>
        {boarditem.map((item) => (
          <Post key={item.id}>
            <Link to={`/best/detail/${item.id}`}>
              <PostImage src="~~" />
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
                {/* <LikeButton>
                  <span
                    onClick={() => {
                      setLike((e) => !e);
                      ChangeLike();
                    }}
                    class="material-icons"
                  >
                    {!like ? "favorite_border" : "favorite"}
                  </span>
                  <p
                    style={{
                      fontSize: "3px",
                      textAlign: "center",
                      marginRight: "9px",
                    }}
                  >
                    {likeNumber}
                  </p>
                </LikeButton> */}
              </DateLike>
            </PostContent>
          </Post>
        ))}
      </PostContainer>
    </Container>
  );
};

export default BestRecipeForm;
