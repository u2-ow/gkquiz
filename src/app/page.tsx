import LevelButton from '@/components/LevelButton'
import Styles from '@/styles/page.module.scss'

import { Paytone_One } from 'next/font/google'
const payone = Paytone_One({
  subsets: ['latin'],
  weight: '400'
})


export default function Home() {
  return (
    <>
    <main className={Styles.mainArea}>
      <h1 className={Styles.mainAreaTitle}>gkquizz<span className={Styles.mainAreaTitleSub}>一般常識クイズ</span></h1>
      <p className={Styles.mainAreaText}>クイズに答えて一般常識を身につけよう!</p>
      <LevelButton className='beginnerBtn levelBtn'>国語</LevelButton>
      <LevelButton className='intermediateBtn levelBtn'>地理</LevelButton>
      <LevelButton className='advancedBtn levelBtn'>政治</LevelButton>
    </main>

    </>
  )
}
