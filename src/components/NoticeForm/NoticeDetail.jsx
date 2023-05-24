import axios from "axios";
import React from "react";
import { useEffect } from "react";
import apiServer from "../../api/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import {
  BtnContainer,
  ButtonLike,
  CD,
  Content,
  Header,
  QuestionContainer,
} from "../QuestionForm/QuestionSty";

const NoticeDetail = () => {
  const url = document.location.href;
  const splitUrl = url.split("/");
  const location = splitUrl[splitUrl.length - 1];
  const [boarditem, setBoardItem] = useState([]);
  const navigate = useNavigate();
  const [currentLastUrl, setCurrentLastUrl] = useState(null);
  const [pageid, setPageId] = useState("");
  const [user, setUser] = useState();
  // console.log(location.pathname);

  useEffect(() => {
    const url = document.location.href;
    const splitUrl = url.split("/");
    const location = splitUrl[splitUrl.length - 1];

    // console.log(location);

    // 게시물 가져오기
    setCurrentLastUrl(location);
    try {
      axios.get(`${apiServer}/api/admin/getboard`).then((response) => {
        const data = response.data.map((item) => ({
          ...item,
        }));
        setBoardItem(data);
        console.log("페이지 아이디:", location);
        setPageId(location);
        const targetItem = data.find((item) => item.id === Number(location));
        console.log("타겟: ", targetItem);
        console.log("주인장: ", targetItem?.username); // 수정된 부분
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
  }, []);

  // 게시글 삭제하기
  const deleteQ = async (event) => {
    const result = window.confirm("정말로 삭제하시겠습니까?");
    event.preventDefault();
    if (result) {
      try {
        const response = await axios.delete(
          `${apiServer}/api/admin/delete/${location}`,
          { id: Number(location) }
        );
        console.log(response);
        alert("공지 삭제 완료");
        navigate("/notice");
      } catch (error) {
        alert("공지 삭제에 실패했습니다.");
        console.log(error);
      }
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
                {/* 작성자에게만 수정,삭제 버튼 보이기 */}
                <ButtonLike>
                  {item.username === localStorage.getItem("id") ? (
                    <BtnContainer>
                      <Link to={`/notice/newpost/modify/${item.id}`}>
                        <button>수정</button>
                      </Link>
                      <button onClick={deleteQ}>삭제</button>
                    </BtnContainer>
                  ) : (
                    <BtnContainer />
                  )}
                </ButtonLike>
              </div>
            )}
          </div>
        ))}
      </QuestionContainer>
    </>
  );
};

export default NoticeDetail;
