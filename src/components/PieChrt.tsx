import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { PieChart } from "react-minimal-pie-chart";
import { Box } from "@mui/material";
const PieChrt = () => {
  type correctType = {
    correct: any;
  };
  type incorrectType = {
    incorrect: any;
  };
  const correctData = useSelector((state: correctType) => {
    return state.correct;
  });
  const inCorrectData = useSelector((state: incorrectType) => {
    return state.incorrect;
  });
  const percentageOfCorrect = () => {
    let answer = (correctData / 5) * 100;
    console.log(answer);
  };
  const percentageOfIncorrect = () => {
    let wrong = (inCorrectData / 5) * 1000;
    console.log(wrong);
  };
  useEffect(() => {}, [
    percentageOfIncorrect,
    percentageOfCorrect,
    correctData,
    inCorrectData,
  ]);
  return (
    <div>
      <h1>PieChart</h1>
      <div
        style={{
          width: "50%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PieChart
          radius={20}
          paddingAngle={10}
          labelStyle={{
            fontSize: "2px",
            fill: "#000",
          }}
          label={(props) => {
            return `${props.dataEntry.title} ${Math.round(
              props.dataEntry.percentage
            )}%`;
          }}
          labelPosition={30}
          lineWidth={20}
          data={[
            {
              color: "#E38627",
              title: "Correct",
              //   title: correctData.length > 0 ? "Correct" : "",
              value: correctData.length,
            },
            {
              color: "#C13C37",
              title: "Incorrect",
              //   title: inCorrectData.length > 0 ? "Incorrect" : "",
              value: inCorrectData.length,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default PieChrt;
