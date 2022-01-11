import { IoClipboardOutline } from 'react-icons/io5';
import { Flex, Text, Button, Link, Box } from '@chakra-ui/react';

type Props = {
  url: string;
};
const ShortenerAlert = ({ url }: Props) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };
  return (
    <Flex bg="brand.200" p={4} rounded={10} alignItems="center" gap={3}>
      <Text>
        <strong>Your new link:</strong>
        <Box as="span" bg="white" p={1} ml={1}>
          <Link
            href={url}
            isExternal
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            {url}
          </Link>
        </Box>
      </Text>
      <Button
        bg="transparent"
        onClick={copyToClipboard}
        p={0}
        _hover={{ bg: 'none' }}
      >
        <IoClipboardOutline size={24} />
      </Button>
    </Flex>
  );
};

export { ShortenerAlert };
