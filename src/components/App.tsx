import React, { useState, useEffect } from 'react';
import { Box, Text, useInput, useApp } from 'ink';
import { UrlShortener, ShortenedUrl } from '../utils/urlShortener.js';
import { CodeGenerator } from '../utils/codeGenerator.js';
import { MenuScreen } from './MenuScreen.js';
import { ShortenUrlScreen } from './ShortenUrlScreen.js';
import { ListUrlsScreen } from './ListUrlsScreen.js';
import { CodeSnippetsScreen } from './CodeSnippetsScreen.js';

type Screen = 'menu' | 'shorten' | 'list' | 'snippets' | 'exit';

interface AppProps {
  baseUrl?: string;
}

export const App: React.FC<AppProps> = ({ baseUrl = 'http://localhost:3000' }) => {
  const [screen, setScreen] = useState<Screen>('menu');
  const [urlShortener] = useState(() => new UrlShortener());
  const [codeGenerator] = useState(() => new CodeGenerator());
  const [selectedUrl, setSelectedUrl] = useState<ShortenedUrl | null>(null);
  const { exit } = useApp();

  useEffect(() => {
    if (screen === 'exit') {
      exit();
    }
  }, [screen, exit]);

  const handleUrlCreated = (url: ShortenedUrl) => {
    setSelectedUrl(url);
    setScreen('snippets');
  };

  const handleBack = () => {
    setScreen('menu');
    setSelectedUrl(null);
  };

  return (
    <Box flexDirection="column" padding={1}>
      <Box borderStyle="round" borderColor="cyan" padding={1} marginBottom={1}>
        <Text bold color="cyan">
          🚀 TypeLink - URL Shortener
        </Text>
      </Box>

      {screen === 'menu' && (
        <MenuScreen onNavigate={setScreen} urlCount={urlShortener.count} />
      )}

      {screen === 'shorten' && (
        <ShortenUrlScreen
          urlShortener={urlShortener}
          onUrlCreated={handleUrlCreated}
          onBack={handleBack}
        />
      )}

      {screen === 'list' && (
        <ListUrlsScreen
          urlShortener={urlShortener}
          onSelectUrl={(url) => {
            setSelectedUrl(url);
            setScreen('snippets');
          }}
          onBack={handleBack}
        />
      )}

      {screen === 'snippets' && selectedUrl && (
        <CodeSnippetsScreen
          url={selectedUrl}
          codeGenerator={codeGenerator}
          baseUrl={baseUrl}
          onBack={handleBack}
        />
      )}
    </Box>
  );
};
