import { useRef, useState } from 'react';
import Head from 'next/head'
import { Footer, Navbar, Heading, ShortenerAlert } from '@/components';
import {
  Flex,
  VStack,
  Text,
  Box,
  Input,
  FormControl,
  FormLabel,
  Grid,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';

const HomePage = () => {
  const urlInput = useRef<HTMLInputElement>();
  const [urlInputIsInvalid, setUrlInputIsInvalid] = useState<boolean>(false);
  const slugInput = useRef<HTMLInputElement>();
  const [shortingUrl, setShortingUrl] = useState<boolean>(false);
  const [generatedUrl, setGeneratedUrl] = useState<string>('');

  const shortenUrl = async () => {
    if (urlInput.current && !urlInput.current.value) {
      setUrlInputIsInvalid(true);
    }

    setUrlInputIsInvalid(false);
    setShortingUrl(true);

    try {
      const {
        data: { data },
      } = await axios.post('https://whala-link.herokuapp.com/api/v1/links', {
        long_url: urlInput.current!.value,
        slug: slugInput.current!.value,
      });

      setGeneratedUrl(location.href + data.attributes.slug);
    } catch (error) {
      console.log(error);
    }

    setShortingUrl(false);
  };

  return (
    <Flex bg="brand.300" minH="100vh" flexDir="column">
      <Head>
        <title>Whala.link</title>
      </Head>
      <Navbar />
      <VStack
        align="center"
        justify="center"
        flex={1}
        color="white"
        p={10}
        gap={8}
      >
        <Heading
          title="Create Short Link!"
          desc="A simple, modern and free URL shortener."
        />
        {generatedUrl && <ShortenerAlert url={generatedUrl} />}
        <Box
          bgGradient="linear(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(245, 158, 11))"
          rounded={10}
          p="6px"
          minW={{ base: '100%', lg: '700px' }}
        >
          <VStack gap={5} bg="rgba(0,0,0,0.8)" rounded={10} p={30} h="full">
            <FormControl isRequired isInvalid={urlInputIsInvalid}>
              <FormLabel htmlFor="url" fontWeight="bold">
                Url
              </FormLabel>
              <Input
                id="url"
                ref={urlInput}
                name="url"
                type="url"
                placeholder="Paste a link to shorten it"
                px={4}
                h={14}
              />
              <FormErrorMessage>Url is required</FormErrorMessage>
            </FormControl>
            <Grid
              // templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(, 1fr)' }}
              w="full"
              gap={{ base: 8, lg: 5 }}
            >
              {/* TODO: implement expiration date */}
              {/* <FormControl>
                <FormLabel htmlFor="expiration-date" fontWeight="bold">
                  Expiration date
                </FormLabel>
                <Select id="expiration-date" h={14}>
                  <option value="never">Never</option>
                  <option value="">10 Minutes</option>
                  <option value="">1 Hour</option>
                  <option value="">1 Day</option>
                  <option value="">1 Week</option>
                  <option value="">2 Weeks</option>
                  <option value="">1 Month</option>
                  <option value="">6 Months</option>
                  <option value="">1 Year</option>
                </Select>
              </FormControl> */}
              <FormControl>
                <FormLabel htmlFor="slug" fontWeight="bold">
                  Custom slug (optional)
                </FormLabel>
                <Flex>
                  <Flex
                    bg="white"
                    color="brand.300"
                    roundedTopLeft="md"
                    roundedBottomLeft="md"
                    px={4}
                    alignItems="center"
                  >
                    <Text fontWeight="bold">whala.link/</Text>
                  </Flex>
                  <Input
                    id="slug"
                    name="slug"
                    px={4}
                    ref={slugInput}
                    h={14}
                    roundedTopLeft={0}
                    roundedBottomLeft={0}
                  />
                </Flex>
              </FormControl>
            </Grid>
          </VStack>
        </Box>
        <Button
          onClick={shortenUrl}
          isLoading={shortingUrl}
          loadingText="Shorting url"
          spinnerPlacement="start"
          size="lg"
          variant="outline"
          color="white"
          px={16}
          py={7}
          _hover={{ color: 'brand.300', bg: 'white' }}
        >
          Shorten url
        </Button>
      </VStack>
      <Footer />
    </Flex>
  );
};

export default HomePage;
