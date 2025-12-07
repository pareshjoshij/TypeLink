import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { ShortenedUrl } from '../utils/urlShortener.js';
import { CodeGenerator } from '../utils/codeGenerator.js';

interface CodeSnippetsScreenProps {
  url: ShortenedUrl;
  codeGenerator: CodeGenerator;
  baseUrl: string;
  onBack: () => void;
}

export const CodeSnippetsScreen: React.FC<CodeSnippetsScreenProps> = ({
  url,
  codeGenerator,
  baseUrl,
  onBack,
}) => {
  const snippets = codeGenerator.generateSnippets(url.shortCode, baseUrl);
  const [selected, setSelected] = useState(0);

  useInput((input, key) => {
    if (key.escape) {
      onBack();
      return;
    }

    if (key.upArrow) {
      setSelected((prev) => (prev > 0 ? prev - 1 : snippets.length - 1));
    } else if (key.downArrow) {
      setSelected((prev) => (prev < snippets.length - 1 ? prev + 1 : 0));
    }
  });

  const selectedSnippet = snippets[selected];

  return (
    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text bold underline color="green">
          ✅ URL Shortened Successfully!
        </Text>
      </Box>

      <Box flexDirection="column" marginBottom={1} borderStyle="round" borderColor="green" padding={1}>
        <Box>
          <Text>
            <Text bold>Short Code:</Text> <Text color="cyan">{url.shortCode}</Text>
          </Text>
        </Box>
        <Box>
          <Text>
            <Text bold>Short URL:</Text> <Text color="green">{baseUrl}/{url.shortCode}</Text>
          </Text>
        </Box>
        <Box>
          <Text>
            <Text bold>Original URL:</Text> <Text color="blue">{url.originalUrl}</Text>
          </Text>
        </Box>
      </Box>

      <Box marginBottom={1}>
        <Text bold underline>
          Code Snippets
        </Text>
      </Box>

      <Box flexDirection="column" marginBottom={1}>
        <Box marginBottom={1}>
          <Text dimColor>Select a language:</Text>
        </Box>
        <Box flexDirection="row" flexWrap="wrap" gap={1}>
          {snippets.map((snippet, index) => (
            <Box key={index} marginRight={2}>
              <Text color={selected === index ? 'cyan' : 'white'}>
                {selected === index ? '❯ ' : '  '}
                {snippet.language}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        flexDirection="column"
        borderStyle="round"
        borderColor="cyan"
        padding={1}
      >
        <Box marginBottom={1}>
          <Text bold color="cyan">
            {selectedSnippet.language}
          </Text>
        </Box>
        <Box>
          <Text color="gray">{selectedSnippet.code}</Text>
        </Box>
      </Box>

      <Box marginTop={1}>
        <Text dimColor>
          Use ↑/↓ to switch languages, ESC to go back
        </Text>
      </Box>
    </Box>
  );
};
