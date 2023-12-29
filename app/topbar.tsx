'use client'

import styles from '@/app/home.module.css';
import { Nav } from '@/app/constants';
import Link from 'next/link';
import { useState } from 'react';

export default function TopBar() {

    const [currentNav, setCurrentNav] = useState(Nav.Home);


    function ButtonStyle(currentNav : Nav, nextNav: Nav) {
        if (currentNav === nextNav) {
            return styles.topBarButtonSelected;
        } else {
            return styles.topBarButton;
        }
    }

    return (
        <section className="pt-2 pl-16 w-full flex align-center h-[5vh] pr-16 gap-2">
            <Link
                className={ButtonStyle(currentNav, Nav.Home)}
                onClick={() => setCurrentNav(Nav.Home)}
                href='/'
            >
                <p className='text-center'>Home</p>
            </Link>
            <Link 
                className={ButtonStyle(currentNav, Nav.Experience)}
                onClick={() => setCurrentNav(Nav.Experience)}
                href='/experience'
            >
                <p className='text-center'>Experience</p>
            </Link>
            <Link 
                className={ButtonStyle(currentNav, Nav.Projects)}
                onClick={() => setCurrentNav(Nav.Projects)}
                href='/projects'
            >
                <p className='text-center'>Projects</p>
            </Link>
        </section>
    )
}