import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Quizaskque from '../components/quizaskque'
import Quiz from '../components/quiz'
import Quizpopup from './Quizpopup'


const Home: NextPage = () => {
  return (
    <div >
    {/* <Quiz/>
    <Quizaskque/> */}
    <Quizpopup/>
    </div>
  )
}

export default Home
