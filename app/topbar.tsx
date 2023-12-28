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
        <section className="w-full flex justify-end align-center h-12 pr-16">
            <Link
                className={ButtonStyle(currentNav, Nav.Home)}
                onClick={() => setCurrentNav(Nav.Home)}
                href='/'
            >
                Home
            </Link>
            <Link 
                className={ButtonStyle(currentNav, Nav.Experience)}
                onClick={() => setCurrentNav(Nav.Experience)}
                href='/experience'
            >
                Experience
            </Link>
            <Link 
                className={ButtonStyle(currentNav, Nav.Projects)}
                onClick={() => setCurrentNav(Nav.Projects)}
                href='/projects'
            >
                Projects
            </Link>
        </section>
    )
}