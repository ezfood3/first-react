import React, { useCallback, useState, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import HtmlReactParser from 'html-react-parser';

const WritePage = () => {
  const inputTag = useRef(null);

  const [textContent, setTextContent] = useState({
    title: '',
    content: '',
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTextContent({
        ...textContent,
        [name]: value,
      });
      // console.log(textContent);
    },
    [textContent],
  );

  const onCheckNull = (e) => {
    const { title, content } = textContent;
    if (title === '') {
      alert('제목을 적어주세요 !!');
      inputTag.current.focus();
    } else if (content === '') {
      alert('내용을 적어주세요 !!');
      inputTag.current.focus();
    } else {
      setViewContent(viewContent.concat({ ...textContent }));
      setTextContent({
        title: '',
      });
    }
  };

  const [viewContent, setViewContent] = useState([]);
  return (
    <div className="App">
      <h1>게시판</h1>
      <div className="text-container">
        {viewContent.map((e, index) => {
          return (
            <div key={index}>
              <h2>{e.title}</h2>
              <div>{HtmlReactParser(e.content)}</div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          placeholder="제목"
          onChange={onChange}
          name="title"
          ref={inputTag}
        ></input>
        <div className="CKEditor">
          <CKEditor
            config={{
              placeholder: '내용을 적어 주세요.',
            }}
            editor={ClassicEditor}
            data=""
            // onReady={(editor) => {
            //   // You can store the "editor" and use when it is needed.
            //   console.log('Editor is ready to use!', editor);
            // }}
            onChange={(event, editor) => {
              const data = editor.getData();
              // console.log({ event, editor, data });
              setTextContent({
                ...textContent,
                content: data,
              });
              // console.log(textContent);
            }}
            // onBlur={(event, editor) => {
            //   console.log('Blur.', editor);
            // }}
            // onFocus={(event, editor) => {
            //   console.log('Focus.', editor);
            // }}
          ></CKEditor>
        </div>
      </div>
      <button
        className="submit-button"
        onClick={(e) => {
          onCheckNull(e);
        }}
      >
        입력
      </button>
    </div>
  );
};

export default WritePage;
