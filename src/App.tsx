import "./App.css";
import {QuizProvider } from "./context/Context";
import RoutingSystm from "./router";



function App() {

  return (
    <QuizProvider>
      <RoutingSystm />
    </QuizProvider>
  );

}

export default App;
