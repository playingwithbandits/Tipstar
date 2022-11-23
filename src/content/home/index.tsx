import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';

const OverviewWrapper = styled(Box)(
  () => `
      overflow: auto;
      flex: 1;
      overflow-x: hidden;
      align-items: center;
  `
);

function Home() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container maxWidth="lg">Home page</Container>
    </OverviewWrapper>
  );
}

export default Home;
