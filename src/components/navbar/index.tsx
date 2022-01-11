import { Container, Flex, Text, Link } from '@chakra-ui/react';
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Container maxW="container.xl" py={6}>
      <Flex alignItems="center" justifyContent="space-between">
        <NextLink href="/" passHref>
          <Link
            color="brand.100"
            fontSize="2xl"
            _hover={{ textDecoration: 'none' }}
          >
            <Text as="span" fontWeight="bold">
              Whala
            </Text>
            <Text
              as="span"
              w={1.5}
              h={1.5}
              mx={1}
              display="inline-block"
              rounded="full"
              bg="red.600"
            ></Text>
            link
          </Link>
        </NextLink>
        <Flex alignItems="center" gap={4}>
          <Link
            isExternal
            href="https://twitter.com/andydev404"
            color="brand.100"
          >
            <IoLogoTwitter size={24} />
          </Link>
          <Link
            isExternal
            href="https://github.com/andydev404/whala-link-frontend"
            color="brand.100"
          >
            <IoLogoGithub size={24} />
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export { Navbar };
