import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box>
      <Typography variant="h3">Todo App</Typography>
      <Button href="/">home</Button>
      <Button href="/page1">Page1</Button>
      <Button href="/page2">Page2</Button>
      <Button href="/page3">Page3</Button>
    </Box>
  );
};
export default Header;
