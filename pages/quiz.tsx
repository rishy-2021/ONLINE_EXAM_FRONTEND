import React from "react";
import { useRouter } from "next/router";
import Quiz_Compo from "../components/Quiz_Compo";
function Quiz() {
  const router = useRouter();
  return (
    <>
      <div className="quizbg text-white h-screen bg-gray-900 relative">
        <Quiz_Compo />
        <button
          className="bg-red-400 p-2 w-24 text-lg absolute bottom-20 right-44 rounded-lg"
          onClick={() => router.push("/Quizpopup")}
        >
          Quit
        </button>
      </div>
    </>
  );
}

export default Quiz;
