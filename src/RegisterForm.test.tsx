import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import RegisterForm from "./components/RegisterForm";
import { QuestionStore } from "./redux/QuestionStore";

const store = createStore(QuestionStore);
test("Register Form Component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    </Provider>
  );
  const h1Element = screen.getByText("Detail Form");
  expect(h1Element).toBeInTheDocument();
  const btn = screen.getByTestId("btn");
  expect(btn).toBeInTheDocument();
  const input = screen.getByTestId("NameInput");
  expect(input).toBeInTheDocument();
});
