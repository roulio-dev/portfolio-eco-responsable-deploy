import styles from './app.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                {/* L'image est chargée nativement avec lazy loading */}
                <img
                    src="/photo-profil.jpg"
                    alt="Portrait de développeur éco-responsable"
                    className={styles.profileImg}
                    width={150}
                    height={150}
                    loading="lazy"
                />
                <h1 className={styles.title}>Jules Andries</h1>
                <p className={styles.tagline}>Développeur Next.js Eco-concepteur</p>
            </header>

            <section className={styles.section}>
                <h2>À propos</h2>
                <p>
                    Développeur engagé, je conçois des sites web statiques et performants.
                    Mon objectif : réduire l'empreinte carbone du web tout en maximisant
                    l'expérience utilisateur.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Compétences Green IT</h2>
                <ul className={styles.skillsList}>
                    <li>Next.js & React</li>
                    <li>Optimisation Webperf</li>
                    <li>Hébergement Statique (SSG)</li>
                    <li>Accessibilité (a11y)</li>
                </ul>
            </section>

            <footer className={styles.footer}>
                <p>
                    🌱 Site éco-conçu | Hébergé sans serveur |
                    <a href="https://www.ecoindex.fr/" target="_blank" rel="noopener noreferrer"> Testé EcoIndex</a>
                </p>
            </footer>
        </main>
    );
}