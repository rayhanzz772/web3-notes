import { useTheme } from '../contexts/ThemeContext';

/**
 * Header Component
 * Top navigation with wallet connection, search, and theme toggle
 */
const Header = ({ account, onConnect, onDisconnect, searchQuery, onSearchChange }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-dark-bg/80 border-b border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center shadow-soft">
              <img src="/icon.png" alt="Web3 Notes" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-dark-text">
                Web3 Notes
              </h1>
              <p className="text-xs text-gray-500 dark:text-dark-muted">
                Decentralized & Secure
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Wallet Connection */}
            {account ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700 dark:text-green-400 hidden sm:flex">
                    {account.slice(0, 6)}...{account.slice(-4)}
                  </span>
                </div>
                <button
                  onClick={onDisconnect}
                  className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors group"
                  aria-label="Disconnect wallet"
                  title="Disconnect Wallet"
                >
                  <svg 
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                onClick={onConnect}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all shadow-soft hover:shadow-medium"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
