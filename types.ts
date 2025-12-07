import React from 'react';

export interface ShortenedURL {
  id: string;
  originalUrl: string;
  shortCode: string;
  createdAt: number;
}

export interface CommandHistory {
  type: 'input' | 'output' | 'error' | 'success';
  content: React.ReactNode;
}