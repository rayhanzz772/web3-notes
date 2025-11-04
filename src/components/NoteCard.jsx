import { useState } from 'react';

/**
 * NoteCard Component
 * Displays individual note with markdown preview, hover effects, and actions
 */
const NoteCard = ({ note, index, onDelete, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Format timestamp
  const formatDate = (timestamp) => {
    const date = new Date(Number(timestamp) * 1000);
    const now = new Date();
    const diff = now - date;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  // Truncate content for preview
  const truncateContent = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative
        bg-white dark:bg-dark-card
        border border-gray-200 dark:border-dark-border
        rounded-2xl p-6
        cursor-pointer
        transition-all duration-300 ease-out
        hover:shadow-large hover:-translate-y-1
        ${isHovered ? 'ring-2 ring-primary-500/20' : ''}
      `}
    >
      {/* Color accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text line-clamp-2 flex-1">
          {note.title}
        </h3>
        
        {/* Delete button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(index);
          }}
          className="ml-2 p-2 opacity-0 group-hover:opacity-100 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
          aria-label="Delete note"
        >
          <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      {/* Content Preview */}
      <p className="text-gray-600 dark:text-dark-muted text-sm mb-4 line-clamp-3">
        {truncateContent(note.content)}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-400 dark:text-dark-muted">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{formatDate(note.timestamp)}</span>
        </div>
        
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-primary-600 dark:text-primary-400 font-medium">Read more</span>
          <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
