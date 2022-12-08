import React, { useState } from "react";

interface Askprops {
  trigger: Boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  quizes: Object;
  // children?: React.ReactNode;
  // changePhone: Function;
}

export default function AnsPopUp({ trigger, quizes, setTrigger }: Askprops) {
  // const [cancel, setCancel] = useState(false);

  return trigger ? (
    <div className="bg-[#464d81] mt-24 h-[492px] w-[1024px] ">
      <nav className="top py-6 px-10  text-center w-full">
        <h1 className="text-center text-xl">Score &nbsp;{0}</h1>
      </nav>
      <hr />
      <div className="flex px-10 justify-between py-4 items-center"></div>
      <div className="question px-10 text-2xl ">
        <h1 className="text-slate-300  font-semibold">
          <b className="font-bold text-red-200"> Q : </b>
          {quizes?.Quiz_Ques?.text}
        </h1>
      </div>

      <div className="answer px-10 pt-5 text-2xl font-medium">
        <h1 className="text-slate-200">
          <b className="text-red-200"> Ans : </b>
          {quizes.Quiz_Ans.text}
        </h1>
      </div>

      <div className="answer px-10 py-5 text-2xl ">
        <h1 className="text-slate-200">
          <b className="text-red-200"> Explain : </b>
          {quizes.Solution.text}
        </h1>
      </div>
    </div>
  ) : null;
}

// <section className="flex bg-gray-900 w-full bg-opacity-20 justify-center items-center h-screen text-black">
// <div className="bg-white w-3/5 p-8 h-fit relative">
//   <button
//     className="text-4xl bg-white cursor-pointer pr-7 absolute right-8 mb-8"
//     onClick={() => setTrigger(false)}
//   >
//     {" "}
//     &#215;
//   </button>
//   <h1 className="text-lg tracking-wide">
//     <b>Q: </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     Necessitatibus magni dolorum ea voluptate? Dolorum aspernatur quidem
//     praesentium quas, et, magni sint ducimus temporibus quibusdam
//     expedita similique? Praesentium commodi minus exercitationem.
//   </h1>
//   <p className="text-xl mt-8 max-h-96 overflow-auto tracking-wide">
//     <b>Ans: </b> Lorem ipsum dolor sit amet, consectetur adipisicing
//     elit. Illum voluptate et nostrum porro eligendi perspiciatis, quae
//     at, architecto tenetur est, dolorem odit rem eum a tempora eius
//     minima odio laborum. Lorem ipsum dolor sit amet consectetur,
//     adipisicing elit. Nulla libero quos vitae porro at odit architecto
//     sint mollitia vel esse. Alias molestias magnam hic optio assumenda
//     uptatibus aperiam id dolor
//   </p>
// </div>
// </section>
