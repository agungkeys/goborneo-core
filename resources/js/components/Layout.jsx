//import React
import React from 'react';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';

function Layout({ children }) {
  return (
    <Box>
      <Head>
        <title>Go Borneo - Kalimantan Tourism Information</title>
        <meta head-key="description" name="description" content="go borneo is a platform for supporting everything about tourism in kalimantan" />
        <link rel="icon" type="image/svg+xml" href="./image/favicon/favicon.ico" />
      </Head>
      <Box
        display="flex"
        bgColor="gray.50"
        px={5}
        py={2}
        borderBottom="1px solid #e5e7eb"
        boxShadow="lg"
      >
        <Container maxWidth="container.sm">
          <Flex>
            <Image src="./image/goborneo.svg" alt="GoBorneo" w="130px" />
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="container.sm"> {children} </Container>
      </Box>
    </Box>
  );
}

export default Layout;
