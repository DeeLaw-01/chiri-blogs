'use client'

import { Button } from '@/ui/shadcn/ui/button'
import { Box, Button as ChakraButton, Heading, VStack, HStack } from '@chakra-ui/react'

/**
 * Test page to verify shadcn/ui Button works alongside Chakra UI
 * This page should be temporary and can be removed after verification
 */
export default function ShadcnTestPage() {
  return (
    <Box p={8}>
      <VStack spacing={8} align="start">
        <Heading size="lg">Shadcn + Chakra UI Coexistence Test</Heading>
        
        {/* Test Chakra UI Button - Should still work */}
        <Box>
          <Heading size="md" mb={4}>Chakra UI Buttons (Original)</Heading>
          <HStack spacing={4}>
            <ChakraButton colorScheme="primary">Chakra Primary</ChakraButton>
            <ChakraButton colorScheme="blue" variant="outline">Chakra Outline</ChakraButton>
            <ChakraButton colorScheme="red" variant="ghost">Chakra Ghost</ChakraButton>
          </HStack>
        </Box>

        {/* Test Shadcn Button - New */}
        <Box>
          <Heading size="md" mb={4}>Shadcn/UI Buttons (New)</Heading>
          <div className="flex gap-4">
            <Button>Shadcn Default</Button>
            <Button variant="outline">Shadcn Outline</Button>
            <Button variant="ghost">Shadcn Ghost</Button>
            <Button variant="destructive">Shadcn Destructive</Button>
          </div>
        </Box>

        {/* Test both side by side */}
        <Box>
          <Heading size="md" mb={4}>Both Together</Heading>
          <div className="flex gap-4 items-center">
            <ChakraButton colorScheme="primary">Chakra Button</ChakraButton>
            <Button>Shadcn Button</Button>
            <p className="text-gray-600">Both should render correctly!</p>
          </div>
        </Box>
      </VStack>
    </Box>
  )
}
