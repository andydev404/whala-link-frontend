import { Box, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box py={5} textAlign="center" borderTop="1px" borderColor="brand.200">
      <Text color="brand.100" fontSize="sm">
        Created by{' '}
        <Link isExternal href="https://twitter.com/andydev404">
          @andydev404
        </Link>
      </Text>
    </Box>
  );
};

export { Footer };
