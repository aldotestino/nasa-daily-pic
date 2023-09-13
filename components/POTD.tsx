import { Box, Flex, Heading, VStack, Text, Image, useBreakpointValue, Badge, HStack } from '@chakra-ui/react';
import { NasaPOTD } from '../utils/types';
import { CalendarIcon } from '@chakra-ui/icons';

export default function POTD({ title, date, explanation, url, isVideo }: NasaPOTD) {

  const hidden = useBreakpointValue(
    {
      base: true,
      md: false
    },
  );

  return (
    <>
      <Heading fontWeight="medium" hidden={!hidden} size="xl">{title}</Heading>
      <Flex direction={['column', 'column', 'row']} align="start" gap={[4, 4, 10]}>
        <Box flex={2}>
          {isVideo ?
            <iframe
              style={{ display: 'block', width: 'full' }}
              src={url} title={title}  
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            : <Image src={url} alt={title} />}
        </Box>
        <VStack flex={3} align="start" spacing={4}>
          <Heading fontWeight="medium" hidden={hidden} size="2xl">{title}</Heading>
          <HStack>
            <CalendarIcon boxSize={4} />
            <Badge fontSize="lg">{date}</Badge>
          </HStack>
          <Text fontSize="xl">{explanation}</Text>
        </VStack>
      </Flex>
    </>
  );
}