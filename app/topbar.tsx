import styles from '@/app/home.module.css'

export default function TopBar() {
    return (
        <section className="flex justify-end align-center h-12">
            <h1 className='mr-auto my-auto ml-4'>Tan Tze Young</h1>
            <button className={styles.topBarButton}>About me</button>
            <button className={styles.topBarButton}>Internships</button>
            <button className={styles.topBarButton}>Side projects</button>
        </section>
    )
}