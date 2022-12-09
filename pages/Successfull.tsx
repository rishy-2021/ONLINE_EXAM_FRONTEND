import React from "react";
import { useRouter } from "next/router";

function Successfull() {
  const router = useRouter();
  const query = router?.query;
  const score = query?.score;
  // console.log(query);

  return (
    <div className=" relative text-white h-screen bg-gray-900 text-center align-center">
      <h1 className="text-5xl absolute top-[30%] left-[25%]">
        You have Successfully Completed the Quiz
        <br />
        <br />
        You Scored{" "}
        <span className="text-orange-500 text-6xl font-extrabold	">
          '{score}'
        </span>{" "}
        out of 50
        {score > 20 ? (
          <h1 className="pt-6"> 🥳🥳🥳🥳 </h1>
        ) : (
          <h1 className="pt-6"> 😔😔😔😔 </h1>
        )}
      </h1>
    </div>
  );
}

export default Successfull;
