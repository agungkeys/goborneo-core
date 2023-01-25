import { Link, Head } from '@inertiajs/react';
import { Box, Center, Image, Text } from '@chakra-ui/react';
import Layout from '@/Layouts/Layout';

export default function Index(props) {
    const meta = {
        title: "Home",
        description: "Halaman utama goborneo"
    }
    return (
        <>
            <Layout meta={meta}>
                <Box py={4}>
                    <Text textAlign="center" color="teal.400" fontSize="lg" fontWeight="semibold">We are cooking something delicious</Text>
                    <Center mt={2}>
                    <Image src="https://res.cloudinary.com/do5w0oe22/image/upload/v1674557612/images/vector-creative_na7t5s.webp" alt="vector" w="280px" />
                    </Center>
                </Box>
            </Layout>
            <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                {props.auth.user ? (
                    <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Log in
                        </Link>

                        <Link
                            href={route('register')}
                            className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}