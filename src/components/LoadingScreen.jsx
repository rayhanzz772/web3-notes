/**
 * LoadingScreen Component
 * Beautiful loading screen with animated spinner
 */
const LoadingScreen = ({ message = "Loading...", subtitle = "Please wait" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg">
      <div className="text-center animate-fade-in">
        {/* Animated Spinner Container */}
        <div className="relative inline-block mb-8">
          {/* Outer rotating ring */}
          <div className="w-24 h-24 border-4 border-primary-200 dark:border-primary-900 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"></div>
          
          {/* Inner pulsing ring */}
          <div className="absolute inset-2 border-4 border-primary-100 dark:border-primary-950 border-b-primary-500 dark:border-b-primary-500 rounded-full animate-spin" 
               style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
        </div>

        {/* Loading text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text animate-slide-up">
            {message}
          </h2>
          <p className="text-gray-600 dark:text-dark-muted animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
          
          {/* Loading dots animation */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-1 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-400 to-primary-600 animate-[progress_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
