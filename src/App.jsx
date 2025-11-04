import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abiFile from "./BlockchainNotesABI.json";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import WalletConnect from "./components/WalletConnect";
import NoteCard from "./components/NoteCard";
import NoteEditor from "./components/NoteEditor";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Input from "./components/Input";

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const contractABI = abiFile.abi;

/**
 * Main App Component
 * Modern Notes Application with Web3 integration
 */
function App() {
  // State management
  const [account, setAccount] = useState(null);
  const [notes, setNotes] = useState([]);
  const [contract, setContract] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'oldest', 'title'

  /**
   * Connect user's MetaMask wallet
   */
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const [addr] = await window.ethereum.request({ 
          method: "eth_requestAccounts" 
        });
        setAccount(addr);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
        alert("Failed to connect wallet. Please try again.");
      }
    } else {
      alert("Please install MetaMask to use this app!");
      window.open("https://metamask.io/download/", "_blank");
    }
  };

  /**
   * Disconnect wallet
   */
  const disconnectWallet = () => {
    setAccount(null);
    setContract(null);
    setNotes([]);
    setSearchQuery("");
    setSelectedNote(null);
    setIsEditorOpen(false);
  };

  /**
   * Initialize contract instance when wallet is connected
   */
  useEffect(() => {
    if (account) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      provider.getSigner().then((signer) => {
        const instance = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(instance);
      });
    }
  }, [account]);

  /**
   * Load notes from blockchain
   */
const loadNotes = async () => {
  if (contract) {
    try {
      setIsLoading(true);

      const res = await contract.getMyNotes();
      // Ubah dari Result (read-only) menjadi array biasa
      const notesArray = res.map((note) => ({
        title: note.title,
        content: note.content,
        timestamp: note.timestamp.toString(), // ubah BigInt ke string agar aman
      }));

      setNotes(notesArray);
    } catch (error) {
      console.error("Failed to load notes:", error);
      alert("Failed to load notes. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }
};


  /**
   * Add a new note to blockchain
   */
  const addNote = async ({ title, content }) => {
    if (!title || !content) return;
    
    try {
      setIsLoading(true);
      const tx = await contract.addNote(title, content);
      await tx.wait();
      setIsEditorOpen(false);
      await loadNotes();
    } catch (error) {
      console.error("Failed to add note:", error);
      alert("Failed to add note. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Delete a note from blockchain
   */
  const deleteNote = async (id) => {
    if (!confirm("Are you sure you want to delete this note?")) return;
    
    try {
      setIsLoading(true);
      const tx = await contract.deleteNote(id);
      await tx.wait();
      await loadNotes();
    } catch (error) {
      console.error("Failed to delete note:", error);
      alert("Failed to delete note. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Load notes when contract is ready
   */
  useEffect(() => {
    if (contract) loadNotes();
  }, [contract]);

  /**
   * Filter and sort notes based on search query and sort option
   */
  const filteredNotes = notes
    .filter(note => {
      if (!note.title) return false;
      const searchLower = searchQuery.toLowerCase();
      return (
        note.title.toLowerCase().includes(searchLower) ||
        note.content.toLowerCase().includes(searchLower)
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return Number(b.timestamp) - Number(a.timestamp);
        case 'oldest':
          return Number(a.timestamp) - Number(b.timestamp);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-200">
        {/* Show WalletConnect page if not connected */}
        {!account ? (
          <WalletConnect onConnect={connectWallet} />
        ) : (
          <>
            {/* Header */}
            <Header
              account={account}
              onConnect={connectWallet}
              onDisconnect={disconnectWallet}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex-1 w-full sm:max-w-md">
                  <Input
                    type="search"
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    icon={
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    }
                  />
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl text-sm text-gray-700 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="title">By Title</option>
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-dark-card rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-white dark:bg-dark-border shadow-soft'
                          : 'hover:bg-gray-200 dark:hover:bg-dark-border'
                      }`}
                      aria-label="Grid view"
                    >
                      <svg className="w-4 h-4 text-gray-700 dark:text-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'list'
                          ? 'bg-white dark:bg-dark-border shadow-soft'
                          : 'hover:bg-gray-200 dark:hover:bg-dark-border'
                      }`}
                      aria-label="List view"
                    >
                      <svg className="w-4 h-4 text-gray-700 dark:text-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>

                  {/* Create Note Button */}
                  <Button onClick={() => setIsEditorOpen(true)}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <div className="hidden sm:flex">
                      New Note
                    </div>
                  </Button>
                </div>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                </div>
              )}

              {/* Notes Grid/List */}
              {!isLoading && (
                <>
                  {filteredNotes.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">📝</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-2">
                        {searchQuery ? 'No notes found' : 'No notes yet'}
                      </h3>
                      <p className="text-gray-600 dark:text-dark-muted mb-6">
                        {searchQuery 
                          ? 'Try adjusting your search query'
                          : 'Create your first note to get started'
                        }
                      </p>
                      {!searchQuery && (
                        <Button onClick={() => setIsEditorOpen(true)}>
                          Create Your First Note
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className={`
                      ${viewMode === 'grid' 
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                        : 'flex flex-col gap-4'
                      }
                    `}>
                      {filteredNotes.map((note, index) => (
                        <NoteCard
                          key={index}
                          note={note}
                          index={index}
                          onDelete={deleteNote}
                          onClick={() => setSelectedNote({ ...note, index })}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </main>

            {/* Note Editor Modal */}
            <Modal
              isOpen={isEditorOpen}
              onClose={() => setIsEditorOpen(false)}
              title="Create New Note"
              size="lg"
            >
              <NoteEditor
                onSave={addNote}
                onCancel={() => setIsEditorOpen(false)}
              />
            </Modal>

            {/* Note Detail Modal */}
            <Modal
              isOpen={!!selectedNote}
              onClose={() => setSelectedNote(null)}
              title="Note Details"
              size="lg"
            >
              {selectedNote && (
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
                    {selectedNote.title}
                  </h2>
                  <div className="text-sm text-gray-500 dark:text-dark-muted">
                    {new Date(Number(selectedNote.timestamp) * 1000).toLocaleString()}
                  </div>
                  <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-dark-muted whitespace-pre-wrap">
                    {selectedNote.content}
                  </div>
                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-dark-border">
                    <Button variant="ghost" onClick={() => setSelectedNote(null)}>
                      Close
                    </Button>
                    <Button 
                      variant="danger" 
                      onClick={() => {
                        deleteNote(selectedNote.index);
                        setSelectedNote(null);
                      }}
                    >
                      Delete Note
                    </Button>
                  </div>
                </div>
              )}
            </Modal>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
