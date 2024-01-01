'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "../constants";
import { Nav } from '@/app/constants';
import TopBar from "../topbar";

export default function page() {
    return(
        <main className='w-full'>
            <TopBar currentNav={Nav.Projects} />
            <h1 className="p-8 text-center">Stuff that I&apos;ve made across my internships, my time in University and in my own free time.</h1>
            <div className='flex flex-row flex-wrap justify-center gap-16 px-16'>
                <ProjectCard name='[Ba]king [Br]ead' coverImgRef={BASE_PATH + "/bakingbread_cover.jpg"}>
                    <ProjectHeader name="[Ba]king [Br]ead" repoLink="https://github.com/AY2324S1-CS2103T-F10-3/tp" docsLink="https://ay2324s1-cs2103t-f10-3.github.io/tp/" />  
                    <p className="my-2">
                        [Ba]king [Br]ead is a desktop application for managing ingredients and recipes. This project was done with a team of 4 other students, as part of the CS2103 module in NUS.
                    </p>
                    <p className="my-2">My main role in the project was to design the Ui and implement some interactivity to it.</p>
                    <p className="my-2">Extensive documentation was done using Github Flavoured Markdown and UML. Extensive testing was also done using the JUnit library.</p>
                    
                    <div className="flex flex-wrap w-full items-center justify-start gap-2">
                        <p className="font-semibold my-auto">Programming languages:</p>                                                        
                        <i className="devicon-java-plain-wordmark colored text-5xl my-auto"></i>                                 
                    </div>

                    <div className="flex flex-wrap w-full items-center justify-start gap-2">
                        <p className="font-semibold my-auto">Frameworks and other tools used:</p>                                                                                   
                        <i className="devicon-git-plain-wordmark colored text-5xl my-auto"></i>                            
                        <i className="devicon-github-original-wordmark colored text-3xl my-auto"></i>                                                          
                    </div>
                    <br/>
                    
                    <div className="relative w-full px-4 h-full">
                        <Image className="mx-auto" src={BASE_PATH+ '/bakingbreadUi.png'} alt='/bakingbreadUi.png' layout='fill' objectFit='contain'/>
                    </div>
                    <p className="text-center italic color-gray-300">picture of the UI</p>
                </ProjectCard>
                <ProjectCard name='"Instagram" for Investors' coverImgRef={BASE_PATH + "/instagram_for_investors_cover.png"}>
                    <ProjectHeader name="&quot;Instagram&quot; for Investors" repoLink="https://github.com/prawnzyy/Orbital2023" docsLink="/orbital_readme.pdf" />
                    <p className="py-2">
                        A mobile application designed as a platform for investors to discuss their investment ideas and manage their portfolios. This was done
                        as a team of 2, as part of the Orbital programme in NUS.
                    </p>
 
                    <div className="flex w-full align-center gap-2">
                        <p className="font-semibold my-auto">Programming languages:</p>                                                        
                        <i className="devicon-dart-plain-wordmark colored text-6xl my-auto"></i>                                 
                    </div>

                    <div className="flex w-full align-center gap-2">
                        <p className="font-semibold my-auto">Frameworks and other tools used:</p>                                                                                   
                        <i className="devicon-flutter-plain colored text-3xl my-auto"></i>                            
                        <i className="devicon-firebase-plain-wordmark colored text-5xl my-auto"></i>                                                          
                    </div>
                    <br/>

                    <div className="flex grow relative h-0 w-full flex-row gap-x-12 items-end justify-center overflow:hidden">
                        <div className="relative max-h-full grow-[2] aspect-[2245/3179]">
                            <Image className="max-h-full grow-[2] aspect-[2245/3179]" src={BASE_PATH + "/orbital_poster.png"} alt="" layout="fill" objectFit="contain"/>
                        </div>
                        <div className="relative grow aspect-[243/510]">
                            <Image src={BASE_PATH + "/orbital_Ui_1.png"} alt="" layout="fill" objectFit="contain"/>
                        </div>
                        <div className="relative grow aspect-[243/510]">
                            <Image src={BASE_PATH + "/orbital_Ui_2.png"} alt="" layout="fill" objectFit="contain"/>
                        </div>
                    </div>
                    <p className="hidden sm:block py-2 text-center italic color-gray-300">our poster and application UIs</p>
                </ProjectCard>
                <ProjectCard name='Satellite Trajectory Simululator' coverImgRef={BASE_PATH + "/satellite_cover.png"}>
                    <ProjectHeader 
                    name="Satellite Trajectory Simulator" 
                    repoLink="https://github.com/ItsTYtan/6DOF-Satellite-propagator" 
                    />
                    <p className="py-2">
                        A 6 degree of freedom satellite simulator accounting for simple aerodynamics and orbital motion.
                    </p>
                    <p className="py-2">
                        Satellite was modelled as a series of planes to simplify aerodynamic forces acting on the satellite. The moment of inertia of the satellite was
                        approximated by considering the planes as point weights. The Runge-Kutta-Fehlberg method was used to propagate the satellite through space and time.
                    </p>

                    <p className="py-2">
                        Different designs of satellites were tried and each one analysed for its stability. Additional factors affecting aerodynamics such as movable solar panels were also 
                        considered.
                    </p>

                    <p className="py-2">
                        A numerical analysis tool similar to Matlab, called &quot;Scilab&quot;, was used to implement the physics into code to simulate the trajectory of 
                        the satellite
                    </p>

                    <div className="flex w-full items-center gap-2">
                        <p className="font-semibold my-auto">Framework used:</p>
                        <Image src={BASE_PATH + "/scilab_logo.jpg"} alt="" width={80} height={80} />                                                         
                    </div>
                    <br/>

                    <div className="flex flex-row grow h-0 justify-center gap-8 items-end overflow:hidden">
                        <div className="relative w-[400px] grow aspect-[756/705]">
                            <Image src={BASE_PATH + "/satellite_propagator_diagram.png"} alt="" layout="fill" objectFit="contain"/>
                        </div>
                        <div className="h-min">
                            <video className="mx-auto" width="300" src={BASE_PATH + "/satellite_video.mp4"} autoPlay loop>
                                <source src={BASE_PATH + "/satellite_video.mp4"} type="video/mp4" /> 
                            </video>
                            <p className="mx-auto w-full text-center italic color-gray-300">actual simulation of a satellite with the &quot;shuttlecock&quot; confiuguration</p>
                        </div>

                    </div>

                </ProjectCard>
            </div>
        </main>
    )
}

