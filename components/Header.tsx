import { HStack, Image, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Header() {

  const hidden = useBreakpointValue(
    {
      base: true,
      md: false
    },
  )

  return (
    <HStack spacing={0}>
        <Image hidden={hidden} w="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" />
        <Heading
            fontWeight="extrabold"
            size={["2xl", "3xl"]}
            >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              Nasa
            </Text>
            <br />
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Picture of the Day
            </Text>
          </Heading>
      </HStack>
  )
}