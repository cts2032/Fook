import axios from "axios";
import React from "react";
import { useEffect } from "react";
import apiServer from "../../api/api";
import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import {
  BtnContainer,
  Button,
  Button2,
  CD,
  CommentContainer,
  CommentLi,
  CommentUl,
  Content,
  Header,
  Input,
  InputContainer,
  QuestionContainer,
} from "./QuestionSty";

const QuestionDetail = () => {
  const ID = String(localStorage.getItem("id"));
  const [username, setUsername] = useState(ID);
  const [create_date, setCreate_date] = useState(new Date());
  const now = new Date();
  const formattedDate = now.toISOString();
  const [comment, setComment] = useState("");
  const [commentItem, setCommentItem] = useState([]);
  const [pri, setPri] = useState(true);
  const url = document.location.href;
  const splitUrl = url.split("/");
  const location = splitUrl[splitUrl.length - 1];
  const [id, setID] = useState("");
  const [boarditem, setBoardItem] = useState([]);
  const navigate = useNavigate();
  const [currentLastUrl, setCurrentLastUrl] = useState(null);
  const [pageid, setPageId] = useState("");
  const [changeInput, setChangeInput] = useState("");
  const [modifyTargetId, setModifyTargetId] = useState(null);
  // console.log(location.pathname);

  // 질문 삭제
  const deleteQ = async (event) => {
    const result = window.confirm("정말로 삭제하시겠습니까?");
    event.preventDefault();
    if (result) {
      try {
        const response = await axios.delete(
          `${apiServer}/api/board/delete/${id}`
        );
        console.log(response);
        alert("질문 삭제 완료");
        navigate("/q&a");
      } catch (error) {
        alert("질문 삭제에 실패했습니다.");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const url = document.location.href;
    const splitUrl = url.split("/");
    const location = splitUrl[splitUrl.length - 1];
    // console.log(location);

    // 게시글 가져오기
    setCurrentLastUrl(location);
    try {
      axios.get(`${apiServer}/api/board/getboard`).then((response) => {
        const data = response.data;
        console.log(data);
        setBoardItem(response.data);
        setID(location);
        setPageId(location);
      });
    } catch (error) {
      console.log(error);
    }

    // 댓글 가져오기
    try {
      axios
        .get(
          `${apiServer}/api/comment/getcomment/${localStorage.getItem("id")}`
        )
        .then((response) => {
          const data = response.data;
          console.log(data);
          setCommentItem(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("작성자: ", username);
    console.log("댓글: ", comment);
    console.log("날짜: ", formattedDate);
    console.log("공개여부: ", pri);
    console.log("페이지아이디: ", pageid);

    // 댓글 등록
    try {
      const response = await axios.post(
        `${apiServer}/api/comment/${localStorage.getItem("id")}/create`,
        {
          pageid,
          username,
          comment,
          pri,
          create_date,
        }
      );
      alert("댓글 등록 성공");
      window.location.reload(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 비공개
  const [buttonColor, setButtonColor] = useState("#c7e8ca");
  const [fontColor, setFontColor] = useState("gray");
  const handleButtonClick = () => {
    if (buttonColor === "#c7e8ca" && fontColor === "gray") {
      setButtonColor("#5d9c59");
      setFontColor("white");
      setPri(false);
    } else {
      setButtonColor("#c7e8ca");
      setFontColor("gray");
      setPri(true);
    }
  };

  //댓글 삭제
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `${apiServer}/api/comment/delete/${localStorage.getItem("id")}`
      );
      alert("댓글 삭제 성공");
      window.location.reload(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 수정 버튼 누르면 input창으로 변환
  const handleModify = (id) => {
    setModifyTargetId(id);
    setChangeInput(!changeInput);
  };

  //댓글 수정
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${apiServer}/api/comment/update/${localStorage.getItem("id")}/`,
        { username, create_date }
      );
      alert("댓글 수정 성공");
      window.location.reload(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(location);

  return (
    <>
      <QuestionContainer>
        {boarditem.map((item) => (
          <div key={item.id} className={item.id} id={currentLastUrl}>
            {item.id === Number(currentLastUrl) && (
              <div>
                <Header>{item.subject}</Header>
                <Content
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item.content),
                  }}
                />
                <CD>{item.create_date.split("T").shift()}</CD>
                {item.username === localStorage.getItem("id") ? (
                  <BtnContainer>
                    <Link to={`/q&a/newpost/modify/${item.id}`}>
                      <button>수정</button>
                    </Link>
                    <button onClick={deleteQ}>삭제</button>
                  </BtnContainer>
                ) : (
                  <div style={{ marginBottom: "0" }} />
                )}
              </div>
            )}
          </div>
        ))}
        {/* <LikeContainer>
    <span class="material-icons">favorite_border</span>
  </LikeContainer> */}
      </QuestionContainer>
      <InputContainer>
        <Input
          type="text"
          placeholder="댓글을 입력해주세요."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></Input>
        <input type="hidden" value={pageid} onChange={setPageId} />
        <input type="hidden" value={username} onChange={setUsername} />
        <input type="hidden" value={create_date} onChange={setCreate_date} />
        <Button2
          style={{ backgroundColor: buttonColor, color: fontColor }}
          value={pri}
          onClick={handleButtonClick}
        >
          비공개
        </Button2>
        <Button onClick={handleSubmit}>등록</Button>
      </InputContainer>
      <CommentContainer>
        {commentItem
          .filter((item) => Number(location) === item.pageid)
          .map((item) => (
            <CommentUl key={item.id}>
              <CommentLi className="user">{item.username}</CommentLi>
              {modifyTargetId === item.id && changeInput ? (
                <input type="text" defaultValue={item.comment} />
              ) : (
                <CommentLi className="comment">{item.comment}</CommentLi>
              )}
              <CommentLi className="date">
                {item.create_date.split("T").shift()}
              </CommentLi>
              <CommentLi>{item.pri}</CommentLi>
              <Button>답글</Button>
              {item.username === localStorage.getItem("id") && (
                <>
                  <Button
                    onClick={() => {
                      handleUpdate();
                      handleModify(item.id);
                    }}
                  >
                    수정
                  </Button>
                  <Button onClick={handleDelete}>삭제</Button>
                </>
              )}
            </CommentUl>
          ))}
      </CommentContainer>
    </>
  );
};

export default QuestionD