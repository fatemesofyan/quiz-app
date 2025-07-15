import { Link } from "react-router";

export default function StartQuiz() {
  return (
    <div className="flex justify-center items-center px-4 py-8 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <div className="bg-[#9334ea] rounded-xl w-full min-h-[530px] flex flex-col justify-center items-center p-6">
        <h2 className="text-[#f0e854] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 sm:mb-16">Quiz</h2>
        <p className="text-white text-lg sm:text-xl md:text-2xl text-center">Welcome to Quiz App</p>
        <div className="mt-16 sm:mt-24 flex flex-col justify-center items-center">
          <p className="animate-pulse text-white text-xl sm:text-2xl md:text-3xl pb-4">Get Started</p>
          <Link to="/start">
            <button className="cursor-pointer text-3xl hover:-rotate-45 transition-transform duration-300">
              🚀
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}