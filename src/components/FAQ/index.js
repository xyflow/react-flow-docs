import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Heading,
} from '@chakra-ui/react';

function FAQItem({ title, text }) {
  return (
    <AccordionItem>
      <AccordionButton cursor="pointer" userSelect="none" size="md" as={Heading}>
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>{text}</AccordionPanel>
    </AccordionItem>
  );
}

export default function FAQ() {
  return (
    <Accordion allowToggle allowMultiple reduceMotion defaultIndex={[0]}>
      <FAQItem
        title="Why should I pay for an open source library?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <FAQItem
        title="I need help building my project. Are you offering custom support and implementation services?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <FAQItem
        title="What is Datablocks?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <FAQItem
        title="What can I expect from a private Discord channel with the creators of React Flow?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <FAQItem
        title="What is the #insiders Discord channel?"
        text="The #insiders channel is a channel with all professional subscribers and the React Flow creators. In that channel, we share previews for new features, early-access links to next versions, useful snippets and offer troubleshooting on a regular basis."
      />

      <FAQItem
        title="I want to remove the attribution from the React Flow pane. How can I do that?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <FAQItem
        title="Under which license is React Flow published?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <FAQItem
        title="Why do I need an onboarding call?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <FAQItem
        title="What is the advanced examples repository?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </Accordion>
  );
}
