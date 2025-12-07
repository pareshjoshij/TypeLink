# TypeLink | Terminal URL Shortener

TypeLink is a developer-focused URL shortener with a "Cyberpunk/Terminal" aesthetic. Currently implemented as a **Client-Side Simulation**, it provides the full experience of the tool using React, TypeScript, and Tailwind CSS.

## 🚀 How It Works

The application simulates a command-line interface directly in the browser:

1.  **Terminal UI**: Users interact with a shell-like prompt (`user@typelink~$`).
2.  **Command Processing**:
    *   **Shortening**: Inputting a valid URL (e.g., `https://example.com`) triggers the shortening logic.
    *   **Commands**: Supports built-in commands like `help` and `clear`.
3.  **Local Storage Database**: Instead of a server-side DB, it uses the browser's `localStorage` to persist shortened links and collision checks (simulating a Base62 algorithm).
4.  **Code Generation**: For every shortened link, it auto-generates a **Python `requests` snippet**, reinforcing the developer-first theme.

## 🛠️ Local Development

### Prerequisites
*   Node.js (v16 or higher)
*   npm or yarn

### Installation

1.  **Clone the project**
    ```bash
    git clone https://github.com/pareshjoshij/TypeLink.git
    cd TypeLink
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Deployment

This project is a static Single Page Application (SPA). You can deploy it to any static hosting provider.

### Deploy on Vercel (Recommended)

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import the project into Vercel.
3.  Framework Preset: **Create React App** or **Vite** (depending on your bundler, usually auto-detected).
4.  Click **Deploy**.

### Deploy on Netlify

1.  Drag and drop your `build` or `dist` folder into Netlify Drop, or connect your Git repository.
2.  Build Command: `npm run build`
3.  Publish Directory: `build` (or `dist`)

## 🤝 Contribution

We welcome contributions to TypeLink! Whether you want to fix a bug, improve the UI, or add new features, please feel free to contribute.

See the [CONTRIBUTING.md](./CONTRIBUTING.md) file for detailed instructions on how to get started.

## 📂 Project Structure

*   **`App.tsx`**: Main application logic and terminal state management.
*   **`components/TerminalWindow.tsx`**: The visual container for the terminal interface.
*   **`components/PythonSnippet.tsx`**: Renders the syntax-highlighted Python code.
*   **`utils.ts`**: Contains the Base62 logic and `localStorage` mock database adapter.
*   **`types.ts`**: TypeScript interfaces for the application.

---

*Note: This version runs entirely in the browser. For a production environment, this frontend is designed to pair with a Python FastAPI backend.*