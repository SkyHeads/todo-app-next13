'use client'

import { Box, useColorModeValue } from '@chakra-ui/react'

export default function Header() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} h="100vh">
        <h1>Header</h1>
      </Box>
    </>
  )
}
