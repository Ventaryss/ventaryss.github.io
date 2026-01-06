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
        
        // Education
        edu_title: 'Formation',
        edu_engineer_title: 'Ingénieur Cyberdéfense',
        edu_engineer_date: '2023 - 2026',
        edu_engineer_school: 'ESNA Bretagne | Rennes',
        edu_engineer_desc: 'Spécialisation en sécurité des systèmes d\'information, audit et tests d\'intrusion',
        edu_bts_title: 'BTS SIO option SISR',
        edu_bts_date: '2021 - 2023',
        edu_bts_school: 'Lycée Brocéliande | Guer',
        edu_bts_desc: 'Solutions d\'Infrastructure, Systèmes et Réseaux',
        edu_bac_title: 'Baccalauréat Général',
        edu_bac_date: '2018 - 2021',
        edu_bac_school: 'Lycée Brocéliande | Guer',
        edu_bac_desc: 'Spécialités Mathématiques et NSI',
        
        // Projects Page
        projects_title: 'Mes Projets',
        projects_subtitle: 'Découvrez mes réalisations en cybersécurité et développement',
        projects_filter_all: 'Tous',
        projects_filter_cyber: 'Cybersécurité',
        projects_filter_dev: 'Développement',
        projects_filter_infra: 'Infrastructure',
        projects_view: 'Voir le projet',
        
        // Certifications Page
        certs_title: 'Certifications',
        certs_subtitle: 'Mes certifications et qualifications professionnelles',
        certs_obtained: 'Obtenues',
        certs_progress: 'En cours',
        certs_planned: 'Planifiées',
        
        // Blog Page
        blog_title: 'Blog & Writeups',
        blog_subtitle: 'Articles techniques et writeups de CTF',
        blog_read_more: 'Lire la suite',
        blog_filter_all: 'Tous',
        blog_filter_writeup: 'Writeups',
        blog_filter_article: 'Articles',
        
        // Contact Page
        contact_title: 'Me Contacter',
        contact_subtitle: 'N\'hésitez pas à me contacter pour toute question ou opportunité',
        contact_info_title: 'Informations de contact',
        contact_email: 'Email',
        contact_location: 'Localisation',
        contact_location_value: 'Rennes, France',
        contact_availability: 'Disponibilité',
        contact_availability_value: 'Ouvert aux opportunités',
        contact_form_title: 'Envoyez-moi un message',
        contact_form_name: 'Nom complet',
        contact_form_email: 'Email',
        contact_form_subject: 'Sujet',
        contact_form_message: 'Message',
        contact_form_send: 'Envoyer le message',
        contact_social: 'Réseaux sociaux',
        
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
        
        // Education
        edu_title: 'Education',
        edu_engineer_title: 'Cyberdefense Engineer',
        edu_engineer_date: '2023 - 2026',
        edu_engineer_school: 'ESNA Brittany | Rennes',
        edu_engineer_desc: 'Specialization in information systems security, auditing and penetration testing',
        edu_bts_title: 'BTS SIO option SISR',
        edu_bts_date: '2021 - 2023',
        edu_bts_school: 'Lycée Brocéliande | Guer',
        edu_bts_desc: 'Infrastructure, Systems and Networks Solutions',
        edu_bac_title: 'General Baccalaureate',
        edu_bac_date: '2018 - 2021',
        edu_bac_school: 'Lycée Brocéliande | Guer',
        edu_bac_desc: 'Mathematics and Computer Science specialties',
        
        // Projects Page
        projects_title: 'My Projects',
        projects_subtitle: 'Discover my achievements in cybersecurity and development',
        projects_filter_all: 'All',
        projects_filter_cyber: 'Cybersecurity',
        projects_filter_dev: 'Development',
        projects_filter_infra: 'Infrastructure',
        projects_view: 'View project',
        
        // Certifications Page
        certs_title: 'Certifications',
        certs_subtitle: 'My professional certifications and qualifications',
        certs_obtained: 'Obtained',
        certs_progress: 'In Progress',
        certs_planned: 'Planned',
        
        // Blog Page
        blog_title: 'Blog & Writeups',
        blog_subtitle: 'Technical articles and CTF writeups',
        blog_read_more: 'Read more',
        blog_filter_all: 'All',
        blog_filter_writeup: 'Writeups',
        blog_filter_article: 'Articles',
        
        // Contact Page
        contact_title: 'Contact Me',
        contact_subtitle: 'Feel free to contact me for any questions or opportunities',
        contact_info_title: 'Contact Information',
        contact_email: 'Email',
        contact_location: 'Location',
        contact_location_value: 'Rennes, France',
        contact_availability: 'Availability',
        contact_availability_value: 'Open to opportunities',
        contact_form_title: 'Send me a message',
        contact_form_name: 'Full name',
        contact_form_email: 'Email',
        contact_form_subject: 'Subject',
        contact_form_message: 'Message',
        contact_form_send: 'Send message',
        contact_social: 'Social networks',
        
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
