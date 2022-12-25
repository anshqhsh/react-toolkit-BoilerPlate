import { useState, useEffect, useCallback } from 'react';
import { Box } from '@mui/material';
// Toast-UI Viewer 임포트
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

const Page2 = () => {
  // const content = localStorage.getItem('content');
  const [content, setcontent] = useState();
  console.log('rendering...');
  console.log('content', content);

  const getHtmlContent = useCallback(() => {
    const tmpContent = localStorage.getItem('content');
    setcontent(tmpContent);
    console.log('effect', content);
  }, [content]);

  useEffect(() => {
    getHtmlContent();
  }, [getHtmlContent]);

  return (
    <Box>
      {content && (
        <>
          <Viewer initialValue="Header" />
          <Viewer initialValue="<strong>ddd</strong>" />
        </>
      )}
    </Box>
  );
};
export default Page2;
