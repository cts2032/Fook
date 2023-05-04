import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  height: 670px;
  padding: 20px;
  margin-bottom: 100px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
  align-items: center;
`;

export const Title = styled.h3`
  margin-left: 20px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 580px;
  justify-content: left;
  margin-top: 20px;
`;

export const Post = styled.div`
  width: 200px;
  height: 280px;
  margin-bottom: 20px;
  margin-right: 25px;
  margin-left: 25px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 60%;
`;

export const PostContent = styled.div`
  border: 1px solid #dbdbdb;
  padding: 10px;
  height: 40%;
`;

export const PostTitle = styled.h3`
  margin: 0;
  font-size: 15px;
  height: 18%;
`;

export const PostDescription = styled.p`
  margin: 0;
  margin-top: 3px;
  height: 60%;
  overflow: hidden;
  font-size: 13px;
`;

export const DateLike = styled.div`
  height: 22%;
  width: 100%;
  display: flex;
`;

export const PostDate = styled.p`
  margin: 0;
  margin-top: 8px;
  width: 85%;
  height: 17px;
  font-size: 12px;
  color: #8e8e8e;
`;

export const LikeButton = styled.div`
  width: 15%;
  height: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  .material-icons {
    font-size: 24px;
    color: #ff4c4c;
    &:hover {
      cursor: pointer;
    }
  }
`;

const LikeForm = () => {
  const [like, setLike] = useState(true);

  return (
    <Container>
      <Header>
        <Title>좋아요 리스트</Title>
      </Header>
      <PostContainer>
        <Post>
          <Link to="/best/view">
            <PostImage src="https://picsum.photos/200" />
          </Link>
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <DateLike>
              <PostDate>2023.04.23</PostDate>
              <LikeButton>
                <span
                  onClick={() => {
                    setLike((e) => !e);
                  }}
                  class="material-icons"
                >
                  {!like ? "favorite_border" : "favorite"}
                </span>
              </LikeButton>
            </DateLike>
          </PostContent>
        </Post>
        <Post>
          <Link to="/best/view">
            <PostImage src="https://picsum.photos/200" />
          </Link>
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <DateLike>
              <PostDate>2023.04.23</PostDate>
              <LikeButton>
                <span
                  onClick={() => {
                    setLike((e) => !e);
                  }}
                  class="material-icons"
                >
                  {!like ? "favorite_border" : "favorite"}
                </span>
              </LikeButton>
            </DateLike>
          </PostContent>
        </Post>
        <Post>
          <Link to="/best/view">
            <PostImage src="https://picsum.photos/200" />
          </Link>
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <DateLike>
              <PostDate>2023.04.23</PostDate>
              <LikeButton>
                <span
                  onClick={() => {
                    setLike((e) => !e);
                  }}
                  class="material-icons"
                >
                  {!like ? "favorite_border" : "favorite"}
                </span>
              </LikeButton>
            </DateLike>
          </PostContent>
        </Post>
        <Post>
          <Link to="/best/view">
            <PostImage src="https://picsum.photos/200" />
          </Link>
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <DateLike>
              <PostDate>2023.04.23</PostDate>
              <LikeButton>
                <span
                  onClick={() => {
                    setLike((e) => !e);
                  }}
                  class="material-icons"
                >
                  {!like ? "favorite_border" : "favorite"}
                </span>
              </LikeButton>
            </DateLike>
          </PostContent>
        </Post>
        <Post>
          <Link to="/best/view">
            <PostImage src="https://picsum.photos/200" />
          </Link>
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <DateLike>
              <PostDate>2023.04.23</PostDate>
              <LikeButton>
                <span
                  onClick={() => {
                    setLike((e) => !e);
                  }}
                  class="material-icons"
                >
                  {!like ? "favorite_border" : "favorite"}
                </span>
              </LikeButton>
            </DateLike>
          </PostContent>
        </Post>
      </PostContainer>
    </Container>
  );
};

export default LikeForm;
