import { Link } from "react-router";

export default function StartQuiz() {
  return (
    <div className="flex justify-center items-center ml-64 mr-64 mt-8 mb-8">
      <div className="bg-[#9334ea] rounded-xl w-full min-h-[530px] flex flex-col  justify-center items-center ">
        <h2 className="text-[#f0e854] text-7xl font-bold mb-20">Quiz</h2>
        <p className="text-white pt-20 text-2xl">welcome to Quiz App</p>
        <div className="mt-28 flex flex-col justify-center items-center">
          <p className="animate-pulse text-white text-3xl pb-8">Get start</p>
          <button className="cursor-pointer text-3xl hover:-rotate-45 pb-8">
            <Link to="/start">🚀</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
