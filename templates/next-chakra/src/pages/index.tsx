import {
  Link as ChakraLink,
  Code,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';

import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Container } from '../uikit/components/Container';
import { CTA } from '../uikit/components/CTA';
import { DarkModeSwitch } from '../uikit/components/DarkModeSwitch';
import { Footer } from '../uikit/components/Footer';
import { Hero } from '../uikit/components/Hero';
import { Main } from '../uikit/components/Main';

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text color="text">
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
        <Code>TypeScript</Code>.
      </Text>

      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
