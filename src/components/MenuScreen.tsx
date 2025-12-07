import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

type Screen = 'menu' | 'shorten' | 'list' | 'snippets' | 'exit';

interface MenuScreenProps {
  onNavigate: (screen: Screen) => void;
  urlCount: number;
}

export const MenuScreen: React.FC<MenuScreenProps> = ({ onNavigate, urlCount }) => {
  const [selected, setSelected] = useState(0);

  const menuItems = [
    { label: '📝 Shorten a new URL', screen: 'shorten' as Screen },
    { label: '📋 View all shortened URLs', screen: 'list' as Screen },
    { label: '🚪 Exit', screen: 'exit' as Screen },
  ];

  useInput((input, key) => {
    if (key.upArrow) {
      setSelected((prev) => (prev > 0 ? prev - 1 : menuItems.length - 1));
    } else if (key.downArrow) {
      setSelected((prev) => (prev < menuItems.length - 1 ? prev + 1 : 0));
    } else if (key.return) {
      onNavigate(menuItems[selected].screen);
    }
  });

  return (
    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text>
          Total shortened URLs: <Text bold color="green">{urlCount}</Text>
        </Text>
      </Box>

      <Box flexDirection="column">
        <Box marginBottom={1}>
          <Text bold underline>
            Main Menu
          </Text>
        </Box>
        {menuItems.map((item, index) => (
          <Box key={index} marginBottom={0}>
            <Text color={selected === index ? 'cyan' : 'white'}>
              {selected === index ? '❯ ' : '  '}
              {item.label}
            </Text>
          </Box>
        ))}
      </Box>

      <Box marginTop={1}>
        <Text dimColor>
          Use ↑/↓ arrow keys to navigate, Enter to select
        </Text>
      </Box>
    </Box>
  );
};
