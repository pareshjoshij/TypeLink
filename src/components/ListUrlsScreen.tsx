import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { UrlShortener, ShortenedUrl } from '../utils/urlShortener.js';

interface ListUrlsScreenProps {
  urlShortener: UrlShortener;
  onSelectUrl: (url: ShortenedUrl) => void;
  onBack: () => void;
}

export const ListUrlsScreen: React.FC<ListUrlsScreenProps> = ({
  urlShortener,
  onSelectUrl,
  onBack,
}) => {
  const urls = urlShortener.getAllUrls();
  const [selected, setSelected] = useState(0);

  useInput((input, key) => {
    if (key.escape) {
      onBack();
      return;
    }

    if (urls.length > 0) {
      if (key.upArrow) {
        setSelected((prev) => (prev > 0 ? prev - 1 : urls.length - 1));
      } else if (key.downArrow) {
        setSelected((prev) => (prev < urls.length - 1 ? prev + 1 : 0));
      } else if (key.return) {
        onSelectUrl(urls[selected]);
      } else if (input === 'd' || input === 'D') {
        urlShortener.deleteUrl(urls[selected].shortCode);
        if (selected >= urls.length - 1 && selected > 0) {
          setSelected(selected - 1);
        }
      }
    }
  });

  return (
    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text bold underline>
          All Shortened URLs
        </Text>
      </Box>

      {urls.length === 0 ? (
        <Box marginBottom={1}>
          <Text color="yellow">No URLs shortened yet.</Text>
        </Box>
      ) : (
        <Box flexDirection="column">
          {urls.map((url, index) => (
            <Box
              key={url.id}
              flexDirection="column"
              borderStyle="round"
              borderColor={selected === index ? 'cyan' : 'gray'}
              padding={1}
              marginBottom={1}
            >
              <Box>
                <Text color={selected === index ? 'cyan' : 'white'}>
                  {selected === index ? '❯ ' : '  '}
                  <Text bold>Code:</Text> {url.shortCode}
                </Text>
              </Box>
              <Box marginLeft={2}>
                <Text>
                  <Text bold>URL:</Text> <Text color="blue">{url.originalUrl}</Text>
                </Text>
              </Box>
              <Box marginLeft={2}>
                <Text dimColor>
                  Created: {url.createdAt.toLocaleString()} | Clicks: {url.clicks}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      <Box marginTop={1}>
        <Text dimColor>
          {urls.length > 0
            ? 'Use ↑/↓ to navigate, Enter to view snippets, D to delete, ESC to go back'
            : 'Press ESC to go back'}
        </Text>
      </Box>
    </Box>
  );
};
