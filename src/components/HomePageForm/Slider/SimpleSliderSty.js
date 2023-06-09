import styled from "styled-components";

export const ImgBox = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
