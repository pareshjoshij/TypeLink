import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { UrlShortener, ShortenedUrl } from '../utils/urlShortener.js';

interface ShortenUrlScreenProps {
  urlShortener: UrlShortener;
  onUrlCreated: (url: ShortenedUrl) => void;
  onBack: () => void;
}

export const ShortenUrlScreen: React.FC<ShortenUrlScreenProps> = ({
  urlShortener,
  onUrlCreated,
  onBack,
}) => {
  const [step, setStep] = useState<'url' | 'custom'>('url');
  const [url, setUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [error, setError] = useState('');

  useInput((input, key) => {
    if (key.escape) {
      onBack();
      return;
    }

    if (key.return) {
      if (step === 'url') {
        if (!url) {
          setError('URL cannot be empty');
          return;
        }
        if (!urlShortener.isValidUrl(url)) {
          setError('Invalid URL format. Please use http:// or https://');
          return;
        }
        setError('');
        setStep('custom');
      } else {
        try {
          const shortened = urlShortener.shortenUrl(
            url,
            customCode || undefined
          );
          onUrlCreated(shortened);
        } catch (err) {
          setError((err as Error).message);
        }
      }
      return;
    }

    if (key.backspace || key.delete) {
      if (step === 'url') {
        setUrl((prev) => prev.slice(0, -1));
      } else {
        setCustomCode((prev) => prev.slice(0, -1));
      }
      setError('');
    } else if (input && !key.ctrl && !key.meta) {
      if (step === 'url') {
        setUrl((prev) => prev + input);
      } else {
        setCustomCode((prev) => prev + input);
      }
      setError('');
    }
  });

  return (
    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text bold underline>
          Shorten URL
        </Text>
      </Box>

      {step === 'url' ? (
        <Box flexDirection="column">
          <Box marginBottom={1}>
            <Text>Enter the URL to shorten:</Text>
          </Box>
          <Box borderStyle="round" borderColor="cyan" padding={1}>
            <Text>
              {url}
              <Text color="cyan">█</Text>
            </Text>
          </Box>
        </Box>
      ) : (
        <Box flexDirection="column">
          <Box marginBottom={1}>
            <Text>
              URL: <Text color="green">{url}</Text>
            </Text>
          </Box>
          <Box marginBottom={1}>
            <Text>Enter custom code (optional, press Enter to auto-generate):</Text>
          </Box>
          <Box borderStyle="round" borderColor="cyan" padding={1}>
            <Text>
              {customCode}
              <Text color="cyan">█</Text>
            </Text>
          </Box>
        </Box>
      )}

      {error && (
        <Box marginTop={1}>
          <Text color="red">❌ {error}</Text>
        </Box>
      )}

      <Box marginTop={1}>
        <Text dimColor>
          {step === 'url'
            ? 'Press Enter to continue, ESC to go back'
            : 'Press Enter to create, ESC to go back'}
        </Text>
      </Box>
    </Box>
  );
};
