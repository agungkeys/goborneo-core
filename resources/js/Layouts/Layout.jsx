/* eslint-disable react/no-unknown-property */
import { Link } from '@inertiajs/react';
import { Box, Container, Flex, Image } from '@chakra-ui/react';

export default function Layout(props) {
  const { children, meta } = props;
  return (
    <Box>
      <Box
        display="flex"
        // bgColor="gray.50"
        px={5}
        py={2}
        // borderBottom="1px solid #e5e7eb"
        // boxShadow="lg"
      >
        <Container maxWidth="container.sm">
          <Flex>
            <Link replace href="/">
              <Image
                src="https://res.cloudinary.com/do5w0oe22/image/upload/v1674557611/images/goborneo_oidkpq.webp"
                alt="GoBorneo"
                w="130px"
              />
            </Link>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="container.sm"> {children} </Container>
      </Box>
    </Box>
  );
}
