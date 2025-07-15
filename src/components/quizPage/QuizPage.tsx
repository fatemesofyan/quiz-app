
import { useContext, useEffect, useReducer } from "react";
import { Quizecontext } from "../../context/Context";
import { useNavigate } from "react-router";
import { quizReducer } from "../../context/reduser";


const initialState = {
  questions: [],
  currentIndex: 0,
  correctAnswers: 0, 
};



export default function QuizPage() {
  const { quizelist } = useContext(Quizecontext);
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    if (quizelist.length > 0) {
      dispatch({ type:"SET_QUESTIONS", payload: quizelist });
    }
  }, [quizelist]);

// Get the current question
  const currentQuestion = state.questions[state.currentIndex];

  useEffect(() => {
    if (state.currentIndex >= state.questions.length && state.questions.length > 0) {
      navigate("/end", { state: { score: state.correctAnswers, total: state.questions.length } });
    }
  }, [state.currentIndex, state.questions.length, state.correctAnswers, navigate]);

  if (!currentQuestion) {
    return <p className="text-white mt-4">Loading questions....</p>;
  }

  const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(() => Math.random() - 0.5);

  const handleAnswerClick = (option:string) => {
    const isCorrect = option === currentQuestion.correct_answer;
    dispatch({ type:"SAVE_ANSWER", payload: { isCorrect } });
    dispatch({ type: "NEXT_QUESTION" });
  };

return (
  <div className="flex justify-center items-center px-4 py-8 sm:px-8 md:px-16 lg:px-32 xl:px-64">
    <div className="bg-[#9334ea] rounded-xl w-full min-h-[530px] flex flex-col justify-center items-center p-6">
      <h2 className="animate-pulse text-[#f0e854] text-4xl sm:text-5xl md:text-6xl font-bold pt-2 text-center">
        Quiz
      </h2>

      <div className="bg-white flex flex-col justify-center items-center mt-8 rounded-lg p-4 w-full sm:w-11/12 md:w-3/4">
        <h6 className="text-[#a59e22] text-lg sm:text-xl pb-4 text-center">
          {state.currentIndex + 1}- {currentQuestion.question}
        </h6>

        <div className="w-full flex flex-col gap-3 font-bold">
          {options.map((option, i) => (
            <button
              key={i}
              className="bg-[#f1ea5d] text-[#993fee] hover:bg-[#f3f1db] hover:text-[#561e8a] py-2 text-start rounded-lg border cursor-pointer w-full px-4 text-sm sm:text-base md:text-lg"
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}