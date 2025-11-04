# 📝 Web3 Notes - Decentralized Note-Taking Application

<div align="center">

![Web3 Notes](https://img.shields.io/badge/Web3-Notes-0ea5e9?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.12-646cff?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?style=for-the-badge&logo=tailwind-css)
![Ethers.js](https://img.shields.io/badge/Ethers.js-6.15.0-2535a0?style=for-the-badge)

*A modern, minimalistic notes application built on blockchain technology*

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Documentation](#-documentation)

</div>

---

## 🌟 Overview

**Web3 Notes** is a beautiful, decentralized note-taking application that stores your notes securely on the Ethereum blockchain. Built with modern technologies and designed with a minimalist aesthetic inspired by Notion and Linear, it combines the power of Web3 with an exceptional user experience.

### Why Web3 Notes?

- 🔒 **True Ownership** - Your notes are stored on the blockchain, truly owned by you
- 🌐 **Censorship Resistant** - No central authority can delete or modify your notes
- 🔐 **Secure** - Blockchain-backed security for your private thoughts
- 💎 **Modern UI** - Beautiful, minimalist interface with smooth animations
- 🌓 **Dark Mode** - Easy on the eyes, day or night
- 📝 **Markdown Support** - Write rich, formatted notes

---

## ✨ Features

### Core Functionality
- ✅ **Web3 Wallet Integration** - Secure authentication via MetaMask
- ✅ **Create & Delete Notes** - Full CRUD operations on the blockchain
- ✅ **Markdown Support** - Write notes with formatting (bold, italic, code, headers)
- ✅ **Live Preview** - Toggle between edit and preview modes
- ✅ **Search & Filter** - Find your notes instantly
- ✅ **Multiple Sort Options** - Sort by newest, oldest, or title

### User Experience
- ✅ **Light & Dark Mode** - Seamless theme switching with persistence
- ✅ **Grid & List Views** - Choose your preferred layout
- ✅ **Responsive Design** - Perfect on mobile, tablet, and desktop
- ✅ **Smooth Animations** - Delightful transitions and hover effects
- ✅ **Loading States** - Clear feedback during blockchain transactions
- ✅ **Empty States** - Helpful guidance when you have no notes
- ✅ **Wallet Connection Page** - Beautiful landing page for non-connected users

### Design
- 🎨 **Minimalist Aesthetic** - Clean design with lots of white space
- 🎨 **Rounded Corners** - Soft, modern UI elements
- 🎨 **Subtle Shadows** - Depth without distraction
- 🎨 **Smooth Gradients** - Eye-catching accents
- 🎨 **Custom Color Palette** - Carefully chosen colors for both themes

---

## 🎯 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library with modern hooks |
| **Vite** | Lightning-fast build tool |
| **Tailwind CSS** | Utility-first CSS framework |
| **Ethers.js** | Ethereum wallet & blockchain interaction |
| **Framer Motion** | Smooth animations (optional) |
| **React Markdown** | Markdown rendering (optional) |

---

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MetaMask browser extension
- A deployed smart contract address

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd web3-notes-frontend
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment

Create a `.env` file in the root directory:

```env
VITE_CONTRACT_ADDRESS=your_smart_contract_address_here
```

### Step 4: Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 📖 Usage

### 1. Connect Your Wallet

- Open the application in your browser
- Click **"Connect MetaMask to Get Started"**
- Approve the connection in MetaMask popup
- Your wallet address will appear in the header

### 2. Create a Note

- Click the **"New Note"** button in the toolbar
- Enter a title and content
- Use markdown formatting:
  - `**bold**` for **bold text**
  - `*italic*` for *italic text*
  - `` `code` `` for `inline code`
  - `#` for headers
- Toggle to **Preview** mode to see formatted output
- Click **"Save Note"** and confirm the transaction

### 3. Search & Filter

- Use the search bar to filter notes by title or content
- Sort by newest, oldest, or alphabetically by title
- Toggle between grid and list view

### 4. View & Delete Notes

- Click any note card to view full content
- Hover over a note and click the trash icon to delete
- Confirm the deletion transaction in MetaMask

### 5. Toggle Theme

- Click the sun/moon icon in the header
- Your preference is saved automatically

### 6. Disconnect Wallet

- Click the logout icon next to your wallet address
- All data is cleared from the local state

---

## 🏗️ Project Structure

```
web3-notes-frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx       # Versatile button component
│   │   ├── Input.jsx        # Modern input field
│   │   ├── Modal.jsx        # Accessible modal dialog
│   │   ├── Header.jsx       # Navigation with wallet status
│   │   ├── NoteCard.jsx     # Individual note display
│   │   ├── NoteEditor.jsx   # Note creation/editing with markdown
│   │   ├── WalletConnect.jsx # Landing page for non-connected users
│   │   └── index.js         # Component exports
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.jsx # Theme management (light/dark)
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles & Tailwind
│   └── BlockchainNotesABI.json # Smart contract ABI
├── public/                  # Public assets
├── .env                     # Environment variables
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── README.md               # This file
```

---

## 🎨 Component Documentation

### Button Component
Versatile button with 5 variants and 4 sizes:
- Variants: `primary`, `secondary`, `outline`, `ghost`, `danger`
- Sizes: `sm`, `md`, `lg`, `icon`

### NoteEditor Component
Full-featured markdown editor with:
- Live preview toggle
- Edit/Preview mode switcher
- Basic markdown rendering
- Form validation

### NoteCard Component
Beautiful note cards featuring:
- Hover lift effects
- Truncated content preview
- Relative timestamps ("2h ago")
- Delete action button
- Click to view full note

### Modal Component
Accessible modal dialogs with:
- Backdrop blur effect
- Click outside to close
- Escape key support
- Multiple sizes
- Body scroll lock

---

## 🎭 Dark Mode

The application features a fully-integrated dark mode:

- **Automatic Persistence** - Your preference is saved to localStorage
- **System-wide** - All components adapt to the theme
- **Smooth Transitions** - No jarring color changes
- **Custom Palette** - Carefully chosen colors for readability

---

## 📝 Markdown Support

Write rich, formatted notes with markdown syntax:

```markdown
# Header 1
## Header 2
### Header 3

**Bold text**
*Italic text*
`Inline code`
```

---

## 🔧 Configuration

### Tailwind Configuration

Custom theme in `tailwind.config.js`:
- Custom color palette
- Dark mode class strategy
- Custom animations (fade, slide, scale)
- Custom shadows (soft, medium, large)
- Inter font family

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_CONTRACT_ADDRESS` | Your deployed smart contract address | Yes |

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy Options

Deploy the `dist/` folder to:
- **Vercel** - Recommended for Vite apps
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting
- **IPFS** - Truly decentralized hosting

---

## 📚 Documentation

Additional documentation files:

- **[QUICKSTART.md](./QUICKSTART.md)** - Quick setup guide
- **[COMPONENTS_README.md](./COMPONENTS_README.md)** - Detailed component documentation
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Technical implementation details
- **[DEV_TIPS.md](./DEV_TIPS.md)** - Development best practices
- **[CHECKLIST.md](./CHECKLIST.md)** - Feature implementation checklist

---

## 🐛 Troubleshooting

### MetaMask Not Detected
- Install MetaMask browser extension
- Refresh the page after installation

### Wallet Won't Connect
- Ensure MetaMask is unlocked
- Check you're on the correct network
- Try refreshing the page

### Styles Not Loading
- Run `npm install` to ensure all dependencies are installed
- Check that `postcss.config.js` exists
- Clear browser cache

### Transaction Failing
- Check you have sufficient ETH for gas fees
- Verify contract address in `.env`
- Ensure you're on the correct blockchain network

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- Design inspired by [Notion](https://notion.so) and [Linear](https://linear.app)
- Built with modern React patterns and hooks
- Powered by Ethereum blockchain technology
- UI components styled with Tailwind CSS

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review the troubleshooting section

---

## 🎯 Roadmap

Future enhancements planned:
- [ ] Note editing functionality
- [ ] Tags and categories
- [ ] Note sharing
- [ ] Export to PDF/Markdown
- [ ] Full-text search
- [ ] Note templates
- [ ] Collaborative notes
- [ ] Mobile app

---

<div align="center">

**Made with ❤️ and ⚡ using React, Tailwind, and Ethereum**

[⬆ Back to Top](#-web3-notes---decentralized-note-taking-application)

</div>
