import { Button, HStack } from "@chakra-ui/react"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function App() {
  return (
    <>
      <HStack>
  <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
    Facebook
  </Button>
  <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
    Twitter
  </Button>
</HStack>
    </>
  )
}

export default App
