import Button from './Button';

/**
 * WalletConnect Component
 * Beautiful landing page for users without connected wallet
 */
const WalletConnect = ({ onConnect }) => {
  const features = [
    {
      icon: '🔒',
      title: 'Secure & Decentralized',
      description: 'Your notes are stored on the blockchain, ensuring complete privacy and security.'
    },
    {
      icon: '📝',
      title: 'Markdown Support',
      description: 'Write beautiful notes with full markdown formatting support.'
    },
    {
      icon: '🌐',
      title: 'Web3 Native',
      description: 'Built on Ethereum, your notes are truly yours and censorship-resistant.'
    },
    {
      icon: '✨',
      title: 'Modern Interface',
      description: 'Clean, minimalist design with dark mode and smooth animations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20  mb-6">
            <img src="/icon.png" alt="" />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Web3 Notes
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 dark:text-dark-muted mb-8 max-w-2xl mx-auto">
            Your decentralized note-taking app. Secure, private, and censorship-resistant.
            Store your thoughts on the blockchain forever.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={onConnect}
            size="lg"
            className="text-lg px-8 py-4 shadow-large hover:shadow-xl animate-slide-up"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Connect MetaMask to Get Started
          </Button>

          {/* Helper text */}
          <p className="mt-4 text-sm text-gray-500 dark:text-dark-muted">
            Don't have MetaMask?{' '}
            <a 
              href="https://metamask.io/download/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Download it here
            </a>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-dark-muted text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-primary-700 dark:text-primary-400 font-medium">
              Powered by Ethereum
            </span>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-8 bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm border border-gray-200 dark:border-dark-border rounded-2xl p-6">
          <h4 className="font-semibold text-gray-900 dark:text-dark-text mb-3">
            How it works:
          </h4>
          <ol className="space-y-2 text-gray-600 dark:text-dark-muted text-sm">
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary-600 dark:text-primary-400">1.</span>
              <span>Connect your MetaMask wallet to authenticate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary-600 dark:text-primary-400">2.</span>
              <span>Create, edit, and delete notes stored on the blockchain</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary-600 dark:text-primary-400">3.</span>
              <span>Your notes are permanently yours, accessible from anywhere</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
