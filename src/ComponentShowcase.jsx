/**
 * Component Showcase & Testing Page
 * Use this file to test and showcase all components in isolation
 */

import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';
import NoteCard from './components/NoteCard';
import NoteEditor from './components/NoteEditor';

function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Mock note data for testing
  const mockNote = {
    title: "My First Blockchain Note",
    content: "This is a sample note with **markdown** support! You can make text *italic* or use `code` formatting.",
    timestamp: BigInt(Math.floor(Date.now() / 1000))
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg p-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-dark-text mb-2">
              🎨 Component Showcase
            </h1>
            <p className="text-gray-600 dark:text-dark-muted">
              Testing and previewing all components
            </p>
          </div>

          {/* Buttons Section */}
          <section className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
              Buttons
            </h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </Button>
              </div>

              <div className="flex gap-4">
                <Button disabled>Disabled</Button>
                <Button>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  With Icon
                </Button>
              </div>
            </div>
          </section>

          {/* Inputs Section */}
          <section className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
              Inputs
            </h2>
            <div className="space-y-4 max-w-md">
              <Input placeholder="Default input" />
              <Input 
                placeholder="Input with icon" 
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
              <Input type="email" placeholder="Email input" />
              <Input type="password" placeholder="Password input" />
            </div>
          </section>

          {/* Modal Section */}
          <section className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
              Modal
            </h2>
            <Button onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            
            <Modal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)}
              title="Example Modal"
            >
              <p className="text-gray-600 dark:text-dark-muted mb-4">
                This is a modal dialog. It can contain any content you want.
                Click outside, press Escape, or click the X to close.
              </p>
              <div className="flex justify-end gap-3">
                <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsModalOpen(false)}>
                  Confirm
                </Button>
              </div>
            </Modal>
          </section>

          {/* NoteCard Section */}
          <section className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
              Note Card
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <NoteCard
                note={mockNote}
                index={0}
                onDelete={(id) => console.log('Delete note:', id)}
                onClick={() => console.log('View note')}
              />
              <NoteCard
                note={{
                  ...mockNote,
                  title: "Another Note Example",
                  content: "This is another example note to show how the cards look in a grid layout. The content can be much longer and it will be truncated with an ellipsis."
                }}
                index={1}
                onDelete={(id) => console.log('Delete note:', id)}
                onClick={() => console.log('View note')}
              />
            </div>
          </section>

          {/* NoteEditor Section */}
          <section className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
              Note Editor
            </h2>
            <Button onClick={() => setIsEditorOpen(true)}>
              Open Editor
            </Button>
            
            <Modal 
              isOpen={isEditorOpen} 
              onClose={() => setIsEditorOpen(false)}
              title="Create Note"
              size="lg"
            >
              <NoteEditor
                onSave={(note) => {
                  console.log('Save note:', note);
                  setIsEditorOpen(false);
                }}
                onCancel={() => setIsEditorOpen(false)}
              />
            </Modal>
          </section>

          {/* Color Palette */}
          <section className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
              Color Palette
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="h-20 bg-primary-500 rounded-lg mb-2"></div>
                <p className="text-sm text-gray-600 dark:text-dark-muted">Primary</p>
              </div>
              <div>
                <div className="h-20 bg-gray-900 dark:bg-dark-text rounded-lg mb-2"></div>
                <p className="text-sm text-gray-600 dark:text-dark-muted">Text</p>
              </div>
              <div>
                <div className="h-20 bg-green-500 rounded-lg mb-2"></div>
                <p className="text-sm text-gray-600 dark:text-dark-muted">Success</p>
              </div>
              <div>
                <div className="h-20 bg-red-500 rounded-lg mb-2"></div>
                <p className="text-sm text-gray-600 dark:text-dark-muted">Danger</p>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
              Typography
            </h2>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-dark-text">
                Heading 1
              </h1>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
                Heading 2
              </h2>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text">
                Heading 3
              </h3>
              <p className="text-base text-gray-700 dark:text-dark-muted">
                Regular paragraph text with normal weight and size.
              </p>
              <p className="text-sm text-gray-600 dark:text-dark-muted">
                Small text for captions and secondary information.
              </p>
              <code className="text-sm font-mono bg-gray-100 dark:bg-dark-border px-2 py-1 rounded text-primary-600 dark:text-primary-400">
                Code formatting example
              </code>
            </div>
          </section>

        </div>
      </div>
    </ThemeProvider>
  );
}

export default ComponentShowcase;