function ProjectCard({
    name, 
    coverImgRef, 
    children
}: {
    name: string,
    coverImgRef: string, 
    children: React.ReactNode
}) {

    const [showContent, setShowContent] = useState(false);

    return(
        <>
            <button 
                className="w-64 h-80 rounded-xl bg-blue-200 shadow-md transition hover:scale-105 hover:shadow-xl"
                onClick={() => setShowContent(true)}
            >
                <div className="h-4/5 overflow-hidden p-4">
                    <Image className="h-full rounded-md border-black border-2 bg-white" src={coverImgRef} alt="" width={288} height={0} />
                </div>
                <div className="h-1/5 border-t border-gray-700 flex align-center justify-center mx-auto" >
                    <p className="text-center font-semibold my-auto text-lg px-2">
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
                <div className="overflow-hidden flex flex-col absolute bg-white w-[95vw] gap-x-96 md:w-2/3 xl:w-1/2 h-[90vh] top-1/2 left-1/2 origin-top-left -translate-x-1/2 -translate-y-1/2 rounded-xl p-8">
                    {children}
                </div>
                </>
            }
        </>
    )
}

function ProjectHeader({ 
    name, 
    repoLink, 
    docsLink 
}:{
    name: string
    repoLink: string
    docsLink?: string
}) {
    return (
        <>
        <div className="flex flex-wrap justify-start w-full gap-x-8">
            <h1 className="text-3xl font-semibold pb-2 mr-auto">{name}</h1>
            <div className="flex flex-row flex-wrap gap-x-8">
                <Link className="flex items-center gap-2 hover:bg-gray-300 rounded-lg" href={repoLink} target='_blank'>
                    <i className="devicon-github-original colored text-3xl"></i>
                    <p>Github repository</p>
                </Link>
                {docsLink && 
                <>
                    <Link className="flex items-center gap-1 hover:bg-gray-300 rounded-lg" href={docsLink} target='_blank'>
                        <Image src={BASE_PATH + "/documentation_icon.png"} alt="" width={32} height={32} />
                        <p>Documentation</p>
                    </Link>
                </>}
            </div>
        </div>
        </>
    )
}