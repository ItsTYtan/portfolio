'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "../constants";

export default function page() {
    return(
        <main className='relative w-full h-full'>
            <h1 className="my-8 text-center">Stuff that I&apos;ve made across my internships, my time in University and in my own free time.</h1>
            <div className='flex flex-row gap-16 justify-center'>
                <ProjectCard name='[Ba]king [Br]ead' >
                    <div className="m-8">
                        <div className="flex w-full align-center gap-8">
                            <h1 className="text-3xl font-semibold mb-2">[Ba]king [Br]ead</h1>
                            <Link className="flex ml-auto align-center gap-2" href="https://github.com/AY2324S1-CS2103T-F10-3/tp" target='_blank'>
                                <i className="devicon-github-original colored my-auto text-3xl"></i>
                                <p className="my-auto">Github repository</p>
                            </Link>
                            <Link className="flex align-center gap-1" href="https://ay2324s1-cs2103t-f10-3.github.io/tp/" target='_blank'>
                                <Image className="my-auto" src={BASE_PATH + "/documentation_icon.png"} alt="" width={32} height={32} />
                                <p className="my-auto">Documentation</p>
                            </Link>
                        </div>
                        
                        <p className="my-2">
                            [Ba]king [Br]ead is a desktop application for managing ingredients and recipes. This project was done with a team of 4 other students, as part of the CS2103 module in NUS.
                        </p>
                        <p className="my-2">My main role in the project was to design the Ui and implement some interactivity to it.</p>
                        <p className="my-2">Extensive documentation was done using Github Flavoured Markdown and UML. Extensive testing was also done using the JUnit library.</p>
                        
                        <div className="flex w-full align-center gap-2">
                            <p className="font-semibold my-auto">Programming languages:</p>                                                        
                            <i className="devicon-java-plain-wordmark colored text-5xl my-auto"></i>                                 
                        </div>

                        <div className="flex w-full align-center gap-2">
                            <p className="font-semibold my-auto">Frameworks and other tools used:</p>                                                                                   
                            <i className="devicon-git-plain-wordmark colored text-5xl my-auto"></i>                            
                            <i className="devicon-github-original-wordmark colored text-3xl my-auto"></i>                                                          
                        </div>
                        
                        <div className="mx-auto px-20">
                            <Image className="mx-auto" src={BASE_PATH+ '/bakingbreadUi.png'} alt='/bakingbreadUi.png' width={500} height={500} />
                        </div>

                        <p className="text-center italic color-gray-300">picture of the UI</p>
                    </div>
                </ProjectCard>
                <ProjectCard name='"Instagram" for Investors'>
                    <p>lol</p>
                </ProjectCard>
                <ProjectCard name='Satellite Trajectory Simululator'>
                    <p>lol</p>
                </ProjectCard>
            </div>
        </main>
    )
}

function ProjectCard({
    name, children
}: {
    name: string, children: React.ReactNode
}) {

    const [showContent, setShowContent] = useState(false);

    return(
        <>
            <button 
                className="w-64 h-80 border-2 border-black rounded-xl"
                onClick={() => setShowContent(true)}
            >
            <div className="h-4/5">
                {/* <Image /> */}
            </div>
            <div className="h-1/5 border-t border-gray-700" >
                <p className="text-center">
                    {name}
                </p>
            </div>
        </button>
        {showContent && 
            <>
            <button 
                className="bg-gray-700 opacity-50 fixed top-1/2 left-1/2 origin-top-left -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] border border-black" 
                onClick={() => setShowContent(false)}
            />
            <div className="absolute bg-white w-1/2 h-[90vh] top-1/2 left-1/2 origin-top-left -translate-x-1/2 -translate-y-1/2 rounded-xl">
                {children}
            </div>
            </>
        }
        </>
    )
}