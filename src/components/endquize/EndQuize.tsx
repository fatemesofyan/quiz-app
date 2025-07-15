import { MdOutlineRestartAlt } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";


export default function EndQuize() {
  const location = useLocation();
  const navigate = useNavigate();

  // Receive test information from`location.state`
  const { score, total } = location.state || { score: 0, total: 1 };
  const percentage = Math.round((score / total) * 100); 

  let message = "";
  let imageSrc = "src/assets/svg/good.svg"; 

  if (percentage < 40) {
    message = "BAD ";
    imageSrc = "src/assets/svg/bad.svg"; 
  } else if (percentage < 70) {
    message = "GOOD ";
    imageSrc = "src/assets/svg/good.svg"; 
  } else {
    message = "GREAT ";
    imageSrc = "src/assets/svg/great.svg"; 
  }

  return (
    <div className="flex justify-center items-center ml-64 mr-64 mt-8 mb-8">
      <div className="bg-[#9334ea] rounded-xl w-full min-h-[530px] flex flex-col justify-center items-center">
        <h2 className="animate-pulse text-[#f0e854] text-7xl font-bold">
          Quiz
        </h2>
        <div className="pt-8 flex flex-col justify-center items-center">
          <img
            src={imageSrc}
            alt={message}
            className="bg-white rounded-full w-28 h-28"
          />
          <p className="text-white pt-4 text-2xl">{message}</p>
        </div>
        <p className="text-white pt-20 text-2xl font-bold">
          YOUR SCORE = {percentage}%
        </p>
        <div className="mt-16 flex flex-col justify-center items-center">
          <button
            onClick={() => navigate("/")}
            className=" text-white text-2xl pb-4 flex flex-row gap-2"
          >
            Again
            <span className="cursor-pointer text-4xl text-red-700 hover:-rotate-45 hover:text-red-500">
              <MdOutlineRestartAlt />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
