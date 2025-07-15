import { MdOutlineRestartAlt } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";


export default function EndQuize() {
  const location = useLocation();
  const navigate = useNavigate();

  // Receive test information from`location.state`
  const { score, total } = location.state || { score: 0, total: 1 };
  const percentage = Math.round((score / total) * 100); 

  let message = "";
  let imageSrc = "assets/svg/good.svg"; 

  if (percentage < 40) {
    message = "BAD ";
    imageSrc = "assets/svg/bad.svg"; 
  } else if (percentage < 70) {
    message = "GOOD ";
    imageSrc = "assets/svg/good.svg"; 
  } else {
    message = "GREAT ";
    imageSrc = "assets/svg/great.svg"; 
  }

 return (
  <div className="flex justify-center items-center px-4 py-8 sm:px-8 md:px-16 lg:px-32 xl:px-64">
    <div className="bg-[#9334ea] rounded-xl w-full min-h-[530px] flex flex-col justify-center items-center p-6">
      <h2 className="animate-pulse text-[#f0e854] text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
        Quiz
      </h2>

      <div className="pt-6 sm:pt-8 flex flex-col justify-center items-center">
        <img
          src={imageSrc}
          alt={message}
          className="bg-white rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
        />
        <p className="text-white pt-4 text-lg sm:text-xl md:text-2xl text-center">
          {message}
        </p>
      </div>

      <p className="text-white pt-10 sm:pt-16 text-lg sm:text-xl md:text-2xl font-bold text-center">
        YOUR SCORE = {percentage}%
      </p>

      <div className="mt-10 sm:mt-16 flex flex-col justify-center items-center">
        <button
          onClick={() => navigate("/")}
          className="text-white text-lg sm:text-xl md:text-2xl pb-4 flex flex-row gap-2 items-center"
        >
          Again
          <span className="cursor-pointer text-3xl sm:text-4xl text-red-700 hover:-rotate-45 hover:text-red-500 transition-transform duration-300">
            <MdOutlineRestartAlt />
          </span>
        </button>
      </div>
    </div>
  </div>
);

}
