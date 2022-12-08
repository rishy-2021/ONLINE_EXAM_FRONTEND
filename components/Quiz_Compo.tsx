import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnsPopUp from "./AnsPopUp";
import ReactLoading from "react-loading";
import axios from "axios";
function Quiz_Compo() {
  const router = useRouter();
  const [currentques, setcurrentque] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizes, setQuizes] = useState([]);
  const [selected, setSelected] = useState();
  const [con, setCon] = useState(false);
  const [anspop, setanspop] = useState(false);
  const [timer, setTimer] = useState(true);

  const [score, setScore] = useState(0);

  useEffect(function () {
    axios
      .get("https://online-exam-app-bu.onrender.com/quiz/main/getMainQuizs")
      .then((response) => {
        setQuizes(response.data.data);
        setCon(true);
      })
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
    setSecondsLeft(60);

    if (option === correct) {
      setScore(score + 5);
    } else {
      setScore(score - 3);
    }
  };

  const [secondsLeft, setSecondsLeft] = useState(30);
  const percentage = Math.round((secondsLeft / 30) * 100);

  useEffect(() => {
    if (secondsLeft < 0 && selected) {
      return handleClick();
    } else if (secondsLeft < 0 && !selected) {
      con && setSelected(quizes[currentques].Quiz_Ans.text);
      setSecondsLeft(5);
    }
    const interval = setInterval(() => {
      con && timer && setSecondsLeft(secondsLeft - 1);
      console.log(secondsLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, con]);

  const pull_data = (data) => {
    if (data === true) {
      // setanspop(false);
      // setSecondsLeft(0);
    }
  };
  return (
    <>
      {con ? (
        <>
          <div className="flex justify-center items-center">
            {selected && (
              <div
                className=" bg-green-400 mt-24 h-[496px] w-[110px] cursor-pointer "
                onClick={() => {
                  // setSecondsLeft(60);
                  setanspop(!anspop);
                  setTimer(!timer);
                }}
              >
                {anspop ? (
                  <p className="-rotate-90 text-4xl mt-44 font-mono">
                    hide details
                  </p>
                ) : (
                  <p className="-rotate-90 text-4xl mt-44 font-mono">
                    show details
                  </p>
                )}
              </div>
            )}
            {anspop ? (
              <AnsPopUp
                quizes={quizes[currentques]}
                trigger={anspop}
                setTrigger={setanspop}
              />
            ) : (
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
            )}
          </div>
          <button
            className="bg-green-400 text-black font-bold  p-2 px-5 w-37 text-lg absolute bottom-25 right-64 mr-9 mt-2 rounded-lg"
            onClick={() => {
              setcurrentque(currentques + 1);
            }}
          >
            Next Question
          </button>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div>
            <ReactLoading
              type="spinningBubbles"
              color="#0000FF"
              height={165}
              width={150}
            />
            <h1 className=" text-lg italic font-semibold">
              loading Questions.......
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz_Compo;
