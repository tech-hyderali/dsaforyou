import { BookOpen, Code, FileText, NotebookPen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">dsaforyou.com</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/learn" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <BookOpen className="w-4 h-4" />
              <span>Learn</span>
            </Link>
            <Link to="/practice" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <Code className="w-4 h-4" />
              <span>Practice</span>
            </Link>
            <Link to="/projects" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <NotebookPen className="w-4 h-4" />
              <span>Projects</span>
            </Link>
            <Link to="/notes" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <FileText className="w-4 h-4" />
              <span>Notes</span>
            </Link>
            <button className="ml-4 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}