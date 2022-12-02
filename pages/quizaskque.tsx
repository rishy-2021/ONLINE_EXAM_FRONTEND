import React, { useState } from "react";
import { useRouter } from "next/router";
import { checkIsManualRevalidate } from "next/dist/server/api-utils";
import axios from "axios";

function Quizaskque() {
  const router = useRouter();
  const [checked, setchecked] = useState(false);
  const [iscompchecked, setcompchecked] = useState(false);

  const user = {};

  const [question, setQuestion] = useState();
  const [optionA, setOptionA] = useState();
  const [optionB, setOptionB] = useState();
  const [optionC, setOptionC] = useState();
  const [optionD, setOptionD] = useState();
  const [answerText, setAnswerText] = useState();
  const [answerImage, setAnswerImage] = useState();
  const [solution, setSolution] = useState();
  const [Ques_Image, setQues_Image] = useState();
  const [O1_Image, setO1_Image] = useState();
  const [O2_Image, setO2_Image] = useState();
  const [O3_Image, setO3_Image] = useState();
  const [O4_Image, setO4_Image] = useState();
  const [compImage, setCompImage] = useState();
  const [solnImage, setSolnImage] = useState();

  const [examType1, setExamType1] = useState();
  const [examType2, setExamType2] = useState();

  const [exam, setExam] = useState();

  const [year, setYear] = useState();

  function myAnswerText() {
    var ans = document.getElementById("mySelectText").value;
    setAnswerText(ans);
  }
  function myAnswerImage() {
    var ans = document.getElementById("mySelectImage").value;
    setAnswerImage(ans);
  }
  function myExam() {
    var type = document.getElementById("myExam").value;
    setExam(type);
  }

  const handleQImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setQues_Image(reader.result);
    };
  };
  const handleO1Image = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setO1_Image(reader.result);
    };
  };
  const handleO2Image = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setO2_Image(reader.result);
    };
  };

  const handleO3Image = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setO3_Image(reader.result);
    };
  };

  const handleO4Image = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setO4_Image(reader.result);
    };
  };

  const handlecompImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setCompImage(reader.result);
    };
  };

  const handlesolnImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setSolnImage(reader.result);
    };
  };

  function addTempQuiz() {
    axios
      .post("http://localhost:3001/quiz/addTempQuiz", {
        user: user,
        question: question,
        Ques_Image: Ques_Image,
        answerText: answerText,
        answerImage: answerImage,
        optionT: [optionA, optionB, optionC, optionD],
        optionI: { O1_Image, O2_Image, O3_Image, O4_Image },
        solution: solution,
        solnImage: solnImage,
        year: year,
        exam: exam,
        c_image: compImage,
        s_image: solnImage,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="quizbg text-white  h-screen">
      <div className="flex justify-center items-center">
        <div className="bg-gray-800 mt-28  h-4/5 w-4/5 md:w-3/5">
          <div className="question px-10 text-2xl py-8 relative">
            <h1 className="mb-3">
              <span className=" text-50-slate font-semibold">
                Enter Your Question :
              </span>
            </h1>
            <div className="mb-4 flex gap-14">
              <label>
                <input
                  type="checkbox"
                  className=""
                  onClick={() => setchecked(!checked)}
                />
                <span className="text-base ml-2 ">
                  Diagram or Graph Question?
                </span>
              </label>
              <div className="flex gap-4">
                <label htmlFor="" className="text-lg ">
                  Year:
                  <input
                    type="text"
                    placeholder="Year"
                    className="w-12 bg-transparent ml-2"
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  />
                </label>

                <label htmlFor="" className=" text-sm mt-1">
                  In Exam:
                  <select
                    placeholder="Year"
                    className="w-32 bg-transparent ml-2"
                    id="myExam"
                    onChange={myExam}
                  >
                    <option selected>Select Exam</option>
                    <option value={examType1}>JEE MAINS</option>
                    <option value={examType2}>JEE ADVANCE</option>
                  </select>
                </label>
              </div>
            </div>
            <textarea
              name=""
              id=""
              required
              className={` ${
                checked ? "hidden" : ""
              } w-[100%] p-2 border-2 bg-transparent focus:border-gray-400 focus:outline-none border-slate-600 rounded-lg text-lg`}
              cols={10}
              rows={3}
              placeholder="I see great value in using collaborative tools to make my work
                            more effective and efficient."
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            ></textarea>
            <input
              type="file"
              className={` ${
                checked ? "" : "hidden"
              } rounded-lg file:rounded-lg  text-sm mt-1`}
              onChange={handleQImage}
            />
          </div>
          <div className="option px-10">
            <ul className="flex flex-col gap-y-4">
              <li className="flex ">
                <p className="mt-1">Option A : </p>
                <input
                  type="text"
                  className={` ${
                    checked ? "hidden" : ""
                  } w-[40%] ml-6  border py-1 bg-transparent rounded px-2 border-gray-50`}
                  onChange={(e) => {
                    setOptionA(e.target.value);
                  }}
                />
                <input
                  type="file"
                  className={` ${
                    checked ? "" : "hidden"
                  } rounded-lg file:rounded-lg  text-xs ml-12 `}
                  onChange={handleO1Image}
                />
              </li>
              <li className="flex ">
                <p className="mt-1">Option B : </p>
                <input
                  type="text"
                  className={` ${
                    checked ? "hidden" : ""
                  } w-[40%] ml-6  border py-1 bg-transparent rounded px-2 border-gray-50`}
                  onChange={(e) => {
                    setOptionB(e.target.value);
                  }}
                />
                <input
                  type="file"
                  className={` ${
                    checked ? "" : "hidden"
                  } rounded-lg file:rounded-lg  text-xs ml-12 `}
                  onChange={handleO2Image}
                />
              </li>
              <li className="flex ">
                <p className="mt-1">Option C : </p>
                <input
                  type="text"
                  className={` ${
                    checked ? "hidden" : ""
                  } w-[40%] ml-6  border py-1 bg-transparent rounded px-2 border-gray-50`}
                  onChange={(e) => {
                    setOptionC(e.target.value);
                  }}
                />
                <input
                  type="file"
                  className={` ${
                    checked ? "" : "hidden"
                  } rounded-lg file:rounded-lg  text-xs ml-12 `}
                  onChange={handleO3Image}
                />
              </li>
              <li className="flex ">
                <p className="mt-1">Option D : </p>
                <input
                  type="text"
                  className={` ${
                    checked ? "hidden" : ""
                  } w-[40%] ml-6  border py-1 bg-transparent rounded px-2 border-gray-50`}
                  onChange={(e) => {
                    setOptionD(e.target.value);
                  }}
                />
                <input
                  type="file"
                  className={` ${
                    checked ? "" : "hidden"
                  } rounded-lg file:rounded-lg  text-xs ml-12 `}
                  onChange={handleO4Image}
                />
              </li>

              <li className={` ${checked ? "hidden" : ""} flex mt-6`}>
                <p className="text-lg text-green-500">Your Answer:</p>
                <select
                  className="ml-4 bg-transparent border-2 rounded-lg  "
                  id="mySelectText"
                  onChange={myAnswerText}
                >
                  <option selected>Select Answer</option>
                  <option value={optionA}>A</option>
                  <option value={optionB}>B</option>
                  <option value={optionC}>C</option>
                  <option value={optionD}>D</option>
                </select>
              </li>
              <li className={` ${checked ? "" : "hidden"} flex mt-6`}>
                <p className="text-lg text-green-500">Your Answer:</p>
                <select
                  className="
                    
                    ml-4 bg-transparent border-2 rounded-lg  "
                  id="mySelectImage"
                  onChange={myAnswerImage}
                >
                  <option selected>Select Answer</option>
                  <option value={O1_Image}>A</option>
                  <option value={O2_Image}>B</option>
                  <option value={O3_Image}>C</option>
                  <option value={O4_Image}>D</option>
                </select>
              </li>
              <div className="p-2 border border-gray-400 rounded-lg">
                <li className="flex ">
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      onClick={() => setcompchecked(!iscompchecked)}
                    />
                    <span className="ml-2">Is Competitve Exam Question?</span>
                  </label>
                </li>

                <li className={` ${iscompchecked ? "" : "hidden"} mt-2`}>
                  <label htmlFor="">
                    Verification For Competitive Exam Question(Import Image):{" "}
                    <input
                      type="file"
                      className="file:rounded-lg file:text-sm ml-2"
                      onChange={handlecompImage}
                    />
                  </label>
                </li>
              </div>
              <li>
                <p>Give Solution Below: </p>
                <textarea
                  name=""
                  id=""
                  className="w-[100%] p-2 border-2 bg-transparent focus:border-gray-400 focus:outline-none border-slate-600 rounded-lg text-lg"
                  cols={10}
                  rows={3}
                  placeholder="I see great value in using collaborative tools to make my work
                            more effective and efficient."
                  onChange={(e) => {
                    setSolution(e.target.value);
                  }}
                ></textarea>

                <label htmlFor="" className="flex flex-col mt-4">
                  If Answer contain any Diagram or Graph ( Any other image will
                  result in Disapproval of Your Question!)
                  <input
                    type="file"
                    className="rounded-lg file:rounded-lg  text-sm mt-1"
                    onChange={handlesolnImage}
                  />
                </label>
              </li>
            </ul>
          </div>

          <div className="navigate flex justify-end  -mt-4 py-5 px-10">
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white text-base leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => {
                addTempQuiz();
                router.push("/request");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizaskque;
