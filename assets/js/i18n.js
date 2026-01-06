// ============================================
// SYSTÈME I18N - Portfolio Ventaryss
// ============================================

const translations = {
    fr: {
        // Navigation
        nav_home: 'Accueil',
        nav_about: 'À propos',
        nav_projects: 'Projets',
        nav_certifications: 'Certifications',
        nav_blog: 'Blog',
        nav_contact: 'Contact',
        
        // Hero Section
        hero_title: 'Aubin SABY',
        hero_subtitle: 'Étudiant Ingénieur Cyberdéfense',
        hero_school: 'ESNA Bretagne | COMCYBER',
        hero_btn_projects: 'Voir mes projets',
        hero_btn_contact: 'Me contacter',
        hero_btn_cv: 'Télécharger CV',
        
        // Stats
        stat_years: "Années d'alternance",
        stat_projects: 'Projets majeurs',
        stat_tryhackme: 'TryHackMe',
        stat_hacklantique: 'Hacklantique 2024',
        
        // Skills Section
        skills_title: 'Compétences Clés',
        skills_subtitle: 'Un ensemble de compétences techniques et pratiques acquises au fil de mes expériences en cybersécurité.',
        skill_auditor: 'Auditeur Technique',
        skill_auditor_desc: "Audit de sécurité, tests d'intrusion, analyse de vulnérabilités et conformité",
        skill_admin: 'Admin Système & Réseaux',
        skill_admin_desc: 'Infrastructure, durcissement de systèmes, Nginx, PostgreSQL et sécurisation',
        skill_dev: 'Développement Sécurisé',
        skill_dev_desc: 'Symfony, Python, Docker, API REST et architectures e-learning',
        skill_defense: 'Sécurité Défensive',
        skill_defense_desc: "Analyse de logs, détection d'incidents, forensique et réponse aux menaces",
        skill_devops: 'DevOps & Automatisation',
        skill_devops_desc: "Docker, CI/CD, scripts d'automatisation et gestion d'infrastructures",
        skill_ctf: 'CTF & Compétitions',
        skill_ctf_desc: 'Top 1% TryHackMe, Top 4 Hacklantique, challenges forensique et web',
        
        // About Page
        about_title: 'À propos de moi',
        about_subtitle: 'Étudiant ingénieur cyberdéfense passionné par la sécurité opérationnelle',
        about_background: 'Mon Parcours',
        about_bio1: "Actuellement en 3e et dernière année du cycle d'ingénieur à l'ESNA Bretagne, je travaille comme auditeur en cybersécurité au sein du COMCYBER. Mon parcours en administration systèmes et réseaux me permet d'aborder les problématiques cyber avec méthode, pragmatisme et un vrai souci de la sécurité opérationnelle.",
        about_bio2: "Bien que déjà passionné par la cybersécurité avant cela, la vague d'attaques visant les hôpitaux durant la crise Covid a renforcé ma volonté de m'y consacrer pleinement. J'ai pu constater, de près, les impacts réels de ces incidents sur des structures vitales, ce qui m'a confirmé l'importance de s'engager dans la protection des systèmes critiques.",
        about_bio3: "Je me spécialise aujourd'hui dans l'audit de sécurité, avec l'ambition d'évoluer à moyen terme vers des fonctions de consultant ou de responsable sécurité. Je reste également ouvert aux environnements SOC et aux missions RSSI junior, où je peux continuer à monter en compétences tout en apportant une contribution directe aux équipes.",
        about_tag_auditor: 'Auditeur Cybersécurité',
        about_tag_admin: 'Admin Sys/Réseau',
        about_tag_ctf: 'CTF Player',
        about_tag_dev: 'Développeur',
        
        // Experience
        exp_title: 'Expérience Professionnelle',
        exp_auditor_title: 'Apprenti Auditeur Cybersécurité',
        exp_auditor_date: "Sept 2024 - Aujourd'hui",
        exp_auditor_company: 'Commandement de la cyberdéfense (COMCYBER) | Rennes',
        exp_auditor_task1: '<strong>Formation et Accompagnement :</strong> Conception et déploiement de formations spécialisées pour les nouveaux arrivants et personnels existants',
        exp_auditor_task2: '<strong>Intégration Ludus.cloud et Ansible :</strong> Création d\'une plateforme innovante simulant automatiquement des environnements SI complets',
        exp_auditor_task3: '<strong>Gestion de Projet Docker :</strong> Développement d\'un système de gestion de logs basé sur Docker',
        exp_auditor_task4: '<strong>Audit Technique Interministériel :</strong> Réalisation d\'audits techniques transverses entre différents ministères',
        exp_auditor_task5: '<strong>Innovation Méthodologique :</strong> Participation au développement de nouvelles approches d\'audit',
        exp_admin_title: 'Apprenti Administrateur Systèmes et Réseaux',
        exp_admin_date: 'Sept 2023 - Août 2024',
        exp_admin_company: 'Commandement de la cyberdéfense (COMCYBER) | Rennes',
        exp_admin_task1: '<strong>Sécurité des Infrastructures Réseaux :</strong> Gestion active de la sécurité (pare-feu, VPN, détection d\'intrusion)',
        exp_admin_task2: '<strong>Maintenance et Amélioration Continue :</strong> Optimisation des performances et renforcement de la résilience',
        exp_admin_task3: '<strong>Gestion de Logs et Sécurité :</strong> Mise en place d\'un système innovant avec Docker',
        exp_admin_task4: '<strong>Gestion de Crise et Formation :</strong> Développement de scénarios et programmes de formation',
        exp_admin_task5: '<strong>Projets d\'Amélioration :</strong> Pilotage de projets adaptés aux besoins des différentes infrastructures',
        exp_tech_title: 'Apprenti Technicien Systèmes et Réseaux',
        exp_tech_date: 'Sept 2021 - Août 2023',
        exp_tech_company: 'Commandement de la cyberdéfense (COMCYBER) | Rennes',
        exp_orange_title: 'Apprenti Développeur',
        exp_orange_date: 'Oct 2022 - Sept 2023',
        exp_orange_company: 'Orange Business Services | Cesson-Sévigné',
        exp_orange_task1: '<strong>Développement avec Symfony :</strong> Conception d\'applications robustes utilisées par des centaines de milliers de personnes',
        exp_orange_task2: '<strong>Refonte et Maintenance :</strong> Remise à neuf complète d\'applications avec optimisation des bases de données',
        exp_orange_task3: '<strong>Gestion de Base de Données :</strong> Restructuration et optimisation (performance, sécurité, scalabilité)',
        exp_orange_task4: '<strong>Initiatives Écologiques :</strong> Contribution à la mise en place de baies de serveurs écologiques',
        exp_orange_task5: '<strong>Gestion de Projet :</strong> Collaboration en méthodologies agiles avec suivi efficace',
        exp_interim_title: 'Intérim - Polyvalence',
        exp_interim_date: 'Sept 2021 - Juil 2023',
        exp_interim_company: 'Adecco Intérimaire | Lannion',
        exp_interim_desc: 'Diverses missions : homme à tout faire, serveur, agent d\'entretien, distributeur de tracts, employé de rayon',
        exp_interim_task1: '<strong>Polyvalence et Adaptabilité :</strong> Réalisation de tâches variées et support aux collègues',
        
        // Education
        edu_title: 'Formation',
        edu_engineer_title: 'Ingénieur Cybersécurité',
        edu_engineer_school: 'ESNA de Bretagne',
        edu_engineer_date: 'Sept 2023 - Juil 2026 (Bac+5)',
        edu_engineer_activities: '<strong>Activités :</strong> ESN\'HACK (club CTF)',
        edu_engineer_spec_title: '🔒 Spécialisations :',
        edu_engineer_spec1: 'Cyberdéfense avancée',
        edu_engineer_spec2: 'Test d\'intrusion et ethical hacking',
        edu_engineer_spec3: 'Forensique numérique',
        edu_engineer_spec4: 'Sécurité des réseaux et infrastructures',
        edu_engineer_spec5: 'Protection des bases de données',
        edu_engineer_spec6: 'Sécurisation des systèmes d\'exploitation',
        edu_but_title: 'BUT Informatique',
        edu_but_school: 'IUT Lannion',
        edu_but_date: 'Sept 2021 - Juil 2023',
        edu_but_level: '<strong>Niveau :</strong> Obtention du diplôme BUT Informatique',
        edu_but_spec_title: '📚 Parcours C - Bases de Données :',
        edu_but_spec1: 'Conception et administration de BDD avancées',
        edu_but_spec2: 'Sécurisation des données et des accès',
        edu_but_spec3: 'Big Data et Business Intelligence',
        edu_but_spec4: 'Développement d\'applications orientées données',
        
        // Languages
        lang_title: 'Langues & Certifications linguistiques',
        lang_english: 'Anglais',
        lang_english_level: 'Compétence professionnelle',
        lang_english_cert: 'Linguaskill C1',
        lang_english_date: 'Juin 2025',
        lang_german: 'Allemand',
        lang_german_level: 'Notions',
        lang_french: 'Français',
        lang_french_level: 'Langue maternelle',
        
        // Projects Page
        projects_title: 'Mes Projets',
        projects_subtitle: 'Plateformes e-learning, projets R&D et développements en cybersécurité',
        projects_featured: 'Projets Principaux',
        projects_other: 'Autres Projets',
        projects_filter_all: 'Tous',
        projects_filter_cyber: 'Cybersécurité',
        projects_filter_dev: 'Développement',
        projects_filter_infra: 'Infrastructure',
        projects_view: 'Voir le projet',
        projects_view_details: 'Voir les détails',
        projects_internal: 'Projet interne CASSI',
        projects_personal: 'Projet personnel',
        projects_coming_soon: 'Bientôt disponible',
        projects_github: 'Activité GitHub',
        projects_github_desc: 'Retrouvez tous mes projets open source sur GitHub',
        projects_github_btn: 'Voir mon profil GitHub',
        projects_status_prod: 'Production',
        projects_status_dev: 'En développement',
        projects_confidential: 'Projet confidentiel ESNA',
        projects_opensource: 'Open Source',
        
        // Project descriptions
        proj_avalon_subtitle: 'Atelier Virtuel d\'Apprentissage et de Laboratoires Opérationnels Numériques',
        proj_avalon_desc: 'Plateforme e-learning complète avec système de modules, QCM, travaux pratiques, CTF et suivi de progression. Développée pour former les auditeurs techniques du CASSI de Rennes aux techniques offensives et défensives.',
        proj_citadel_subtitle: 'Centre Interactif de Travaux et d\'Apprentissage Dirigé En Ligne',
        proj_citadel_desc: 'Plateforme de formation cybersécurité et CTF accessible à tous. Fork d\'AVALON adapté pour le grand public avec focus sur les challenges, competitions et apprentissage progressif.',
        proj_ephos_core_subtitle: 'Enterprise Platform for Holistic Operations & Security',
        proj_ephos_core_desc: 'Plateforme ERP complète pour la gestion d\'entreprise : CRM, gestion de projets, module d\'audit cybersécurité, finance, facturation, 29 intégrations et assistant IA ZENITH. Architecture modulaire avec 11 bounded contexts.',
        proj_ephos_audit_subtitle: 'Solution spécialisée pour l\'audit de cybersécurité',
        proj_ephos_audit_desc: 'Fork d\'EPHOS Core optimisé pour les cabinets d\'audit et consultants en cybersécurité. Focus exclusif sur la gestion d\'audits avec référentiels personnalisables et génération de rapports PDF professionnels.',
        proj_ddf_desc: 'Projet ESNA de 2 ans : système de détection et contre-mesures anti-drones inspiré du Dôme de Fer israélien. Détection, tracking et neutralisation automatique.',
        proj_hermes_desc: 'Plateforme complète de monitoring et observabilité. Supervision temps réel de l\'infrastructure IT avec Grafana, Prometheus, Loki et InfluxDB.',
        
        // Certifications Page
        certs_title: 'Certifications Cybersécurité',
        certs_subtitle: 'Parcours de formation continue en cybersécurité offensive et défensive',
        certs_objectives: 'Objectifs de Certifications',
        certs_obtained: 'Obtenues',
        certs_progress: 'En cours',
        certs_planned: 'Planifiées',
        
        // Blog Page
        blog_title: 'Blog',
        blog_subtitle: 'Articles, tutoriels et réflexions sur la cybersécurité, le développement et les CTF',
        blog_read_more: 'Lire la suite',
        blog_filter_all: 'Tous les articles',
        blog_filter_writeup: 'WriteUps',
        blog_filter_article: 'Articles Cyber',
        blog_filter_cert: 'Certifications',
        
        // Contact Page
        contact_title: 'Contact',
        contact_subtitle: 'N\'hésitez pas à me contacter pour toute question ou opportunité',
        contact_info_title: 'Informations de Contact',
        contact_email: 'Email',
        contact_location: 'Localisation',
        contact_location_value: 'Bruz, Bretagne',
        contact_availability: 'Disponibilité',
        contact_availability_status: 'En recherche d\'opportunités post-diplôme',
        contact_availability_desc: 'Actuellement en dernière année d\'ingénieur (diplôme juillet 2026), je recherche activement un poste dans les domaines suivants :',
        contact_form_title: 'Envoyez-moi un message',
        contact_form_name: 'Nom',
        contact_form_email: 'Email',
        contact_form_subject: 'Sujet',
        contact_form_message: 'Message',
        contact_form_send: 'Envoyer le message',
        contact_social: 'Réseaux sociaux',
        contact_role_soc: 'Analyste SOC',
        contact_role_auditor: 'Auditeur Cyber',
        contact_role_consultant: 'Consultant',
        contact_role_freelance: 'Freelance',
        contact_role_collab: 'Collaboration',
        contact_role_ctf: 'CTF Teams',
        
        // Footer
        footer_rights: 'Tous droits réservés.',
        
        // Common
        loading: 'Chargement...',
        error: 'Erreur',
        success: 'Succès',
        close: 'Fermer',
        view_more: 'Voir plus',
        back: 'Retour'
    },
    
    en: {
        // Navigation
        nav_home: 'Home',
        nav_about: 'About',
        nav_projects: 'Projects',
        nav_certifications: 'Certifications',
        nav_blog: 'Blog',
        nav_contact: 'Contact',
        
        // Hero Section
        hero_title: 'Aubin SABY',
        hero_subtitle: 'Cyberdefense Engineering Student',
        hero_school: 'ESNA Brittany | COMCYBER',
        hero_btn_projects: 'View my projects',
        hero_btn_contact: 'Contact me',
        hero_btn_cv: 'Download CV',
        
        // Stats
        stat_years: 'Years of apprenticeship',
        stat_projects: 'Major projects',
        stat_tryhackme: 'TryHackMe',
        stat_hacklantique: 'Hacklantique 2024',
        
        // Skills Section
        skills_title: 'Key Skills',
        skills_subtitle: 'A set of technical and practical skills acquired through my cybersecurity experiences.',
        skill_auditor: 'Technical Auditor',
        skill_auditor_desc: 'Security auditing, penetration testing, vulnerability analysis and compliance',
        skill_admin: 'System & Network Admin',
        skill_admin_desc: 'Infrastructure, system hardening, Nginx, PostgreSQL and security',
        skill_dev: 'Secure Development',
        skill_dev_desc: 'Symfony, Python, Docker, REST API and e-learning architectures',
        skill_defense: 'Defensive Security',
        skill_defense_desc: 'Log analysis, incident detection, forensics and threat response',
        skill_devops: 'DevOps & Automation',
        skill_devops_desc: 'Docker, CI/CD, automation scripts and infrastructure management',
        skill_ctf: 'CTF & Competitions',
        skill_ctf_desc: 'Top 1% TryHackMe, Top 4 Hacklantique, forensics and web challenges',
        
        // About Page
        about_title: 'About Me',
        about_subtitle: 'Cyberdefense engineering student passionate about operational security',
        about_background: 'My Background',
        about_bio1: 'Currently in my 3rd and final year of engineering school at ESNA Brittany, I work as a cybersecurity auditor at COMCYBER. My background in systems and network administration enables me to approach cyber challenges with methodology, pragmatism, and a real focus on operational security.',
        about_bio2: 'Although I was already passionate about cybersecurity before, the wave of attacks targeting hospitals during the Covid crisis strengthened my determination to fully dedicate myself to this field. I witnessed firsthand the real impacts of these incidents on critical structures, which confirmed the importance of committing to protecting critical systems.',
        about_bio3: 'I now specialize in security auditing, with the ambition to evolve in the medium term towards consulting or security management roles. I also remain open to SOC environments and junior CISO missions, where I can continue to develop my skills while making a direct contribution to teams.',
        about_tag_auditor: 'Cybersecurity Auditor',
        about_tag_admin: 'Sys/Network Admin',
        about_tag_ctf: 'CTF Player',
        about_tag_dev: 'Developer',
        
        // Experience
        exp_title: 'Professional Experience',
        exp_auditor_title: 'Apprentice Cybersecurity Auditor',
        exp_auditor_date: 'Sept 2024 - Present',
        exp_auditor_company: 'Cyberdefense Command (COMCYBER) | Rennes, France',
        exp_auditor_task1: '<strong>Training and Support:</strong> Design and deployment of specialized training for new arrivals and existing staff',
        exp_auditor_task2: '<strong>Ludus.cloud and Ansible Integration:</strong> Creation of an innovative platform automatically simulating complete IS environments',
        exp_auditor_task3: '<strong>Docker Project Management:</strong> Development of a Docker-based log management system',
        exp_auditor_task4: '<strong>Inter-ministerial Technical Audit:</strong> Conducting cross-ministry technical audits',
        exp_auditor_task5: '<strong>Methodological Innovation:</strong> Participation in developing new audit approaches',
        exp_admin_title: 'Apprentice Systems and Network Administrator',
        exp_admin_date: 'Sept 2023 - Aug 2024',
        exp_admin_company: 'Cyberdefense Command (COMCYBER) | Rennes, France',
        exp_admin_task1: '<strong>Network Infrastructure Security:</strong> Active security management (firewall, VPN, intrusion detection)',
        exp_admin_task2: '<strong>Maintenance and Continuous Improvement:</strong> Performance optimization and resilience enhancement',
        exp_admin_task3: '<strong>Log Management and Security:</strong> Implementation of an innovative Docker-based system',
        exp_admin_task4: '<strong>Crisis Management and Training:</strong> Development of scenarios and training programs',
        exp_admin_task5: '<strong>Improvement Projects:</strong> Project management adapted to various infrastructure needs',
        exp_tech_title: 'Apprentice Systems and Network Technician',
        exp_tech_date: 'Sept 2021 - Aug 2023',
        exp_tech_company: 'Cyberdefense Command (COMCYBER) | Rennes, France',
        exp_orange_title: 'Apprentice Developer',
        exp_orange_date: 'Oct 2022 - Sept 2023',
        exp_orange_company: 'Orange Business Services | Cesson-Sévigné, France',
        exp_orange_task1: '<strong>Symfony Development:</strong> Design of robust applications used by hundreds of thousands of people',
        exp_orange_task2: '<strong>Refactoring and Maintenance:</strong> Complete overhaul of applications with database optimization',
        exp_orange_task3: '<strong>Database Management:</strong> Restructuring and optimization (performance, security, scalability)',
        exp_orange_task4: '<strong>Ecological Initiatives:</strong> Contribution to the implementation of eco-friendly server racks',
        exp_orange_task5: '<strong>Project Management:</strong> Collaboration in agile methodologies with effective tracking',
        exp_interim_title: 'Temporary Work - Versatility',
        exp_interim_date: 'Sept 2021 - Jul 2023',
        exp_interim_company: 'Adecco Temporary | Lannion, France',
        exp_interim_desc: 'Various missions: handyman, waiter, cleaning agent, flyer distributor, shelf stocker',
        exp_interim_task1: '<strong>Versatility and Adaptability:</strong> Performing varied tasks and supporting colleagues',
        
        // Education
        edu_title: 'Education',
        edu_engineer_title: 'Cybersecurity Engineer',
        edu_engineer_school: 'ESNA Brittany',
        edu_engineer_date: 'Sept 2023 - Jul 2026 (Master\'s)',
        edu_engineer_activities: '<strong>Activities:</strong> ESN\'HACK (CTF club)',
        edu_engineer_spec_title: '🔒 Specializations:',
        edu_engineer_spec1: 'Advanced cyberdefense',
        edu_engineer_spec2: 'Penetration testing and ethical hacking',
        edu_engineer_spec3: 'Digital forensics',
        edu_engineer_spec4: 'Network and infrastructure security',
        edu_engineer_spec5: 'Database protection',
        edu_engineer_spec6: 'Operating system hardening',
        edu_but_title: 'BUT Computer Science',
        edu_but_school: 'IUT Lannion',
        edu_but_date: 'Sept 2021 - Jul 2023',
        edu_but_level: '<strong>Level:</strong> BUT Computer Science diploma obtained',
        edu_but_spec_title: '📚 Track C - Databases:',
        edu_but_spec1: 'Advanced database design and administration',
        edu_but_spec2: 'Data and access security',
        edu_but_spec3: 'Big Data and Business Intelligence',
        edu_but_spec4: 'Data-oriented application development',
        
        // Languages
        lang_title: 'Languages & Certifications',
        lang_english: 'English',
        lang_english_level: 'Professional proficiency',
        lang_english_cert: 'Linguaskill C1',
        lang_english_date: 'June 2025',
        lang_german: 'German',
        lang_german_level: 'Basic knowledge',
        lang_french: 'French',
        lang_french_level: 'Native language',
        
        // Projects Page
        projects_title: 'My Projects',
        projects_subtitle: 'E-learning platforms, R&D projects and cybersecurity developments',
        projects_featured: 'Featured Projects',
        projects_other: 'Other Projects',
        projects_filter_all: 'All',
        projects_filter_cyber: 'Cybersecurity',
        projects_filter_dev: 'Development',
        projects_filter_infra: 'Infrastructure',
        projects_view: 'View project',
        projects_view_details: 'View details',
        projects_internal: 'CASSI internal project',
        projects_personal: 'Personal project',
        projects_coming_soon: 'Coming soon',
        projects_github: 'GitHub Activity',
        projects_github_desc: 'Find all my open source projects on GitHub',
        projects_github_btn: 'View my GitHub profile',
        projects_status_prod: 'Production',
        projects_status_dev: 'In development',
        projects_confidential: 'ESNA confidential project',
        projects_opensource: 'Open Source',
        
        // Project descriptions
        proj_avalon_subtitle: 'Virtual Workshop for Learning and Operational Digital Labs',
        proj_avalon_desc: 'Complete e-learning platform with module system, quizzes, practical work, CTF and progress tracking. Developed to train CASSI technical auditors in Rennes in offensive and defensive techniques.',
        proj_citadel_subtitle: 'Interactive Center for Online Directed Work and Learning',
        proj_citadel_desc: 'Cybersecurity training and CTF platform accessible to everyone. Fork of AVALON adapted for the general public with focus on challenges, competitions and progressive learning.',
        proj_ephos_core_subtitle: 'Enterprise Platform for Holistic Operations & Security',
        proj_ephos_core_desc: 'Complete ERP platform for business management: CRM, project management, cybersecurity audit module, finance, invoicing, 29 integrations and ZENITH AI assistant. Modular architecture with 11 bounded contexts.',
        proj_ephos_audit_subtitle: 'Specialized solution for cybersecurity auditing',
        proj_ephos_audit_desc: 'Fork of EPHOS Core optimized for audit firms and cybersecurity consultants. Exclusive focus on audit management with customizable frameworks and professional PDF report generation.',
        proj_ddf_desc: '2-year ESNA project: anti-drone detection and countermeasure system inspired by the Israeli Iron Dome. Automatic detection, tracking and neutralization.',
        proj_hermes_desc: 'Complete monitoring and observability platform. Real-time IT infrastructure supervision with Grafana, Prometheus, Loki and InfluxDB.',
        
        // Certifications Page
        certs_title: 'Cybersecurity Certifications',
        certs_subtitle: 'Continuous training path in offensive and defensive cybersecurity',
        certs_objectives: 'Certification Goals',
        certs_obtained: 'Obtained',
        certs_progress: 'In Progress',
        certs_planned: 'Planned',
        
        // Blog Page
        blog_title: 'Blog',
        blog_subtitle: 'Articles, tutorials and thoughts on cybersecurity, development and CTF',
        blog_read_more: 'Read more',
        blog_filter_all: 'All articles',
        blog_filter_writeup: 'WriteUps',
        blog_filter_article: 'Cyber Articles',
        blog_filter_cert: 'Certifications',
        
        // Contact Page
        contact_title: 'Contact',
        contact_subtitle: 'Feel free to contact me for any questions or opportunities',
        contact_info_title: 'Contact Information',
        contact_email: 'Email',
        contact_location: 'Location',
        contact_location_value: 'Bruz, Brittany, France',
        contact_availability: 'Availability',
        contact_availability_status: 'Looking for post-graduation opportunities',
        contact_availability_desc: 'Currently in my final year of engineering (graduating July 2026), I am actively looking for a position in the following areas:',
        contact_form_title: 'Send me a message',
        contact_form_name: 'Name',
        contact_form_email: 'Email',
        contact_form_subject: 'Subject',
        contact_form_message: 'Message',
        contact_form_send: 'Send message',
        contact_social: 'Social networks',
        contact_role_soc: 'SOC Analyst',
        contact_role_auditor: 'Cyber Auditor',
        contact_role_consultant: 'Consultant',
        contact_role_freelance: 'Freelance',
        contact_role_collab: 'Collaboration',
        contact_role_ctf: 'CTF Teams',
        
        // Footer
        footer_rights: 'All rights reserved.',
        
        // Common
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        close: 'Close',
        view_more: 'View more',
        back: 'Back'
    }
};

