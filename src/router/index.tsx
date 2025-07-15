import { Route, Routes } from "react-router";
import EndQuize from "../components/endquize/EndQuize";
import QuizPage from "../components/quizPage/QuizPage";
import SetupQuiz from "../components/setup-quiz/SetupQuiz";
import StartQuiz from "../components/startquize/StartQuiz";


const RoutingSystm = () => {
  return (
    <Routes>
      <Route path="/" element={<StartQuiz />} />
      <Route path="start" element={<SetupQuiz />} />
      <Route path="quize" element={<QuizPage />} />
      <Route path="end" element={<EndQuize />} />
    </Routes>
  );
};
export default RoutingSystm;

