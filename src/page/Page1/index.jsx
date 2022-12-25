import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';

// Toast 에디터
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
// npm i -S @toast-ui/editor
// eslint-disable-next-line react/prop-types
const Page1 = ({ type = 'edit' }) => {
  const [content, setcontent] = useState();

  const editorRef = useRef(null);

  console.log('rendering...');
  console.log('content', content);

  const getHtmlContent = useCallback(() => {
    const tmpContent = localStorage.getItem('content');
    setcontent(tmpContent);
    console.log('effect', content);
  }, [content]);

  console.log(editorRef);

  useEffect(() => {
    if (type === 'edit') {
      getHtmlContent();
    }
  }, [getHtmlContent, type]);

  const handleRegisterButton = () => {
    console.log(editorRef);
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    console.log(editorRef.current?.getInstance().getMarkdown());
    // 테스트를 위해 로컬 스토리지 저장
    localStorage.setItem('content', editorRef.current?.getInstance().getHTML());
    console.log(editorRef);
  };

  return (
    <div>
      <h1>Text Editor</h1>

      {content && (
        <Editor
          // placeholder="내용을 입력해주세요."
          initialValue={content}
          ref={editorRef} // DOM 선택용 useRef
          previewStyle="vertical" // 미리보기 스타일 지정
          height="500px" // 에디터 창 높이
          initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
          theme="dark"
          toolbarItems={[
            // 툴바 옵션 설정
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            // ['table', 'image', 'link'],
            ['code', 'codeblock'],
          ]}
        />
      )}
      <Button onClick={handleRegisterButton}>제출하기</Button>
    </div>
  );
};
export default Page1;
