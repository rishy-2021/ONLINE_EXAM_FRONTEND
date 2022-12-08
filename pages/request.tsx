import axios from "axios";

import React, { useEffect, useState } from "react";
import ApprovePopUp from "./PopUps/Approve";
import Competition from "./PopUps/Competition";
import DissaprPopUp from "./PopUps/disapprove";
import Normal from "./PopUps/Normal";

function Request() {
  const [disppr, setdispr] = useState(false);
  const [appr, setapr] = useState(false);
  const [tempQuizs, setTempQuizs] = useState();
  const [categery, setCategery] = useState();

  useEffect(
    function () {
      axios
        .get("https://online-exam-app-bu.onrender.com/quiz/getTempQuizs")
        .then((response) => setTempQuizs(response.data.data))
        .catch((error) => console.log(error));
    },
    [appr, disppr]
  );

  function Get_Categery(data) {
    setCategery(data);
    console.log(data);
  }

  return (
    <>
      <div className="quizbg text-white h-screen ">
        {tempQuizs !== undefined &&
          tempQuizs.map((quiz) => (
            <div className="flex justify-center items-center">
              <div className="bg-gray-800 mt-24 h-4/5 w-4/5 lg:w-3/5 pb-10">
                <div className="flex gap-60 mt-12 ml-12">
                  <div className="flex">
                    <img src="" alt="pic" className="w-12 h-12 rounded-full" />
                    <h1>Email id</h1>
                  </div>
                  <ul className="flex gap-8">
                    {quiz.Year && <li> Year {quiz.Year}</li>}
                    {quiz.Exam && <li> In Exam: {quiz.Exam}</li>}
                    <li>In Exam: Jee Mains</li>
                    <li>Category: CA</li>
                  </ul>
                </div>
                <div className="question px-10 text-2xl pb-5">
                  {quiz?.Quiz_Ques?.text && (
                    <h1>
                      <span className=" text-50-slate font-semibold">
                        Ques:
                      </span>{" "}
                      {quiz?.Quiz_Ques?.text}
                    </h1>
                  )}
                  {quiz?.Quiz_Ques?.image && (
                    <div className="w-full h-56 border-dashed border border-gray-400">
                      <img
                        src={quiz?.Quiz_Ques?.image}
                        alt="quespic"
                        className="w-full h-44 "
                      />
                    </div>
                  )}
                </div>
                <div className="option px-10">
                  <ul className="flex flex-col gap-y-2">
                    {quiz?.Options?.text &&
                      quiz?.Options?.text.map((option, index) => (
                        <li className="border py-3 rounded px-2 border-gray-500 flex ">
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              className="w-3 h-3 rounded hidden"
                            />
                            <span className="ml-2">
                              <span>{index + 1} ) </span> {option}
                            </span>
                          </label>
                        </li>
                      ))}

                    {quiz?.Options?.image &&
                      quiz?.Options?.image.map((option, index) => (
                        <li className="border py-3 rounded px-2 border-gray-500 flex ">
                          <span className="mr-2">A) </span>
                          <div className="w-[50%] h-56 border-dashed border border-gray-400">
                            <img src={option} alt="" className="" />
                          </div>
                        </li>
                      ))}
                  </ul>
                  {quiz?.Quiz_Ans?.text && (
                    <ul>
                      <li className="flex mt-3">
                        <p className="text-lg text-green-500 mr-2 ">
                          {" "}
                          Answer :
                        </p>{" "}
                        {quiz?.Quiz_Ans?.text}
                      </li>
                    </ul>
                  )}
                  {quiz?.Quiz_Ans?.image && (
                    <ul>
                      <li className="flex mt-3">
                        <p className="text-lg text-green-500 mr-2 ">
                          {" "}
                          Answer :
                        </p>{" "}
                        <img
                          src={quiz?.Quiz_Ans?.image}
                          alt=""
                          className="w-[30%] h-36 border-dashed border border-gray-400"
                        />
                      </li>
                    </ul>
                  )}
                </div>

                {quiz?.Vftn_Comp_image && (
                  <div className="p-2 mx-4 mt-2 border border-gray-400 rounded-lg">
                    <h1 className="mb-2">Competitive Exam(Verification)</h1>
                    <div className="w-[50%] h-56 border-dashed border border-gray-400">
                      <img src={quiz?.Vftn_Comp_image} alt="" className="" />
                    </div>
                  </div>
                )}
                {quiz?.Solution && (
                  <div className="p-2 mx-4 mt-2 border border-gray-400 rounded-lg">
                    <h1 className="mb-2">Solution</h1>
                    <span>{quiz?.Solution.text}</span>

                    {quiz.Solution.image && (
                      <div className="w-[50%] h-56 border-dashed border border-gray-400">
                        <img src={quiz.Solution.image} alt="" className="" />
                      </div>
                    )}
                  </div>
                )}

                <div className="relative mt-6 ">
                  <button
                    type="button"
                    className="absolute left-4 top-1 inline-block px-6 py-2.5 bg-blue-600 text-white text-base leading-tight uppercase shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => setdispr(true)}
                  >
                    Disapprove
                  </button>
                  <DissaprPopUp
                    quiz={quiz}
                    trigger={disppr}
                    setTrigger={setdispr}
                  />
                  <button
                    type="button"
                    onClick={() => setapr(true)}
                    className="absolute right-4 top-1 inline-block px-6 py-2.5 bg-blue-600 text-white text-base leading-tight uppercase shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Approve
                  </button>
                  <ApprovePopUp
                    categery={categery}
                    quiz={quiz}
                    trigger={appr}
                    setTrigger={setapr}
                  />
                </div>
                <div className="navigate flex mt-16 justify-end flex-row gap-x-4  py-5 pr-10">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white text-base leading-tight uppercase shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => setapr(true)}
                  >
                    Competitive Exam
                  </button>
                  <Competition
                    func={Get_Categery}
                    trigger={appr}
                    setTrigger={setapr}
                  />
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white text-base leading-tight uppercase shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => setapr(true)}
                  >
                    Normal Quiz
                  </button>
                  <Normal
                    func={Get_Categery}
                    trigger={appr}
                    setTrigger={setapr}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Request;
