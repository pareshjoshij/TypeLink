import { nanoid } from 'nanoid';

export interface ShortenedUrl {
  id: string;
  originalUrl: string;
  shortCode: string;
  createdAt: Date;
  clicks: number;
}

export class UrlShortener {
  private urls: Map<string, ShortenedUrl> = new Map();
  private codeLength: number = 6;

  constructor(codeLength: number = 6) {
    this.codeLength = codeLength;
  }

  isValidUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
      return false;
    }
  }

  shortenUrl(originalUrl: string, customCode?: string): ShortenedUrl {
    if (!this.isValidUrl(originalUrl)) {
      throw new Error('Invalid URL format');
    }

    let shortCode = customCode;
    
    if (customCode) {
      if (this.urls.has(customCode)) {
        throw new Error('Custom code already exists');
      }
    } else {
      shortCode = nanoid(this.codeLength);
      while (this.urls.has(shortCode)) {
        shortCode = nanoid(this.codeLength);
      }
    }

    const shortened: ShortenedUrl = {
      id: nanoid(),
      originalUrl,
      shortCode: shortCode!,
      createdAt: new Date(),
      clicks: 0,
    };

    this.urls.set(shortCode!, shortened);
    return shortened;
  }

  getOriginalUrl(shortCode: string): ShortenedUrl | undefined {
    return this.urls.get(shortCode);
  }

  incrementClicks(shortCode: string): void {
    const url = this.urls.get(shortCode);
    if (url) {
      url.clicks++;
    }
  }

  getAllUrls(): ShortenedUrl[] {
    return Array.from(this.urls.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  deleteUrl(shortCode: string): boolean {
    return this.urls.delete(shortCode);
  }

  clear(): void {
    this.urls.clear();
  }

  get count(): number {
    return this.urls.size;
  }
}
