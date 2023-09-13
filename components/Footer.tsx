import { HStack, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface FooterProps {
  prevDate: string
  nextDate: string
}

export default function Footer({ prevDate, nextDate }: FooterProps) {
  return (
    <HStack w="full" justify="space-between">
      <Text>Made with ❤️ by Aldo Testino</Text>
      <HStack>
        <Link color="blue.600" as={NextLink} href={`/?date=${prevDate}`}>
          Prev pic
        </Link>
        {nextDate && <Link color="blue.600" as={NextLink} href={`/?date=${nextDate}`}>
          Next pic
        </Link>}
      </HStack>
    </HStack>);
}