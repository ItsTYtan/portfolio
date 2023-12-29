import Image from 'next/image'
import { BASE_PATH } from './constants'

export default function Home() {
  return (
    <main className='flex flex-col w-full h-full'>
      <div className='flex gap-48 justify-center align-center min-h-full'>
        <div className='my-auto'>
          <p>Hello</p>
          <h1 className='text-6xl font-semibold'>I&apos;m <span>Tze Young</span></h1>
          <p className='mt-4'>Year 2 Computer Science Student</p>
        </div>
        <Image className='my-auto' src={BASE_PATH + "/avatar.png"} width={400} height={400} alt='/avatar.png' />
      </div>
    </main>
  )
}
