import { useState } from 'react';
import Button from './Button';
import Input from './Input';

/**
 * NoteEditor Component
 * Full-featured editor with markdown support and live preview
 */
const NoteEditor = ({ onSave, onCancel, initialTitle = '', initialContent = '' }) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isPreview, setIsPreview] = useState(false);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content');
      return;
    }
    onSave({ title, content });
  };

  // Simple markdown renderer (for basic formatting)
  const renderMarkdown = (text) => {
    return text
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      // Code blocks
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-dark-border px-1 py-0.5 rounded text-sm font-mono">$1</code>')
      // Line breaks
      .replace(/\n/g, '<br />');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200 dark:border-dark-border">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPreview(false)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              !isPreview 
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400' 
                : 'text-gray-600 dark:text-dark-muted hover:bg-gray-100 dark:hover:bg-dark-border'
            }`}
          >
            ✏️ Edit
          </button>
          <button
            onClick={() => setIsPreview(true)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              isPreview 
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400' 
                : 'text-gray-600 dark:text-dark-muted hover:bg-gray-100 dark:hover:bg-dark-border'
            }`}
          >
            👁️ Preview
          </button>
        </div>

        <div className="text-xs text-gray-500 dark:text-dark-muted">
          Supports: **bold**, *italic*, `code`, # headers
        </div>
      </div>

      {/* Title Input */}
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-2xl font-bold border-0 border-b border-gray-200 dark:border-dark-border rounded-none px-0 focus:ring-0 focus:border-primary-500"
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 mb-6">
        {!isPreview ? (
          <textarea
            placeholder="Start writing your note... You can use markdown formatting!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full min-h-[300px] p-4 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl text-gray-900 dark:text-dark-text placeholder-gray-400 dark:placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none font-mono text-sm"
          />
        ) : (
          <div className="w-full h-full min-h-[300px] p-4 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-xl overflow-auto">
            {content ? (
              <div 
                className="prose dark:prose-invert max-w-none text-gray-900 dark:text-dark-text"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
              />
            ) : (
              <p className="text-gray-400 dark:text-dark-muted italic">
                Nothing to preview yet. Start writing to see the preview!
              </p>
            )}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-dark-border">
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSave}>
          💾 Save Note
        </Button>
      </div>
    </div>
  );
};

export default NoteEditor;
