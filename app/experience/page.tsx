"use client"

import { useRef, useState } from "react";
import Image from "next/image";

export default function page() {

    return(
        <main className='w-full h-full flex flex-col'>
            <h1 className="mt-12 w-1/2 text-3xl font-semibold mx-auto mb-8">Work experience</h1>
            <ol className="relative border-s border-blue-200 dark:border-gray-700 mx-auto w-1/2 h-auto">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2023</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Teaching Assistant</h3>
                    <Company imgPath="https://itstytan.github.io/portfolio/nus_logo.jpg" name='National University of Singapore' />
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Worked as a teaching assistant for the NUS School of Computing summer courses. Facilitated project work discussions and taught algorithmic thinking</p>
                    {/* <ShowMoreButton>
                        <div>
                            <Image src='/SWS.png' alt='/SWS.png' width={700} height={0} />
                        </div>
                        <p className="text-center mx-auto text-gray-500 italic">some photos taken during the summer course</p>
                    </ShowMoreButton> */}
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2022 - Apr 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Research Assistant</h3>
                    <Company imgPath="portfolio/dso_logo.jpg" name='DSO National Laboratories' />
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Designed a Satellite trajectory simulator for very low earth orbit, taking into account aerodynamics of the spacecraft.</p>
                    {/* <ShowMoreButton>
                        <p>
                            The satellite trajectory simulator was programmed in a language similar to Fontran, using an open source numerical computation package platform called Scilab.
                        </p>
                        <video className="mx-auto" width="600" src="/satellite_video_1.mp4" autoPlay loop>
                            <source src="/satellite_video_1.mp4" type="video/mp4" /> 
                        </video>
                        <p className="text-center mx-auto text-gray-500 italic">video of a simulation done during the internship</p> 
                    </ShowMoreButton> */}
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2019 - Mar 2019</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Research Assistant</h3>
                    <Company imgPath="/portfolio/dso_logo.jpg" name='DSO National Laboratories' />
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Modified an artificial intelligence nerual network to detect mutated chromosomes.</p>
                </li>
            </ol>
            <h1 className="mt-12 w-1/2 text-3xl font-semibold mx-auto mb-8">Education</h1>
            <ol className="relative border-s border-blue-200 dark:border-gray-700 mx-auto w-1/2 h-auto">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022 - 2026</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">National University of Singapore</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Bachelor Of Computing In Computer Science</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017 - 2019</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Anglo-Chinese Junior College</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">GCE A Levels</p>
                </li>
            </ol>
        </main>
    )
}

function Company({imgPath, name} : {imgPath: string, name: string}) {
    return(
        <div className="flex gap-4 align-center">
            <Image src={imgPath} alt={imgPath} height={64} width={64}/>
            <h4 className="font-semibold text-sky-400 my-auto">{name}</h4>
        </div>
    )
}

function ShowMoreButton({
    children
}: {
    children: React.ReactNode
}) {
    const [collapsed, setCollapse] = useState(true);

    const contentRef = useRef(null);

    function handleClick() {
        setCollapse(!collapsed);
    }

    function calcHeight() {
        if (contentRef.current === null) {
            return "0px";
        } else {
            return contentRef.current['style']['height'];
        }
    }

    return (
        <div className="w-full">
            <div ref={contentRef} className={`${!collapsed ? `h-[32rem]` : "h-0 invisible"} transition-height duration-200 ease-in-out overflow:hidden`}>
                {children}
            </div>
            <button 
                onClick={handleClick} 
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
                {collapsed ? "Show more": "Show less"} 
                <svg className={`w-3 h-3 ms-2 rtl:rotate-180 ${collapsed ? 'rotate-90' : '-rotate-90'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
        </div>
    )
}
