/* eslint-disable no-undef */
import { Link } from '@inertiajs/react';
import {
  Box,
  Heading,
  Stack,
  Flex,
  Button,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import Layout from '@/Layouts/Layout';
import Carousel from '@/Components/Carousel';

export default function Index(props) {
  const meta = {
    title: 'Home',
    description: 'Halaman utama goborneo',
  };
  return (
    <>
      <Layout {...props} meta={meta}>
        <Carousel />
        <Box>
          <Flex
            borderRightRadius="2em"
            w="full"
            h="auto"
            backgroundImage="https://res.cloudinary.com/do5w0oe22/image/upload/v1674815488/images/banner/bg-landing_m07duy.webp"
            backgroundSize="cover"
            backgroundPosition="center center"
          >
            <VStack
              p={4}
              w="full"
              justify="center"
              px={useBreakpointValue({ base: 4, md: 8 })}
              bgGradient="linear(to-r, blackAlpha.600, transparent)"
            >
              <Stack maxW="2xl" align="flex-start" spacing={6}>
                <Heading
                  as="h1"
                  fontWeight={700}
                  color="white"
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                >
                  GoBorneo is a platform for supporting everything about tourism
                  in kalimantan
                </Heading>
                <Stack direction="row">
                  <Button rounded="full" colorScheme="teal">
                    Explore
                  </Button>
                  <Button
                    bg="whiteAlpha.300"
                    rounded="full"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.500' }}
                  >
                    Contact Us
                  </Button>
                </Stack>
              </Stack>
            </VStack>
          </Flex>
        </Box>
      </Layout>
      <div className="fixed top-0 right-0 px-6 py-4 sm:block">
        {props.auth.user ? (
          <Link
            href={route('dashboard')}
            className="text-sm text-gray-700 underline"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href={route('login')}
              className="text-sm text-gray-700 underline"
            >
              Log in
            </Link>

            <Link
              href={route('register')}
              className="ml-4 text-sm text-gray-700 underline"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </>
  );
}
