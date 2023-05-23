import axios from "axios";
import React from "react";
import { useEffect } from "react";
import apiServer from "../../api/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import {
  BtnContainer,
  Button,
  Button2,
  Button3,
  ButtonLike,
  CD,
  CommentContainer,
  CommentDiv,
  CommentLi,
  CommentUl,
  CommentUl2,
  CommentUl3,
  Content,
  Header,
  Input,
  Input2,
  InputContainer,
  LikeButton,
  QuestionContainer,
} from "../QuestionForm/QuestionSty";

const PostDetail = () => {
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
  const [changeInput, setChangeInput] = useState(false);
  const [changeButton, setChangeButton] = useState(false);
  const [modifyTargetId, setModifyTargetId] = useState(null);
  const [modComment, setModComment] = useState("");
  const [parentid, setParentId] = useState(0);
  const [addComment, setAddComment] = useState(false);
  const [reply, setReply] = useState("");
  const [replyTargetId, setReplyTargetId] = useState(null);
  const [like, setLike] = useState(false);
  const [user, setUser] = useState();
  const [likeCount, setLikeCount] = useState(0);
  const [boardMaster, setBoardMaster] = useState("");
  // console.log(location.pathname);

  useEffect(() => {
    const url = document.location.href;
    const splitUrl = url.split("/");
    const location = splitUrl[splitUrl.length - 1];
    fetchLikeCount();
    const storedLike = localStorage.getItem("like");
    if (storedLike) {
      setLike(JSON.parse(storedLike));
    }

    // console.log(location);

    // 게시물 가져오기
    setCurrentLastUrl(location);
    try {
      axios.get(`${apiServer}/api/recipe/getboard`).then((response) => {
        const data = response.data;
        console.log(data);
        setBoardItem(data);
        console.log("페이지 아이디:", location);
        setPageId(location);
        const targetItem = data.find((item) => item.id === Number(location));
        console.log("타겟: ", targetItem);
        console.log("주인장: ", targetItem?.username); // 수정된 부분
        setBoardMaster(targetItem?.username);
      });
    } catch (error) {
      console.log(error);
    }
    // 유저정보 가져오기
    axios
      .get(`${apiServer}/api/user/get_id/${localStorage.getItem("id")}`)
      .then((response) => {
        const userData = response.data;
        setUser(userData[0].id);
        console.log(userData);
        console.log("유저아이디 : ", userData[0].id);
        // 유저 정보를 활용하여 원하는 작업 수행
      })
      .catch((error) => {
        console.log(error);
      });

    // 댓글 가져오기
    try {
      axios
        .get(
          `${apiServer}/api/recipecomment/getcomment/${localStorage.getItem(
            "id"
          )}`
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

  // 게시글 삭제하기
  const deleteQ = async (event) => {
    const result = window.confirm("정말로 삭제하시겠습니까?");
    event.preventDefault();
    if (result) {
      try {
        const response = await axios.delete(
          `${apiServer}/api/recipe/delete/${location}`,
          { id: Number(location) }
        );
        console.log(response);
        alert("게시글 삭제 완료");
        navigate("/best");
      } catch (error) {
        alert("게시글 삭제에 실패했습니다.");
        console.log(error);
      }
    }
  };
  const handleReply = async (e) => {
    e.preventDefault();
    console.log("작성자: ", username);
    console.log("댓글: ", comment);
    console.log("날짜: ", formattedDate);
    console.log("공개여부: ", pri);
    console.log("페이지아이디: ", id);

    if (reply === "") {
      alert("댓글을 입력해주세요.");
      return;
    }

    // 대댓글 등록
    try {
      const parentComment = commentItem.find(
        (item) => item.id === replyTargetId
      );
      const priValue = parentComment?.pri === 1 ? 1 : 0;
      const response = await axios.post(
        `${apiServer}/api/recipecomment/${localStorage.getItem("id")}/create`,
        {
          pageid,
          username,
          comment: reply,
          pri: priValue,
          create_date,
          parentid: replyTargetId,
        }
      );

      alert("댓글 등록 성공");

      window.location.reload(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
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
        `${apiServer}/api/recipecomment/${localStorage.getItem("id")}/create`,
        {
          pageid,
          username,
          comment,
          pri,
          create_date,
          parentid,
        }
      );
      alert("댓글 등록 성공");
      // setReplyTargetId(response.index);
      // console.log(replyTargetId);
      window.location.reload(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 비공개 버튼
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
  const handleDelete = async (e, replyid) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `${apiServer}/api/recipecomment/delete/${replyid}`,
        {
          id: replyid,
        }
      );
      alert("댓글 삭제 성공");
      window.location.reload(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(replyid);
  };

  // 대댓글
  const handleAddRep = (id) => {
    setReplyTargetId(id);
    setAddComment(!addComment);
  };

  // 댓글 수정 누르면 input창 변환
  const handleModify = (id) => {
    setModifyTargetId(id);
    setChangeInput(!changeInput);
  };

  // 댓글 수정 누르면 버튼 변경
  const changeBtn = (id) => {
    setModifyTargetId(id);
    setChangeButton(!changeButton);
  };

  //댓글 수정
  const handleUpdate = async (e, itemid) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    try {
      const response = await axios.patch(
        `${apiServer}/api/recipecomment/update/${itemid}/`,
        { comment: modComment, create_date, id: itemid }
      );
      alert("댓글 수정 성공");
      window.location.reload(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(itemid);
  };

  // 좋아요 기능
  const handleLike = async () => {
    try {
      const response = await axios.post(
        `${apiServer}/api/recipe/like?recipe_user_id=${user}`,
        { recipe_id: location }
      );
      alert("추천 성공");
      setLike(true);
      localStorage.setItem("like", JSON.stringify(true));
      setLikeCount((prevCount) => prevCount + 1);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // 좋아요 해제 기능
  const handleRemoveLike = async () => {
    try {
      const response = await axios.delete(
        `${apiServer}/api/recipe/removelike?recipe_user_id=${user}`,
        { data: { recipe_id: location } }
      );
      alert("추천 해제 성공");
      setLike(false);
      localStorage.setItem("like", JSON.stringify(false));
      setLikeCount((prevCount) => prevCount - 1);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // 좋아요 카운터 기능
  const fetchLikeCount = async () => {
    try {
      const response = await axios.get(
        `${apiServer}/api/recipe/likeCount?recipe_user_id=${location}`
      );
      setLikeCount(response.data.likeCount); // 좋아요 갯수 설정
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* 게시글 */}
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
                {/* 댓글 작성자에게만 수정, 삭제 버튼 보이기 */}
                <ButtonLike>
                  <LikeButton>
                    <span
                      onClick={async () => {
                        setLike((prevLike) => !prevLike);
                        if (like) {
                          handleRemoveLike();
                        } else {
                          handleLike();
                        }
                      }}
                      className="material-icons"
                    >
                      <input
                        type="hidden"
                        value={location}
                        onChange={location}
                      />
                      {!like ? "favorite_border" : "favorite"}
                    </span>
                    <p
                      style={{
                        fontSize: "3px",
                        textAlign: "right",
                      }}
                    >
                      {likeCount} Likes
                    </p>
                  </LikeButton>
                  {item.username === localStorage.getItem("id") ? (
                    <BtnContainer>
                      <Link to={`/best/newpost/modify/${item.id}`}>
                        <button>수정</button>
                      </Link>
                      <button onClick={deleteQ}>삭제</button>
                    </BtnContainer>
                  ) : (
                    <div style={{ marginBottom: "0" }} />
                  )}
                </ButtonLike>
              </div>
            )}
          </div>
        ))}
      </QuestionContainer>

      {/* 댓글 입력 */}
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
        <input type="hidden" value={parentid} onChange={setParentId} />
        <Button2
          style={{ backgroundColor: buttonColor, color: fontColor }}
          value={pri}
          onClick={handleButtonClick}
        >
          비공개
        </Button2>
        <Button onClick={handleSubmit}>등록</Button>
      </InputContainer>

      {/* 댓글 */}
      <CommentContainer>
        {commentItem
          .filter((item) => Number(location) === item.pageid)
          .map((item) => (
            <CommentDiv>
              {/* 대댓글이 아닌 댓글 */}
              {item.parentid === 0 && (
                <CommentUl key={item.id}>
                  <CommentLi className="user">{item.username}</CommentLi>
                  {/* 수정버튼 눌렀을때 input창 변환 */}
                  {changeInput && modifyTargetId === item.id ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdate(item.create_date, item.comment, item.id);
                      }}
                    >
                      <input
                        type="text"
                        defaultValue={item.comment}
                        onChange={(e) => setModComment(e.target.value)}
                      />
                      <input
                        type="hidden"
                        defaultValue={item.create_date}
                        onChange={setCreate_date}
                      />
                    </form>
                  ) : // 댓글이 비공개일때
                  item.pri === false ? (
                    // 게시글 주인이랑 댓글 작성자한테만 보임
                    boardMaster === localStorage.getItem("id") ||
                    item.username === localStorage.getItem("id") ? (
                      <CommentLi className="comment">
                        <span className="material-symbols-outlined">lock</span>
                        {item.comment}
                      </CommentLi>
                    ) : (
                      <CommentLi className="comment">
                        <span class="material-symbols-outlined">lock</span>
                        비공개 댓글입니다.
                      </CommentLi>
                    )
                  ) : (
                    <CommentLi className="comment">{item.comment}</CommentLi>
                  )}

                  <CommentLi className="date">
                    {item.create_date.split("T").shift()}
                  </CommentLi>

                  <CommentLi>{item.pri}</CommentLi>

                  {/* 수정버튼 누르면 버튼 변환 */}
                  {changeButton && modifyTargetId === item.id ? (
                    <CommentLi className="button">
                      <Button
                        type="submit"
                        onClick={(e) => {
                          handleUpdate(e, item.id);
                        }}
                      >
                        완료
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          changeBtn(item.id);
                          handleModify(item.id, item.comment);
                        }}
                      >
                        취소
                      </Button>
                    </CommentLi>
                  ) : // 댓글이 비공개일 때
                  item.pri === false ? (
                    <CommentLi className="button">
                      {/* 댓글 작성자와 게시글 작성자만 답글 버튼 보임 */}
                      {item.username === localStorage.getItem("id") ||
                      boardMaster === localStorage.getItem("id") ? (
                        <>
                          <Button onClick={() => handleAddRep(item.id)}>
                            답글
                          </Button>
                        </>
                      ) : null}
                      {/* 댓글 작성자한테만 수정,삭제 버튼 보임 */}
                      {item.username === localStorage.getItem("id") && (
                        <>
                          <Button
                            onClick={() => {
                              handleModify(item.id, item.comment);
                              changeBtn(item.id);
                            }}
                          >
                            수정
                          </Button>
                          <Button
                            onClick={(e) => {
                              handleDelete(e, item.id);
                            }}
                          >
                            삭제
                          </Button>
                        </>
                      )}
                    </CommentLi>
                  ) : (
                    <CommentLi className="button">
                      <Button onClick={() => handleAddRep(item.id)}>
                        답글
                      </Button>
                      {item.username === localStorage.getItem("id") && (
                        <>
                          <Button
                            onClick={() => {
                              handleModify(item.id, item.comment);
                              changeBtn(item.id);
                            }}
                          >
                            수정
                          </Button>
                          <Button
                            onClick={(e) => {
                              handleDelete(e, item.id);
                            }}
                          >
                            삭제
                          </Button>
                        </>
                      )}
                    </CommentLi>
                  )}
                </CommentUl>
              )}

              {/* 대댓글 */}
              {commentItem
                .filter((reply) => reply.parentid === item.id)
                .map((reply) => (
                  <CommentUl2 key={reply.id}>
                    <p>└</p>
                    <CommentLi className="user">{reply.username}</CommentLi>
                    {/* 수정버튼 누르면 input창 변환 */}
                    {changeInput && modifyTargetId === reply.id ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleUpdate(reply.create_date, reply.comment);
                        }}
                      >
                        <input
                          type="text"
                          defaultValue={reply.comment}
                          onChange={(e) => setModComment(e.target.value)}
                        />
                        <input
                          type="hidden"
                          defaultValue={reply.create_date}
                          onChange={setCreate_date}
                        />
                      </form>
                    ) : // 댓글이 비공개일 때
                    item.pri === false ? (
                      // 대댓글 작성자, 댓글 작성자, 게시글 작성자에게는 보임
                      reply.username === localStorage.getItem("id") ||
                      item.username === localStorage.getItem("id") ||
                      boardMaster === localStorage.getItem("id") ? (
                        <CommentLi className="comment">
                          <span className="material-symbols-outlined">
                            lock
                          </span>
                          {reply.comment}
                        </CommentLi>
                      ) : (
                        <CommentLi className="comment">
                          <span className="material-symbols-outlined">
                            lock
                          </span>
                          비공개 댓글입니다.
                        </CommentLi>
                      )
                    ) : (
                      <CommentLi className="comment">{reply.comment}</CommentLi>
                    )}
                    <CommentLi className="date">
                      {reply.create_date.split("T").shift()}
                    </CommentLi>
                    {/* 수정버튼 눌렀을 때 버튼 변환 */}
                    {changeButton && modifyTargetId === reply.id ? (
                      <CommentLi className="button">
                        <Button
                          type="submit"
                          onClick={(e) => {
                            handleUpdate(e, reply.id);
                          }}
                        >
                          완료
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            changeBtn(reply.id);
                            handleModify(reply.id, reply.comment);
                          }}
                        >
                          취소
                        </Button>
                      </CommentLi>
                    ) : (
                      // 대댓글 작성자만 수정, 삭제버튼 보임
                      reply.username === localStorage.getItem("id") && (
                        <>
                          <Button
                            onClick={() => {
                              handleModify(reply.id, reply.comment, reply.id);
                              changeBtn(reply.id);
                            }}
                          >
                            수정
                          </Button>
                          <Button
                            onClick={(e) => {
                              handleDelete(e, reply.id);
                            }}
                          >
                            삭제
                          </Button>
                        </>
                      )
                    )}
                  </CommentUl2>
                ))}
              {/* 답글 버튼 누르면 input창 생성 */}
              {addComment && replyTargetId === item.id ? (
                <CommentUl3>
                  <Input2
                    type="text"
                    onChange={(e) => setReply(e.target.value)}
                  ></Input2>
                  <Button3 onClick={handleReply}>등록</Button3>
                </CommentUl3>
              ) : null}
            </CommentDiv>
          ))}
      </CommentContainer>
    </>
  );
};

export default PostDetail;
