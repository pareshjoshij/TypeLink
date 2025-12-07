#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import { App } from './components/App.js';

const cli = meow(
  `
  Usage
    $ typelink [options]

  Options
    --base-url, -b  Base URL for shortened links (default: http://localhost:3000)
    --help, -h      Show this help message
    --version, -v   Show version number

  Examples
    $ typelink
    $ typelink --base-url https://my-domain.com
`,
  {
    importMeta: import.meta,
    flags: {
      baseUrl: {
        type: 'string',
        shortFlag: 'b',
        default: 'http://localhost:3000',
      },
    },
  }
);

render(<App baseUrl={cli.flags.baseUrl} />);
