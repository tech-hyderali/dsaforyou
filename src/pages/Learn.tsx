import { BookOpen, BookOpenCheck, GraduationCap } from 'lucide-react';

interface TopicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function TopicCard({ title, description, icon }: TopicCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gray-100 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
        Start Learning
      </button>
    </div>
  );
}

export function Learn() {
  const topics = [
    {
      title: "Data Structures",
      description: "Master fundamental data structures like arrays, linked lists, trees, and graphs.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Algorithms",
      description: "Learn essential algorithms and problem-solving techniques.",
      icon: <BookOpenCheck className="w-6 h-6" />
    },
    {
      title: "Advanced Topics",
      description: "Dive deep into advanced DSA concepts and optimization techniques.",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Learning Path</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topics.map((topic, index) => (
          <TopicCard key={index} {...topic} />
        ))}
      </div>
    </main>
  );
}