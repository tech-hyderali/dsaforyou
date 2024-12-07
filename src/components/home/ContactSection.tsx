export function ContactSection() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-6">
          Can't find the answer you're looking for? Please chat to our friendly team.
        </p>
        <button className="px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-colors">
          Get in touch
        </button>
      </div>
      <div className="mt-12 text-gray-500">
        <p>Designed and Developed by Shaik Hyder Ali</p>
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  );
}