import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
const QuestionHome = () => {
  // console.log(questionList);
  //   const [activeStep, setActiveStep] = useState(1);
  const [questionText, setQuestionText] = useState("");
  const [optionText, setOptionText] = useState([]);
  const [value, setValue] = useState("");
  const [quesId, setQuesId] = useState("");
  const dispatch = useDispatch();
  type stateType = {
    list: any;
    selected: any;
  };
  type stateTpe = {
    selected: any;
  };
  const handleChangeOption = (e: any) => {
    setValue(e.target.value);
  };
  const navigate = useNavigate();
  const response = useSelector((state: stateType) => {
    return state.list;
  });
  const res = useSelector((state: stateTpe) => {
    return state.selected;
  });
  const temp = res.map((item: any) => {
    return item.questionId;
  });
  console.log(temp);
  const QuestionButton = (id: number) => {
    const data = {
      question: questionText,
      selectedAnswer: value,
      color: "red",
      questionId: quesId,
    };
    dispatch({ type: "Selected", payload: data });
    const ques = response.Questions.find(
      (questionId: any) => questionId.questionId === id
    );

    setQuestionText(ques.questionText);
    setOptionText(ques.Options_);
    setQuesId(ques.questionId);

    // console.log(ques);
  };
  useEffect(() => {
    if (res?.find((question: any) => question?.question === questionText)) {
      let val = res.find((question: any) => question.question === questionText);
      setValue(val?.selectedAnswer);
      // alert(colr.backgroundColor);
    }
  }, [res, questionText]);
  console.log(res);
  useEffect(() => {
    QuestionButton(1);
  }, []);
  // console.log(response);
  const checkAnswer = () => {
    console.log(res);
    console.log(res.find((questionId: any) => questionId.questionId === 1));
    if (res.find((questionId: any) => questionId.questionId == 1)) {
      if (
        res.find(
          (questionId: any) => questionId.selectedAnswer === "TATA Group"
        ) ||
        res.find(
          (questionId: any) => questionId.selectedAnswer === "टाटा ग्रुप"
        )
      ) {
        dispatch({ type: "CORRECT", payload: "correct" });
      } else {
        dispatch({ type: "INCORRECT", payload: "incorrect" });
      }
    }
    if (res.find((questionId: any) => questionId.questionId == 2)) {
      if (
        res.find(
          (questionId: any) => questionId.selectedAnswer === "Alphabet Inc."
        ) ||
        res.find(
          (questionId: any) => questionId.selectedAnswer === "वर्णमाला इंक"
        )
      ) {
        dispatch({ type: "CORRECT", payload: "correct" });
      } else {
        dispatch({ type: "INCORRECT", payload: "incorrect" });
      }
    }
    if (res.find((questionId: any) => questionId.questionId == 3)) {
      if (
        res.find((questionId: any) => questionId.selectedAnswer === "True") ||
        res.find((questionId: any) => questionId.selectedAnswer === "सत्य")
      ) {
        dispatch({ type: "CORRECT", payload: "correct" });
      } else {
        dispatch({ type: "INCORRECT", payload: "incorrect" });
      }
    }
    if (res.find((questionId: any) => questionId.questionId == 4)) {
      if (
        res.find(
          (questionId: any) =>
            questionId.selectedAnswer === "Action-Dispatcher-Store-View"
        ) ||
        res.find(
          (questionId: any) =>
            questionId.selectedAnswer === "एक्शन-डिस्पैचर-स्टोर-व्यू"
        )
      ) {
        dispatch({ type: "CORRECT", payload: "correct" });
      } else {
        dispatch({ type: "INCORRECT", payload: "incorrect" });
      }
    }
    if (res.find((questionId: any) => questionId.questionId == 5)) {
      if (
        res.find(
          (questionId: any) => questionId.selectedAnswer === "Honesty"
        ) ||
        res.find((questionId: any) => questionId.selectedAnswer === "ईमानदारी")
      ) {
        dispatch({ type: "CORRECT", payload: "correct" });
      } else {
        dispatch({ type: "INCORRECT", payload: "incorrect" });
      }
    }

    navigate("/piechart");
  };
  // const handleClick = (e: any) => {
  //   setValue(e.target.value);
  //   const data = {
  //     question: questionText,
  //     selectedAnswer: e.target.value,
  //     color: "red",
  //     questionId: quesId,
  //   };
  //   dispatch({ type: "Selected", payload: data });
  // };
  return (
    <Box>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => QuestionButton(1)}
          style={{
            backgroundColor: temp.includes(1) ? "grey" : "red",
            margin: "2%",
          }}
        >
          1
        </Button>
        <Button
          variant="contained"
          onClick={() => QuestionButton(2)}
          style={{
            backgroundColor: temp.includes(2) ? "grey" : "red",
            margin: "2%",
          }}
        >
          2
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: temp.includes(3) ? "grey" : "red",
            margin: "2%",
          }}
          onClick={() => QuestionButton(3)}
        >
          3
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: temp.includes(4) ? "grey" : "red",
            margin: "2%",
          }}
          onClick={() => QuestionButton(4)}
        >
          4
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: temp.includes(5) ? "grey" : "red",
            margin: "2%",
          }}
          onClick={() => QuestionButton(5)}
        >
          5
        </Button>
      </Grid>
      <Grid item>
        <Box>
          <Typography>{questionText}</Typography>
          <FormControl>
            <RadioGroup value={value} onChange={handleChangeOption}>
              {optionText.map((option) => {
                return (
                  <div key={option}>
                    <FormControlLabel
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  </div>
                );
              })}
            </RadioGroup>
          </FormControl>
          {quesId == "5" ? (
            <div>
              <Button variant="contained" onClick={checkAnswer}>
                Submit
              </Button>
            </div>
          ) : (
            ""
          )}
        </Box>
      </Grid>
    </Box>
  );
};
export default QuestionHome;
