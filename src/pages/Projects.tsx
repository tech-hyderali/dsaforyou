import { Code2, GitBranch, Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  topics: string[];
  stars: number;
  forks: number;
}

function ProjectCard({ title, description, topics, stars, forks }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {topics.map((topic, index) => (
          <span key={index} className="px-2 py-1 rounded-md text-sm font-medium text-gray-600 bg-gray-100">
            {topic}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-gray-600">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitBranch className="w-4 h-4" />
          <span>{forks}</span>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Graph Algorithms Visualizer",
      description: "Interactive visualization of common graph algorithms like DFS, BFS, and Dijkstra's.",
      topics: ["React", "TypeScript", "Algorithms"],
      stars: 245,
      forks: 45
    },
    {
      title: "Data Structure Explorer",
      description: "Visual exploration of various data structures with animations and examples.",
      topics: ["JavaScript", "Data Structures", "Animation"],
      stars: 189,
      forks: 32
    },
    {
      title: "Sorting Algorithm Comparator",
      description: "Compare different sorting algorithms with real-time visualization.",
      topics: ["Algorithms", "Visualization", "React"],
      stars: 156,
      forks: 28
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
          <Code2 className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}