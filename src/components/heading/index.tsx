import { Box, Heading as H1, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  desc?: string;
};

const Heading = ({ title, desc }: Props) => (
  <Box textAlign="center">
    <H1 as="h1" color="brand.100" fontSize="6xl" fontWeight="extrabold">
      {title}
    </H1>
    {desc && (
      <Text fontSize="large" color="gray.500">
        {desc}
      </Text>
    )}
  </Box>
);

export { Heading };
