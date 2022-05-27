import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>André Tashiro</Text>
        <Text color="gray.300" fontSize="small">
          andre_seichi@hotmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="André Tashiro"
        src="https://github.com/andreseichi.png"
      />
    </Flex>
  );
}
