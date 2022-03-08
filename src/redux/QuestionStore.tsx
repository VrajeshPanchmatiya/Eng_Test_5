const initialState = {
  list: {},
  selected: [],
  correct: [],
  incorrect: [],
};
export const QuestionStore = (
  state = initialState,
  { type, payload }: { type: any; payload: any }
) => {
  switch (type) {
    case "LANGUAGE":
      return {
        ...state,
        list: payload,
      };
    case "Selected":
      return {
        ...state,
        selected: state.selected.concat(payload),
      };
    case "CORRECT":
      return {
        ...state,
        correct: state.correct.concat(payload),
      };
    case "INCORRECT":
      return {
        ...state,
        incorrect: state.incorrect.concat(payload),
      };
    default:
      return state;
  }
};
