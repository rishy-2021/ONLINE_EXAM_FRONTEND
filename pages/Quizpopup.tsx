import React from "react";
import { useRouter } from "next/router";
function Quizpopup() {
  const router = useRouter();
  return (
    <main className="noscroll z-30 fixed inset-0 w-full flex justify-center items-center">
      <section className="flex bg-gray-900 w-full bg-opacity-20 justify-center items-center h-screen text-black">
        {/* 
      <input type="text"  className='' placeholder='Year' />
      <input type="text"  className='' placeholder='Exam' /> */}
        <button
          className="bg-blue-700 p-3 rounded-lg text-white"
          onClick={() => router.push("/quiz")}
        >
          Start Quiz
        </button>
        <button
          className="bg-blue-700 p-3 rounded-lg ml-6 text-white"
          onClick={() => router.push("/quizaskque")}
        >
          Post Question
        </button>
      </section>
    </main>
  );
}

export default Quizpopup;
