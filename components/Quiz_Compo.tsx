import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnsPopUp from "../pages/AnsPopUp";
import axios from "axios";
function Quiz_Compo() {
  const router = useRouter();
  const [currentques, setcurrentque] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizes, setQuizes] = useState();
  const [selected, setSelected] = useState();

  const [score, setScore] = useState(0);

  useEffect(function () {
    axios
      .get("http://localhost:3001/quiz/main/getMainQuizs")
      .then((response) => setQuizes(response.data.data))
      .catch((error) => console.log(error));
  }, []);
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClickAnswer = (a) => {
    setSelectedAnswer(a);
    delay(5000, () => {
      if (a.correct) {
        delay(1000, () => {
          handleClick();
          setSelectedAnswer(null);
        });
        // setTimeout(() => {
        //   setQuestionNumber((prev) => prev + 1);
        //   setSelectedAnswer(null);
        // }, 1000);
      } else {
        delay(1000, () => {
          // setTimeOut(true);
        });
        // setTimeout(() => {
        //   setTimeOut(true);
        // }, 1000);
      }
      // }, 5000);
    });
  };
  function handleClick() {
    setSecondsLeft(30);
    //   setSelected();

    const nextques = currentques + 1;
    if (nextques < quizes.length) {
      setSelected();

      setcurrentque(nextques);
    } else {
      router.push("/Successfull");
    }
    // if (currentques > 7) {
    //   router.push("/Successfull");
    // }
  }
  const handleSelect = (option, correct) => {
    if (selected === option && selected === correct) {
      return "border-green-500";
    } else if (selected === option && selected !== correct) {
      return "border-red-500";
    } else if (option === correct) {
      return "border-green-500";
    }
  };
  const handleCheck = (option, correct) => {
    setSelected(option);

    if (option === correct) {
      setSecondsLeft(3);

      setScore(score + 5);
    } else {
      setScore(score - 3);
      setSecondsLeft(5);
    }
  };

  const [secondsLeft, setSecondsLeft] = useState(30);
  const percentage = Math.round((secondsLeft / 30) * 100);

  useEffect(() => {
    if (secondsLeft < 0 && selected) {
      return handleClick();
    } else if (secondsLeft < 0 && !selected) {
      quizes !== undefined && setSelected(quizes[currentques].Quiz_Ans.text);
      setSecondsLeft(5);
    }
    const interval = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
      console.log(secondsLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const [anspop, setanspop] = useState(false);

  const pull_data = (data) => {
    if (data === true) {
      // setanspop(false);
      setSecondsLeft(0);
    }
  };
  return (
    <>
      {quizes !== undefined && (
        <div className="flex justify-center items-center">
          {selected && (
            <div
              className=" bg-green-400 mt-24 h-[496px] w-[100px] cursor-pointer"
              onClick={() => {
                setSecondsLeft(60);
                setanspop(true);
              }}
            >
              <p className="-rotate-90 text-4xl mt-44 ">Show Answer</p>
              <AnsPopUp
                func={pull_data}
                trigger={anspop}
                setTrigger={setanspop}
              />
            </div>
          )}
          <div className="bg-[#464d81] mt-24 h-4/5 w-4/5 lg:w-3/5 pb-10">
            <nav className="top py-6 px-10  text-center w-full">
              <h1 className="text-center text-xl">Score &nbsp;{score}</h1>
            </nav>
            <hr />
            <div className="flex px-10 justify-between h-20 items-center">
              <div>
                <p className="text-gray-300">
                  {quizes[currentques]?.Exam} {quizes[currentques]?.Year}
                </p>
              </div>
              <div className="flex">
                <h1 className="uppercase text-gray-300 text-sm">
                  Time remaning :{" "}
                </h1>
                <div className="rounded-full w-12 h-12 -mt-2 text-center ml-4">
                  {" "}
                  <CircularProgressbar
                    value={percentage}
                    text={secondsLeft}
                    styles={buildStyles({})}
                  />
                </div>
              </div>
            </div>
            <div className="question px-10 text-2xl pt-2 pb-6">
              <h1>{quizes[currentques]?.Quiz_Ques?.text}</h1>
            </div>
            <div className="option px-10">
              <ul className="flex flex-col gap-y-2">
                {quizes[currentques]?.Options?.text.map((item, index) => (
                  <button
                    disabled={selected}
                    key={index}
                    // className="border-2 py-3 rounded px-2 border-gray-500 cursor-pointer "
                    className={`border-2 py-3 rounded px-2 text-left border-gray-500 ${
                      selected &&
                      handleSelect(item, quizes[currentques].Quiz_Ans.text)
                    } `}
                    onClick={() => {
                      handleCheck(item, quizes[currentques].Quiz_Ans.text);

                      !selectedAnswer && handleClickAnswer(item);
                    }}
                  >
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-3 h-3 rounded hidden"
                      />
                      <span className="ml-2">
                        <span>{index + 1}) &nbsp;&nbsp; </span>
                        {item}
                      </span>
                    </label>
                  </button>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz_Compo;