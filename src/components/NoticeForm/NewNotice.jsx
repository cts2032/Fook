import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import apiServer from "../../api/api";
import ImageResize from "quill-image-resize-module-react";
import { StyledReactQuill } from "../BestRecipeForm/BestRecipeSty";
Quill.register("modules/imageResize", ImageResize);

export const WriteContainer = styled.form`
  width: 900px;
  height: 600px;
  margin: 0 auto;
  box-shadow: 1px 5px 15px 5px lightgray;
  margin-top: 70px;
  margin-bottom: 300px;
  padding: 20px;
  input {
    width: 850px;
    height: 40px;
    background-color: transparent;
    border: 1px solid lightgray;
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  width: 850px;
  height: 50px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #c7e8ca;
  color: gray;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #5d9c59;
    color: white;
  }
`;

const NewNotice = () => {
  const ID = String(localStorage.getItem("id"));
  const quillRef = useRef(null);
  const [username, setUsername] = useState(ID);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [create_date, setCreate_date] = useState(new Date());
  const now = new Date();
  const formattedDate = now.toISOString();

  const destroyQuill = () => {
    if (quillRef.current) {
      quillRef.current.destroy(); // destroy Quill editor
      quillRef.current = null; // set quillRef to null
    }
  };

  const navigate = useNavigate();

  const compressImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = 600; // 원하는 가로 크기
          canvas.height = (canvas.width * img.height) / img.width;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.toBlob(
            (blob) => {
              resolve(blob);
            },
            "image/jpeg",
            0.5 // 압축률 (0.7은 70% 압축)
          );
        };
        img.onerror = (error) => {
          reject(error);
        };
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImage = useCallback(() => {
    const editor = quillRef.current?.getEditor(); // get editor instance
    if (!editor) return;
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const compressedFile = await compressImage(file);
      const formData = new FormData();
      formData.append("file", compressedFile);
      formData.append("filename", file.name);

      try {
        const response = await axios.post(
          `http://192.168.0.42:8000/api/image/uploadfile`, // 변경해야함
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        const imageUrl = response.data.url;
        const editor = quillRef.current.getEditor();
        const cursorPosition = editor.getSelection()?.index;
        setContent(
          content.substring(0, cursorPosition) +
            `<img src="${imageUrl}"/>` +
            content.substring(cursorPosition)
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          [{ font: [] }],
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ align: [] }],
          [{ script: "sub" }, { script: "super" }],
          [{ direction: "rtl" }],
          [{ header: 1 }, { header: 2 }],
          [{ header: [3, 4, 5, 6] }],
          [{ image: "" }],
          ["clean"],
        ],
        handlers: {
          image: handleImage,
        },
      },
    }),
    []
  );

  const handleSubmit = async (e) => {
    if (e) e.preventDefault(); // e 객체가 있을 때만 preventDefault 함수를 호출하도록 수정

    console.log("작성자: ", username);
    console.log("제목: ", subject);
    console.log("내용: ", content);
    console.log("날짜: ", formattedDate);

    if (subject === "") {
      alert("제목을 작성해주세요.");
      return;
    }
    if (content === "") {
      alert("내용을 작성해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        `${apiServer}/api/admin/${localStorage.getItem("id")}/createboard`,
        {
          username,
          subject,
          content,
          create_date,
        }
      );

      alert("게시글 등록 성공");
      navigate("/notice");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WriteContainer onSubmit={handleSubmit}>
      <input
        placeholder="제목을 입력해주세요."
        value={subject}
        type="text"
        onChange={(e) => setSubject(e.target.value)}
      />
      <StyledReactQuill
        style={{ width: "850px", height: "430px", marginBottom: "50px" }}
        placeholder="내용을 입력해주세요."
        modules={modules}
        theme="snow"
        ref={quillRef}
        value={content}
        onChange={setContent}
      />
      <input type="hidden" value={username} />
      <input type="hidden" value={create_date} />
      <ButtonContainer>
        <Button type="submit">업로드하기</Button>
      </ButtonContainer>
    </WriteContainer>
  );
};

export default NewNotice;
