import Image from 'next/image'
import { BASE_PATH } from './constants'
import Link from 'next/link'
import TopBar from './topbar'
import { Nav } from '@/app/constants';

export default function Home() {
  return (
    <main className='w-full'>
      <TopBar currentNav={Nav.Home} />
      <div className='relative flex flex-wrap gap-48 justify-center align-center h-[95vh]'>
        <div className='my-auto'>
          <p>Hello</p>
          <h1 className='text-6xl font-semibold'>I&apos;m Tze Young</h1>
          <p className='my-4'>Year 2 Computer Science student</p>
          <Link className="flex gap-2 pl-2 rounded-md hover:bg-gray-300 hover:text-blue-500" href="https://github.com/ItsTYtan" target='_blank'>                
            <i className="devicon-github-original colored my-auto text-3xl"></i>
            <p className="my-auto">Github</p>
          </Link>
          <Link className="flex gap-2 pl-2 rounded-md hover:bg-gray-300 hover:text-blue-500" href="https://www.linkedin.com/in/tantzeyoung/" target='_blank'>                
            <i className="devicon-linkedin-plain colored my-auto text-3xl"></i>
            <p className="my-auto">Linkedin</p>
          </Link>
        </div>
        <Image className='my-auto' src={BASE_PATH + "/avatar.png"} width={400} height={400} alt='/avatar.png' />
        <div className='absolute bottom-0 left-[50%] -translate-x-1/2'>
          <p className=''>Scroll down!</p>
          <i className="block fa fa-angle-down text-6xl text-center animate-bounce" aria-hidden="true"></i>
        </div>
      </div>
      <div className='h-auto bg-gray-700 px-[25%]'>
        <h1 className='py-4 text-4xl font-bold text-center text-white'>About me</h1>
        <p className='py-4 text-white mx-auto'>
          Hi! I am Tze Young, a year 2 computer science student studying at the National University of Singapore. I am passionate about designing 
          software applications that are both performant and aesthetically pleasing.
        </p>

        <p className='py-4 text-white mx-auto'>
          In my free time, I enjoy playing badminton and video games. I also like to read up on investment and how businesses work. 
        </p>
        
        <div className="flex flex-wrap w-full align-center gap-2 mx-auto my-4">
            <p className="font-semibold my-auto text-white">Programming languages I know:</p>
            <i className="devicon-html5-plain-wordmark colored text-6xl my-auto"></i> 
            <i className="devicon-css3-plain-wordmark colored text-6xl my-auto"></i>   
            <i className="devicon-javascript-plain colored text-6xl my-auto"></i>                                                         
            <i className="devicon-typescript-plain colored text-6xl my-auto"></i>     
            <i className="devicon-java-plain-wordmark colored text-6xl my-auto"></i>                              
        </div>

        <div className="flex flex-wrap w-full align-center gap-2 mx-auto my-4">
            <p className="font-semibold my-auto text-white">Frameworks or tools I can use:</p>                                                        
            <i className="devicon-react-original-wordmark colored text-6xl my-auto"></i>  
            <i className="devicon-nextjs-original-wordmark text-6xl my-auto"></i>
            <i className="devicon-nodejs-plain-wordmark text-6xl my-auto"></i>
            <i className="devicon-tailwindcss-plain colored text-6xl my-auto"></i>
            <img width="48px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            <i className="devicon-flutter-plain colored text-6xl my-auto"></i>
            <i className="devicon-firebase-plain-wordmark colored text-6xl my-auto"></i>
            <i className="devicon-git-plain-wordmark colored text-6xl my-auto"></i>
            <i className="devicon-github-original-wordmark colored text-6xl my-auto"></i>
        </div>

        <a href={BASE_PATH + "/experience"} className="py-4 flex items-center font-medium text-blue-500 dark:text-blue-500 hover:underline">
          Check out my internships!
          <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>

        <a href={ BASE_PATH + "/projects"} className="py-4 flex items-center font-medium text-blue-500 dark:text-blue-500 hover:underline">
          Check out my side projects!
          <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
        <br/>
        <br/>
      </div>
    </main>
  )
}
