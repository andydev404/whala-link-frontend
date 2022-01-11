import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data : { data }} = await axios.get(`https://whala-link.herokuapp.com/api/v1/links/${slug}`)
        setTimeout(() => {
          window.location = data.attributes.long_url
        }, 1000)
      } catch {
        router.push('/')
      }
    }
    if (slug) {
      fetchData()
    }
  },[slug])

  return (
    <Flex bg="brand.300" minH="100vh" color="white" alignItems="center" justifyContent="center" px={60}>
      <Text fontSize='4xl' fontWeight='bold'>
      "Opportunities don't happen, you create them." <br/> — Chris Grosser
      </Text>
    </Flex>
  );
};

export default Slug;