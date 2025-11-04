#!/bin/bash

# Installation script for Web3 Notes Application
# This script ensures all required dependencies are installed

echo "📦 Installing Web3 Notes Dependencies..."
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

echo "✅ npm found"
echo ""

# Install core dependencies
echo "Installing core dependencies..."
npm install react@^19.1.1 react-dom@^19.1.1 ethers@^6.15.0

# Install optional UI dependencies (if not already installed)
echo ""
echo "Installing UI enhancement dependencies..."
npm install framer-motion react-markdown lucide-react

# Install dev dependencies
echo ""
echo "Installing dev dependencies..."
npm install -D tailwindcss@^4.1.16 autoprefixer@^10.4.21 postcss@^8.5.6

echo ""
echo "✨ Installation complete!"
echo ""
echo "Next steps:"
echo "1. Create a .env file with your contract address:"
echo "   VITE_CONTRACT_ADDRESS=your_contract_address_here"
echo ""
echo "2. Run the development server:"
echo "   npm run dev"
echo ""
echo "Happy coding! 🚀"
