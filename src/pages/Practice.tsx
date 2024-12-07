import { Brain, Code, Timer } from 'lucide-react';

interface ProblemCardProps {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
}

function ProblemCard({ title, difficulty, topics }: ProblemCardProps) {
  const difficultyColor = {
    Easy: 'text-green-600 bg-green-50',
    Medium: 'text-yellow-600 bg-yellow-50',
    Hard: 'text-red-600 bg-red-50'
  }[difficulty];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-center gap-2 mb-4">
        <span className={`px-2 py-1 rounded-md text-sm font-medium ${difficultyColor}`}>
          {difficulty}
        </span>
        {topics.map((topic, index) => (
          <span key={index} className="px-2 py-1 rounded-md text-sm font-medium text-gray-600 bg-gray-100">
            {topic}
          </span>
        ))}
      </div>
      <button className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
        Solve Problem
      </button>
    </div>
  );
}

export function Practice() {
  const categories = [
    {
      icon: <Brain className="w-6 h-6" />,
      name: "Problem Solving",
      count: 150
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Coding Challenges",
      count: 75
    },
    {
      icon: <Timer className="w-6 h-6" />,
      name: "Time Trials",
      count: 25
    }
  ];

  const problems = [
    {
      title: "Two Sum",
      difficulty: "Easy" as const,
      topics: ["Arrays", "Hash Table"]
    },
    {
      title: "Merge K Sorted Lists",
      difficulty: "Hard" as const,
      topics: ["Linked List", "Heap"]
    },
    {
      title: "Binary Tree Level Order",
      difficulty: "Medium" as const,
      topics: ["Tree", "BFS"]
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                {category.icon}
              </div>
              <div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-gray-600">{category.count} problems</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Featured Problems</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <ProblemCard key={index} {...problem} />
        ))}
      </div>
    </main>
  );
}