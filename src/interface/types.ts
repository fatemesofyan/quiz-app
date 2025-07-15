export interface IQustion {
  count: string | number;
  category: string;
  difficulty: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export type QuizResult = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export interface IQuiz {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IQuizState {
  questions: IQuiz[];
  currentIndex: number;
  correctAnswers: number;
}

export interface  IProps{
  children:ReactNode
}