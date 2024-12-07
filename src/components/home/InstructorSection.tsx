interface InstructorCardProps {
  name: string;
  about: string;
  imageUrl: string;
  socialLinks: string[];
}

function InstructorCard({ name, about, imageUrl, socialLinks }: InstructorCardProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img 
        src={imageUrl}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 text-center mt-2">{about}</p>
      <div className="flex gap-2 mt-4">
        {socialLinks.map((_, index) => (
          <div key={index} className="w-6 h-6 rounded border border-gray-300" />
        ))}
      </div>
    </div>
  );
}

export function InstructorSection() {
  const instructors = [
    {
      name: "John Doe",
      about: "DSA Expert & Senior Software Engineer",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      socialLinks: ['', '', '', '']
    },
    {
      name: "Jane Smith",
      about: "Algorithm Specialist & Tech Lead",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      socialLinks: ['', '', '', '']
    },
    {
      name: "Mike Johnson",
      about: "Competitive Programming Coach",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      socialLinks: ['', '', '', '']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Meet Our Instructors</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} {...instructor} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-3 rounded-md border border-gray-300 hover:border-gray-400 transition-colors">
          Be a mentor
        </button>
      </div>
    </div>
  );
}