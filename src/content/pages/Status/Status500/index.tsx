import { useState } from 'react';
import {
  Box,
  Typography,
  Hidden,
  Container,
  Button,
  Grid
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import LoadingButton from '@mui/lab/LoadingButton';

import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';

const GridWrapper = styled(Grid)(
  ({ theme }) => `
    background: ${theme.colors.gradients.black1};
`
);

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

function Status500() {
  return (
    <>
      <Helmet>
        <title>Tipstar - 500</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Logo />
          <Box textAlign="center">
            <Container maxWidth="xs">
              <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
                500 - Page error
              </Typography>
            </Container>
          </Box>
        </Container>
      </MainContent>
    </>
  );
}

export default Status500;
