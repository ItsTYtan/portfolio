import Image from 'next/image'
import TopBar from './topbar'
import { Nav } from './constants'

export default function Home() {
  return (
    <main className=''>
      <TopBar currentNav={Nav.AboutMe}/>
      <h2>About me</h2>
      <h1>Tan Tze Young</h1>
      <Image src='vercel.svg' width={120} height={120} alt='next.svg' />
      <p>Hi, I am a y2 computer science student studying at the National University of Singapore</p>
      <p>I am passionate about designing software and applications that are performant</p>
    </main>
  )
}
