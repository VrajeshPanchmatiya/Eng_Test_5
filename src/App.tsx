import "./App.css";
import RegisterForm from "./components/RegisterForm";
import { Route, Routes } from "react-router";
import QuestionHome from "./components/QuestionHome";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { QuestionStore } from "./redux/QuestionStore";
import PieChrt from "./components/PieChrt";
const store = createStore(QuestionStore);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/questions" element={<QuestionHome />} />
          <Route path="/piechart" element={<PieChrt />} />
        </Routes>
      </Provider>
      {/* <Provider></Provider> */}
    </div>
  );
}

export default App;
