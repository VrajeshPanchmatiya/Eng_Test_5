import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { QuestionStore } from "./redux/QuestionStore";
const store = createStore(QuestionStore);
test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
