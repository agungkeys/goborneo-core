import React,{ useState } from "react";
import { Head } from '@inertiajs/inertia-react';
import { Box, Center, Image, Text } from '@chakra-ui/react';
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      <Box py={4}>
        <Text textAlign="center" color="teal.400" fontSize="lg" fontWeight="semibold">We are cooking something delicious</Text>
        <Center mt={2}>
          <Image src="./image/vector-creative.svg" alt="vector" w="280px" />
        </Center>
      </Box>
    </Layout>
  );
}
