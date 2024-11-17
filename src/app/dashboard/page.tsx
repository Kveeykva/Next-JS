'use client';

import {
  Box,
  Flex,
  Text,
  VStack,
  Button,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { FaHome, FaChartBar, FaCog } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <Flex height="100vh" bg="gray.100">
      <Box
        as="nav"
        width={{ base: 'full', sm: '250px' }}
        bg="blue.700"
        color="white"
        p={5}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <VStack align="flex-start" spacing={5}>
          <Text fontSize="2xl" fontWeight="bold" mb={8}>
            Dashboard
          </Text>
          <NavItem icon={FaHome} label="Home" />
          <NavItem icon={FaChartBar} label="Analytics" />
          <NavItem icon={FaCog} label="Settings" />
        </VStack>

        <Box textAlign="center" mt={10}>
          <Text fontSize="sm">© 2024 MyApp</Text>
        </Box>
      </Box>

      <Flex flex={1} direction="column">
        <Flex
          as="header"
          justifyContent="space-between"
          alignItems="center"
          bg="white"
          px={8}
          py={4}
          boxShadow="sm"
        >
          <Text fontSize="xl" fontWeight="bold">
            Welcome, User!
          </Text>
          <Button colorScheme="blue" size="sm">
            Log Out
          </Button>
        </Flex>

        {/* Content Area */}
        <Box flex={1} p={8}>
          <HStack spacing={8} align="stretch">
            <StatsCard title="Total Sales" value="$12,345" />
            <StatsCard title="New Users" value="345" />
            <StatsCard title="Revenue" value="$89,876" />
          </HStack>

          <Box mt={8} p={6} bg="white" boxShadow="sm" rounded="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Recent Activity
            </Text>
            <Text color="gray.600">
              Here is some example content for the dashboard...
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

// Reusable Components
const NavItem = ({ icon, label }: { icon: any; label: string }) => (
  <Button
    leftIcon={<Icon as={icon} />}
    variant="ghost"
    justifyContent="flex-start"
    w="full"
    color="whiteAlpha.900"
    _hover={{ bg: 'blue.600' }}
  >
    {label}
  </Button>
);

const StatsCard = ({ title, value }: { title: string; value: string }) => (
  <Box
    p={6}
    bg="white"
    boxShadow="sm"
    rounded="md"
    flex={1}
    textAlign="center"
    border="1px solid"
    borderColor="gray.200"
  >
    <Text fontSize="lg" fontWeight="bold" mb={2}>
      {title}
    </Text>
    <Text fontSize="2xl" fontWeight="bold" color="blue.600">
      {value}
    </Text>
  </Box>
);
