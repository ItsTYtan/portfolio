'use client'

import styles from '@/app/topbar.module.css';
import { Nav } from '@/app/constants';
import Link from 'next/link';

export default function TopBar({ 
    currentNav
}:{
    currentNav: Nav
}) {

    function ButtonStyle(currentNav : Nav, nextNav: Nav) {
        if (currentNav === nextNav) {
            return styles.topBarButtonSelected;
        } else {
            return styles.topBarButton;
        }
    }

    return (
        <nav className="pt-2 sm:pl-16 w-full flex align-center h-16 pr-16 gap-2">
            <Link
                className={ButtonStyle(currentNav, Nav.Home)}
                href='/'
            >
                <p className='text-center'>Home</p>
            </Link>
            <Link 
                className={ButtonStyle(currentNav, Nav.Experience)}
                href='/experience'
            >
                <p className='text-center'>Experience</p>
            </Link>
            <Link 
                className={ButtonStyle(currentNav, Nav.Projects)}
                href='/projects'
            >
                <p className='text-center'>Projects</p>
            </Link>
        </nav>
    )
}