// Langue actuelle
let currentLang = localStorage.getItem('lang') || 'fr';

// Initialisation
function initI18n() {
    // Appliquer la langue sauvegardée
    applyTranslations(currentLang);
    updateLangToggle();
}

// Appliquer les traductions
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang;
    
    // Traduire tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Vérifier si c'est un placeholder ou du contenu
            if (el.hasAttribute('placeholder')) {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Mettre à jour le titre de la page
    const pageTitle = document.querySelector('[data-i18n-title]');
    if (pageTitle) {
        const titleKey = pageTitle.getAttribute('data-i18n-title');
        if (translations[lang] && translations[lang][titleKey]) {
            document.title = translations[lang][titleKey] + ' - Ventaryss';
        }
    }
}

// Changer de langue
function toggleLanguage() {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    applyTranslations(newLang);
    updateLangToggle();
}

// Mettre à jour le bouton de langue
function updateLangToggle() {
    const toggleBtns = document.querySelectorAll('.lang-toggle');
    toggleBtns.forEach(btn => {
        const flagSpan = btn.querySelector('.lang-flag');
        const textSpan = btn.querySelector('.lang-text');
        if (currentLang === 'fr') {
            if (flagSpan) flagSpan.textContent = '🇬🇧';
            if (textSpan) textSpan.textContent = 'EN';
        } else {
            if (flagSpan) flagSpan.textContent = '🇫🇷';
            if (textSpan) textSpan.textContent = 'FR';
        }
    });
}

// Obtenir une traduction
function t(key) {
    return translations[currentLang] && translations[currentLang][key] 
        ? translations[currentLang][key] 
        : key;
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', initI18n);
