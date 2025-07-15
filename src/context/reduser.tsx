import { IQuiz, IQuizState } from "../interface/types";

  
  type QuizAction =
  | { type: "SET_QUESTIONS"; payload: IQuiz[] }
  | { type: "NEXT_QUESTION" }
  | { type: "SAVE_ANSWER"; payload: { isCorrect: boolean } };

  
  export const quizReducer = (state: IQuizState, action: QuizAction): IQuizState => {
    switch (action.type) {
      case "SET_QUESTIONS":
        return { ...state, questions: action.payload };
  
      case "NEXT_QUESTION":
        return {
          ...state,
          currentIndex: state.currentIndex + 1,
        };
  
      case "SAVE_ANSWER":
        return {
          ...state,
          correctAnswers: action.payload.isCorrect
            ? state.correctAnswers + 1
            : state.correctAnswers,
        };
  
      default:
        return state;
    }
  };