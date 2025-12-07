export interface CodeSnippet {
  language: string;
  code: string;
}

export class CodeGenerator {
  generateSnippets(shortUrl: string, baseUrl: string = 'http://localhost:3000'): CodeSnippet[] {
    const fullUrl = `${baseUrl}/${shortUrl}`;

    return [
      {
        language: 'cURL',
        code: `curl -L "${fullUrl}"`,
      },
      {
        language: 'JavaScript (fetch)',
        code: `fetch('${fullUrl}')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
      },
      {
        language: 'Node.js (axios)',
        code: `const axios = require('axios');

axios.get('${fullUrl}')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));`,
      },
      {
        language: 'Python (requests)',
        code: `import requests

response = requests.get('${fullUrl}')
print(response.text)`,
      },
      {
        language: 'Go',
        code: `package main

import (
    "fmt"
    "io"
    "net/http"
)

func main() {
    resp, err := http.Get("${fullUrl}")
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,
      },
      {
        language: 'PHP',
        code: `<?php
$response = file_get_contents('${fullUrl}');
echo $response;
?>`,
      },
      {
        language: 'Ruby',
        code: `require 'net/http'
require 'uri'

uri = URI.parse('${fullUrl}')
response = Net::HTTP.get_response(uri)
puts response.body`,
      },
      {
        language: 'Java',
        code: `import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("${fullUrl}"))
    .build();

HttpResponse<String> response = client.send(request, 
    HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());`,
      },
    ];
  }

  formatSnippet(snippet: CodeSnippet): string {
    return `${snippet.language}:\n${snippet.code}`;
  }
}
