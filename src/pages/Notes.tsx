import { FileText, FolderOpen, Search } from 'lucide-react';

interface NoteCardProps {
  title: string;
  preview: string;
  category: string;
  date: string;
}

function NoteCard({ title, preview, category, date }: NoteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
        <span>{category}</span>
        <span>•</span>
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{preview}</p>
      <button className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors">
        <FileText className="w-4 h-4" />
        <span>Read More</span>
      </button>
    </div>
  );
}

export function Notes() {
  const categories = ["All Notes", "Data Structures", "Algorithms", "Problem Solving", "Tips & Tricks"];
  const notes = [
    {
      title: "Understanding Time Complexity",
      preview: "A comprehensive guide to analyzing algorithm efficiency and Big O notation...",
      category: "Algorithms",
      date: "Mar 15, 2024"
    },
    {
      title: "Mastering Binary Trees",
      preview: "Deep dive into binary trees, their properties, and common operations...",
      category: "Data Structures",
      date: "Mar 14, 2024"
    },
    {
      title: "Dynamic Programming Patterns",
      preview: "Common patterns and approaches to solve dynamic programming problems...",
      category: "Problem Solving",
      date: "Mar 13, 2024"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Notes</h1>
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search notes..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              index === 0 ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notes.map((note, index) => (
          <NoteCard key={index} {...note} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="flex items-center gap-2 px-6 py-3 mx-auto bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
          <FolderOpen className="w-4 h-4" />
          <span>Load More Notes</span>
        </button>
      </div>
    </main>
  );
}