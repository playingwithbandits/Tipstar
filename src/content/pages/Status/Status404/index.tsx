import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

import Logo from 'src/components/LogoSign';
import { styled } from '@mui/material/styles';

const MainContent = styled(Box)(
  ({ theme }) => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

function Status404() {
  return (
    <>
      <Helmet>
        <title>Tipstar - 404</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Logo />
          <Box textAlign="center">
            <Container maxWidth="xs">
              <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
                404 - Page not found
              </Typography>
            </Container>
          </Box>
        </Container>
      </MainContent>
    </>
  );
}

export default Status404;
