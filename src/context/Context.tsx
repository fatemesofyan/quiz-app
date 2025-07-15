import { createContext, useState } from "react";
import { IProps, IQuiz } from "../interface/types";

export const Quizecontext = createContext<any>(null);

export const QuizProvider = ({ children }: IProps) => {
  const [quizelist, setQuizelist] = useState<IQuiz[]>([]);

  return (
    <Quizecontext.Provider value={{ quizelist, setQuizelist }}>
      {children}
    </Quizecontext.Provider>
  );
};
