import React from "react";

function Quiz() {
  return (
    <>
      <div className="quizbg text-white h-screen bg-gray-900">
        <div className="flex justify-center items-center">
          <div className="bg-gray-800 mt-24 h-4/5 w-4/5 lg:w-3/5 pb-10">
            <nav className="top flex h-20 px-10 justify-between items-center">
              <ul className="px-10 text-lg text-gray-200">
                <li>logo</li>
              </ul>
              <ul className="w-52">
                <li className="py-1">Total test: 20% completed</li>
                <div
                  className="bg-green-500 h-1"
                  style={{ width: "20%" }}
                ></div>
              </ul>
            </nav>
            <div className="flex px-10 justify-between h-20 items-center">
              <h1 className="uppercase text-gray-300">6 answers left</h1>
              <h1 className="uppercase text-gray-300">Time remaning</h1>
            </div>
            <div className="question px-10 text-2xl py-5">
            <h1>
                            <span className=' text-50-slate font-semibold'>Ques:</span> I see great value in using collaborative tools to make my work
                            more effective and efficient.
                        </h1>
            </div>
            <div className="option px-10">
              <ul className="flex flex-col gap-y-2">
                <li className="border py-3 rounded px-2 border-gray-500 ">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="w-3 h-3 rounded" />
                    <span className="ml-2">Never</span>
                  </label>
                </li>
                <li className="border py-3 rounded px-2 border-gray-500 ">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="w-3 h-3 rounded" />
                    <span className="ml-2">Sometime</span>
                  </label>
                </li>
                <li className="border-2 py-3 rounded px-2 border-gray-500">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="w-3 h-3 rounded" />
                    <span className="ml-2">Always</span>
                  </label>
                </li>
                <li className="border-2 py-3 rounded px-2 border-green-500">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="w-3 h-3 rounded" />
                    <span className="ml-2">Ask</span>
                  </label>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
