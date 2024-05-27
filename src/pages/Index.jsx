import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex>
          {["Home", "World", "Business", "Markets", "Opinion", "Tech"].map((section) => (
            <Link as={RouterLink} to={`/${section.toLowerCase()}`} p={2} key={section}>
              {section}
            </Link>
          ))}
        </Flex>
      </Flex>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} p={4}>
        {/* Featured Article */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>
            Featured Article
          </Heading>
          <Text fontSize="lg">
            This is the featured article. It has a larger space and more prominence on the page.
          </Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.100" p={4} ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>
            Trending Topics
          </Heading>
          <VStack align="start">
            {["Topic 1", "Topic 2", "Topic 3", "Topic 4"].map((topic) => (
              <Link as={RouterLink} to={`/topics/${topic.toLowerCase().replace(" ", "-")}`} key={topic}>
                {topic}
              </Link>
            ))}
          </VStack>
        </Box>
      </Flex>

      {/* Grid of Smaller Articles */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} p={4}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Box key={index} bg="gray.50" p={4} borderRadius="md" boxShadow="md">
            <Heading as="h4" size="md" mb={2}>
              Article Title {index + 1}
            </Heading>
            <Text>
              This is a brief summary of the article. It provides a quick overview of the content.
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={4}>
        <Flex justifyContent="space-between">
          <Text>&copy; 2023 Financial Times</Text>
          <Flex>
            {["About", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
              <Link as={RouterLink} to={`/${link.toLowerCase().replace(" ", "-")}`} p={2} key={link}>
                {link}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;