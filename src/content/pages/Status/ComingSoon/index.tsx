import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Divider,
  OutlinedInput,
  IconButton,
  Tooltip,
  FormControl,
  InputAdornment,
  Button,
  FormHelperText
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Logo from 'src/components/LogoSign';

import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

function StatusComingSoon() {
  return (
    <>
      <Helmet>
        <title>Tipstar - Coming soon</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Logo />
          <Box textAlign="center">
            <Container maxWidth="xs">
              <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
                Coming soon
              </Typography>
            </Container>
          </Box>
        </Container>
      </MainContent>
    </>
  );
}

export default StatusComingSoon;
