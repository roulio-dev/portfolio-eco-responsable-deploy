import styles from "./app.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            {/* --- HEADER --- */}
            <header className={styles.header}>
                <img
                    src="/photo-profil.jpg"
                    alt="Photo de profil"
                    className={styles.profileImg}
                    width={150}
                    height={150}
                    loading="lazy"
                />
                <h1 className={styles.title}>Jules Andries</h1>
                <p className={styles.tagline}>Développeur SAP en Alternance</p>
                <p className={styles.location}>📍 Ruitz, France</p>
                <a href={"https://www.canva.com/design/DAGUAgFvURo/J9L_rsbQgYLOuRxHGOUS9w/view?utm_content=DAGUAgFvURo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h162a2d4b96"}><button className={styles.CVBtn}>
                    Voir mon CV
                </button></a>
            </header>

            {/* --- À PROPOS --- */}
            <section className={styles.section}>
                <h2>À propos</h2>
                <p>
                    Actuellement en alternance chez CGI en tant que développeur SAP, je poursuis mon BUT Informatique à l'IUT de Lens.
                    <br /><br />
                    📞 <em>07 68 10 62 09</em>
                    <br />
                    ✉️ <em>jules.andries62@gmail.com</em>
                </p>
            </section>

            {/* --- EXPÉRIENCES --- */}
            <section className={styles.section}>
                <h2>Expériences</h2>
                <div className={styles.timeline}>

                    {/* Nouvelle expérience CGI (En cours) */}
                    <div className={styles.timelineItem}>
                        <span className={styles.date}>Nov 2025 - Aujourd'hui</span>
                        <h3>Développeur SAP (Alternance)</h3>
                        <p className={styles.company}>CGI - Arras</p>
                        <p>
                            Développement et maintenance corrective/évolutive sur les environnements SAP.
                            Montée en compétences sur le langage ABAP et les processus métiers.
                        </p>
                    </div>

                    {/* Expérience WAIGEO */}
                    <div className={styles.timelineItem}>
                        <span className={styles.date}>2025 (8 semaines)</span>
                        <h3>Stagiaire Développeur Fullstack</h3>
                        <p className={styles.company}>WAIGEO - Bruay-la-Buissière</p>
                        <p>
                            Participation au développement de l'application "Ma Ville Connectée" (Symfony, Node.js).
                            Amélioration des systèmes de réservation et de gestion.
                        </p>
                    </div>

                    {/* Expérience EASYS */}
                    <div className={styles.timelineItem}>
                        <span className={styles.date}>2023 - 2025</span>
                        <h3>Intérimaire - Manœuvre</h3>
                        <p className={styles.company}>EASYS - Déplacements nationaux</p>
                        <p>
                            Travaux d'étanchéité et sécurisation de systèmes d'extinction à gaz.
                            Mobilité nationale (Paris, Reims, etc.) et travail en équipe.
                        </p>
                    </div>

                    {/* Expérience Dupont Restauration */}
                    <div className={styles.timelineItem}>
                        <span className={styles.date}>2024</span>
                        <h3>Écailler (Espace VIP)</h3>
                        <p className={styles.company}>Dupont Restauration (Stade Bollaert-Delelis)</p>
                        <p>
                            Préparation et ouverture d'huitres pour les espaces VIP les jours de match. Mise en place du stand, respect des normes d’hygiène, service client haut de gamme.
                        </p>
                    </div>

                </div>
            </section>

            {/* --- FORMATIONS --- */}
            <section className={styles.section}>
                <h2>Formation</h2>
                <div className={styles.timelineItem}>
                    <span className={styles.date}>2023 - 2026 (En cours)</span>
                    <h3>B.U.T Informatique</h3>
                    <p>IUT de Lens - 3ème année</p>
                </div>
                <div className={styles.timelineItem}>
                    <span className={styles.date}>2020 - 2023</span>
                    <h3>Baccalauréat Général</h3>
                    <p>Lycée Carnot, Bruay (Spécialités Maths & Informatique)</p>
                </div>
            </section>

            {/* --- GRILLE : COMPÉTENCES & LANGUES --- */}
            <div className={styles.gridTwoColumns}>

                <section className={styles.section}>
                    <h2>Compétences Techniques</h2>
                    <ul className={styles.pillList}>
                        <li>SAP / ABAP</li>
                        <li>PHP / Laravel / Symfony</li>
                        <li>JavaScript / React / VueJS</li>
                        <li>Java / JavaFX</li>
                        <li>Python</li>
                        <li>Docker / Git / GitLab</li>
                        <li>MySQL / MongoDB</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Langues & Qualités</h2>
                    <ul className={styles.languageList}>
                        <li>
                            <strong>Français</strong>
                            <span>Langue maternelle</span>
                        </li>
                        <li>
                            <strong>Anglais</strong>
                            <span>Professionnel</span>
                        </li>
                    </ul>
                    <div style={{marginTop: '15px'}}>
                        <h3>Qualités</h3>
                        <ul className={styles.pillList}>
                            <li>Curieux</li>
                            <li>Déterminé</li>
                            <li>Polyvalent</li>
                        </ul>
                    </div>
                </section>
            </div>

            {/* --- PASSIONS --- */}
            <section className={styles.section}>
                <h2>Passions</h2>
                <div className={styles.interestsRow}>

                    <div className={styles.interestItem}>
                        <span className={styles.interestIcon}>🏃‍</span>
                        <span>Course à pied</span>
                    </div>

                    <div className={styles.interestItem}>
                        <span className={styles.interestIcon}>🎣</span>
                        <span>Pêche & Nature</span>
                    </div>

                    <div className={styles.interestItem}>
                        <span className={styles.interestIcon}>🏐</span>
                        <span>Volley-ball</span>
                    </div>

                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className={styles.footer}>
                <p>
                     2026 - Mon portfolio eco-responsable |
                    <a href="mailto:jules.andries62@gmail.com"> Me contacter par mail</a>
                </p>
            </footer>
        </main>
    );
}