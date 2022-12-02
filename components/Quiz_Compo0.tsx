import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnsPopUp from "../pages/AnsPopUp";
function Quiz_Compo() {
  const router = useRouter();
  const [currentques, setcurrentque] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const quizes = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
          options: "A",
        },
        {
          text: "Watches",
          correct: true,
          options: "D",
        },
        {
          text: "Food",
          correct: false,
          options: "C",
        },
        {
          text: "Cosmetic",
          correct: false,
          options: "D",
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
          options: "A",
        },
        {
          text: "2005",
          correct: false,
          options: "B",
        },
        {
          text: "2006",
          correct: false,
          options: "C",
        },
        {
          text: "2007",
          correct: false,
          options: "D",
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          options: "A",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
          options: "B",
        },
        {
          text: "Denzel Washington",
          correct: false,
          options: "C",
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
          options: "D",
        },
      ],
    },
  ];
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
    setSecondsLeft(5);
    const nextques = currentques + 1;
    if (nextques < quizes.length) {
      setcurrentque(nextques);
    } else {
      router.push("/Successfull");
    }
  }
  const [secondsLeft, setSecondsLeft] = useState(10);
  const percentage = Math.round((secondsLeft / 60) * 100);

  useEffect(() => {
    if (secondsLeft < 0) {
      return handleClick();
    }
    const interval = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
      console.log(secondsLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const [anspop, setanspop] = useState(false);
  if (anspop) {
    setSecondsLeft(60);
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className=" bg-green-400 mt-24 h-[496px] w-[100px] cursor-pointer"
          onClick={() => setanspop(true)}
        >
          <p className="-rotate-90 text-4xl mt-44 ">Show Answer</p>
          <AnsPopUp trigger={anspop} setTrigger={setanspop} />
        </div>
        <div className="bg-[#464d81] mt-24 h-4/5 w-4/5 lg:w-3/5 pb-10">
          <nav className="top py-6 px-10  text-center w-full">
            <h1 className="text-center text-xl">Score-12</h1>
          </nav>
          <hr />
          <div className="flex px-10 justify-between h-20 items-center">
            <div>
              <p className="text-gray-300">[Jee Mains 2006]</p>
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
            <h1>{quizes[currentques].question}</h1>
          </div>
          <div className="option px-10">
            <ul className="flex flex-col gap-y-2">
              {quizes[currentques].answers.map((item) => (
                <li
                  className="border-2 py-3 rounded px-2 border-gray-500 cursor-pointer "
                  onClick={() => !selectedAnswer && handleClickAnswer(item)}
                >
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="w-3 h-3 rounded hidden" />
                    <span className="ml-2">
                      <span>{item.options})</span> {item.text}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz_Compo;
