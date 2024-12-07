export function Hero() {
  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Welcome to our DSA learning platform, where simplicity meets proficiency.
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          We've meticulously curated a collection of questions and solutions, carefully filtered to alleviate learning pressure and prevent confusion.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-colors">
            Go to Sheets
          </button>
          <button className="px-6 py-3 rounded-md border border-gray-300 hover:border-gray-400 transition-colors">
            About Us
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2128&ixlib=rb-4.0.3"
          alt="Student studying"
          className="w-[400px] h-[300px] object-cover rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}