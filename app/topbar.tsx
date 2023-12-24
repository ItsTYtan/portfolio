'use client'

import styles from '@/app/home.module.css';
import { Nav } from '@/app/constants';
import Link from 'next/link';

export default function TopBar({ currentNav } : { currentNav : Nav }) {

    function ButtonStyle(currentNav : Nav, nextNav: Nav) {
        if (currentNav === nextNav) {
            return styles.topBarButtonSelected;
        } else {
            return styles.topBarButton;
        }
    }

    return (
        <section className="flex justify-end align-center h-12 pr-16">
            <Link
                className={ButtonStyle(currentNav, Nav.AboutMe)}
                href='/'
            >
                About me
            </Link>
            <Link 
                className={ButtonStyle(currentNav, Nav.Internships)}
                href='/internships'
            >
                Internships
            </Link>
            <Link 
                className={ButtonStyle(currentNav, Nav.SideProjects)}
                href='/sideprojects'
            >
                Side projects
            </Link>
        </section>
    )
}