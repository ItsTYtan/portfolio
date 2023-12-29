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
                    <ProjectHeader name="[Ba]king [Br]ead" repoLink="https://github.com/AY2324S1-CS2103T-F10-3/tp" docsLink="https://ay2324s1-cs2103t-f10-3.github.io/tp/" />
                    
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
                    <br/>
                    
                    <div className="mx-auto px-20">
                        <Image className="mx-auto" src={BASE_PATH+ '/bakingbreadUi.png'} alt='/bakingbreadUi.png' width={450} height={450} />
                    </div>

                    <p className="text-center italic color-gray-300">picture of the UI</p>
                </ProjectCard>
                <ProjectCard name='"Instagram" for Investors'>
                    <ProjectHeader name="&quot;Instagram&quot; for Investors" repoLink="https://github.com/prawnzyy/Orbital2023" docsLink="/orbital_readme.pdf" />
                    <p className="my-2">
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

                    <div className="flex gap-8 items-end justify-center">
                        <div>
                            <Image src={BASE_PATH + "/orbital_poster.png"} alt="" width={350} height={350}/>
                            <p className="text-center italic color-gray-300">picture of our project poster</p>
                        </div>
                        <div>
                            <div className="flex gap-8">
                                <Image src={BASE_PATH + "/orbital_Ui_1.png"} alt="" width={200} height={0}/>
                                <Image src={BASE_PATH + "/orbital_Ui_2.png"} alt="" width={200} height={0}/>  
                            </div>
                            <p className="text-center italic color-gray-300 mt-2">UI of the application</p>
                        </div>
                    </div>

                    
                </ProjectCard>
                <ProjectCard name='Satellite Trajectory Simululator'>
                    <ProjectHeader 
                    name="Satellite Trajectory Simulator" 
                    repoLink="https://github.com/ItsTYtan/6DOF-Satellite-propagator" 
                    />
                    <p className="my-2">
                        A 6 degree of freedom satellite simulator accounting for simple aerodynamics and orbital motion.
                    </p>
                    <p className="my-2">
                        Satellite was modelled as a series of planes to simplify aerodynamic forces acting on the satellite. The moment of inertia of the satellite was
                        approximated by considering the planes as point weights. The Runge-Kutta-Fehlberg method was used to propagate the satellite through space and time.
                    </p>

                    <p className="my-2">
                        Different designs of satellites were tried and each one analysed for its stability. Additional factors affecting aerodynamics such as movable solar panels were also 
                        considered.
                    </p>

                    <p className="my-2">
                        A numerical analysis tool similar to Matlab, called &quot;Scilab&quot;, was used to implement the physics into code to simulate the trajectory of 
                        the satellite
                    </p>

                    <div className="flex w-full align-center gap-2">
                        <p className="font-semibold my-auto">Framework used:</p>
                        <Image src={BASE_PATH + "/scilab_logo.jpg"} alt="" width={80} height={80} />                                                         
                    </div>
                    <br/>

                    <div className="flex flex-row justify-center gap-8 mt-auto">
                        <Image className="ml-4" src={BASE_PATH + "/satellite_propagator_diagram.png"} alt="" width={400} height={400} />
                        <div>
                            <video width="400" src={BASE_PATH + "/satellite_video.mp4"} autoPlay loop>
                                <source src={BASE_PATH + "/satellite_video.mp4"} type="video/mp4" /> 
                            </video>
                            <p className="text-center italic color-gray-300 mt-2">actual simulation of a satellite with the &quot;shuttlecock&quot; confiuguration</p>
                        </div>

                    </div>

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
            <div className="absolute bg-white w-1/2 h-[90vh] top-1/2 left-1/2 origin-top-left -translate-x-1/2 -translate-y-1/2 rounded-xl p-8">
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
        <div className="flex w-full align-center gap-8">
            <h1 className="text-3xl font-semibold mb-2">{name}</h1>
            <Link className="flex ml-auto align-center gap-2" href={repoLink} target='_blank'>
                <i className="devicon-github-original colored my-auto text-3xl"></i>
                <p className="my-auto">Github repository</p>
            </Link>
            {docsLink && 
            <>
                <Link className="flex align-center gap-1" href={docsLink} target='_blank'>
                    <Image className="my-auto" src={BASE_PATH + "/documentation_icon.png"} alt="" width={32} height={32} />
                    <p className="my-auto">Documentation</p>
                </Link>
            </>}
        </div>
        </>
    )
}