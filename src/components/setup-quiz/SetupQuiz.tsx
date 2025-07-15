import { useContext, useEffect, useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Quizecontext } from "../../context/Context";
import { ICategory } from "../../interface/types";
import { getCategory, getQuize } from "../../apis/get";
import { difficultyOptions } from "../../constants";


export default function SetupQuiz() {
  const [category, setCategory] = useState<ICategory[]>([]);
  const [validation, setValidation] = useState<string | boolean>(false);
  const { setQuizelist } = useContext(Quizecontext);
  const navigate = useNavigate();

  useEffect(() => {
    getCategory().then((res) => {
      setCategory(res);
    });
  }, []);

  const quizeFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const count = Number(form.count.value);
    const selectedCategory = form.category.value;
    const difficulty = form.difficulty.value;

    if (!count || count < 5 || count > 50) {
      setValidation("Please enter a number between 5 and 50.");
      return;
    }

    setValidation(false);

    getQuize({
      count,
      category: selectedCategory,
      difficulty,
    })
      .then((res) => {
        setQuizelist(res);
        navigate("/quize");
      })
      .catch((error) => {
        console.error("Error fetching quiz:", error);
      });
  };

 return (
  <div className="flex justify-center items-center px-4 py-8 sm:px-8 md:px-16 lg:px-32 xl:px-64">
    <div className="bg-[#9334ea] rounded-xl w-full min-h-[530px] flex flex-col justify-center items-center p-6">
      <h2 className="animate-pulse text-[#f0e854] text-4xl sm:text-5xl md:text-6xl font-bold text-center">
        Quiz
      </h2>

      <p className="text-white font-bold text-xl sm:text-2xl mb-5 mt-12 text-center">
        Setup Quiz
      </p>

      <div className="w-full max-w-md flex flex-col justify-center items-center">
        <form
          className="w-full flex flex-col space-y-4"
          onSubmit={quizeFormHandler}
        >
          <div>
            <label className="text-xs font-bold text-white block mb-1">
              Number Of Questions
            </label>
            <input
              className="bg-[#f1ea5d] border outline-none font-bold text-xs px-3 h-10 rounded-md w-full placeholder:text-[#9334ea]"
              placeholder="Specify the number of questions"
              type="number"
              name="count"
            />
            {validation && (
              <p className="text-red-600 text-sm mt-1">{validation}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-bold text-white block mb-1">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="outline-none text-[#9334ea] bg-[#f1ea5d] h-10 rounded-md w-full px-2"
            >
              {category.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-white block mb-1">
              Difficulty
            </label>
            <select
              name="difficulty"
              id="difficulty"
              className="outline-none text-[#9334ea] bg-[#f1ea5d] h-10 rounded-md w-full px-2"
            >
              {difficultyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col justify-center items-center mt-6">
            <p className="text-white text-2xl sm:text-3xl pb-2">Start</p>
            <button className="cursor-pointer text-red-700 text-3xl hover:text-red-500 animate-bounce mt-2">
              <FaPowerOff />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

}
