interface WindowControlsProps {
  className?: string;
}

function WindowControls({ className = '' }: WindowControlsProps) {
  return (
    <div className={`flex gap-1.5 ${className}`}>
      <div className="w-3 h-3 rounded-full bg-yellow-400" />
      <div className="w-3 h-3 rounded-full bg-green-400" />
      <div className="w-3 h-3 rounded-full bg-red-400" />
    </div>
  );
}

export function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative bg-white rounded-lg shadow-lg p-8 mb-12">
        <WindowControls className="absolute top-4 right-4" />
        <h2 className="text-2xl font-bold mb-6">About Us</h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to dsaforyou.com, a dedicated space crafted for learners to master Data Structures and Algorithms (DSA) through a focused approach. We understand that the vastness of DSA can be overwhelming, so we've done the hard work of filtering and refining the content that truly matters.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          At dsaforyou.com, we provide a carefully selected collection of problems and their solutions, designed to cover essential concepts without overloading you with too much information. Our goal is to simplify your learning journey, making DSA accessible to everyone, from beginners to advanced programmers.
        </p>
      </div>

      <div className="flex items-center gap-12">
        <div className="flex-1">
          <div className="relative bg-white rounded-lg shadow-lg p-8">
            <WindowControls className="absolute top-4 right-4" />
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to demystify DSA topics and make them approachable, ensuring learners can progress at their own pace without feeling lost or intimidated. We believe in quality over quantity, which is why each question and solution on our platform is chosen to encourage clear understanding and practical application.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
            alt="Working on solutions"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}