import { Job, SkillType } from './types';

export const PERSONAL_STATS = [
  { label: 'Force', value: 'Titan de la Fonte', icon: 'Dumbbell' },
  { label: 'Fief', value: 'Comté de Nizza', icon: 'MapPin' },
  { label: 'Clan', value: '2 Héritiers, 2 Félins', icon: 'Users' },
  { label: 'Quête', value: 'Tribut de l\'Hydromel', icon: 'Beer' },
];

export const CAREER_PATH: Job[] = [
  {
    id: 'thales-head',
    title: 'Head of Discipline Plateforme Réseau et Cybersécurité',
    company: 'Thales (La Forteresse)',
    period: 'Oct. 2025 - Présent',
    location: 'Valbonne, PACA',
    description: 'Le Trône. Responsable d\'équipe pluridisciplinaire dans un cadre embarqué : hardware, administration système, réseau, cybersécurité et calcul hétérogène. Le Seigneur RZ règne en maître.',
    skills: ['Leadership Absolu', 'Cybersécurité', 'Hardware', 'Calcul Hétérogène'],
    type: SkillType.MANAGEMENT,
    isCurrent: true,
  },
  {
    id: 'thales-tech-lead',
    title: 'Responsable Technique Calculateurs Embarqués',
    company: 'Thales Defense & Security',
    period: 'Nov. 2024 - Nov. 2025',
    location: 'Valbonne',
    description: 'Gestion de projet, livraison de projet et optimisation des processus. Il a amélioré la qualité et la performance des engins de guerre numériques.',
    skills: ['Gestion de Projet', 'Amélioration Continue', 'Qualité', 'Perf', 'Dev Organisationnel'],
    type: SkillType.TECH
  },
  {
    id: 'thales-sysadmin',
    title: 'Administrateur Système / Delivery Manager',
    company: 'Thales Defense & Security',
    period: 'Janv. 2024 - Nov. 2025',
    location: 'Valbonne',
    description: 'Maître des clés Red Hat Enterprise Linux. Il a sécurisé les réseaux et assuré la livraison des projets critiques.',
    skills: ['RHEL', 'Admin Linux', 'Admin Réseau', 'Cybersécurité', 'Livraison'],
    type: SkillType.TECH
  },
  {
    id: 'thales-middleware',
    title: 'Ingénieur Développement Middleware',
    company: 'Thales Defense & Security',
    period: 'Janv. 2022 - Janv. 2024',
    location: 'Valbonne',
    description: 'Forgeur de code et dompteur de conteneurs. Il parlait la langue des machines anciennes (C, ClearCase) et nouvelles (K8s, Podman).',
    skills: ['Docker', 'Podman', 'Kubernetes', 'C', 'Git', 'ClearCase', 'Bash'],
    type: SkillType.TECH
  },
  {
    id: 'capgemini',
    title: 'Consultant Mercenaire',
    company: 'Capgemini (Mission chez Thales)',
    period: 'Oct. 2018 - Déc. 2021',
    location: 'Valbonne',
    description: 'Consultant au sein de l\'équipe machines et réseaux. Les premières grandes batailles pour la Forteresse Thales.',
    skills: ['Consulting', 'Réseaux', 'Systèmes'],
    type: SkillType.TECH
  },
  {
    id: 'thales-intern',
    title: 'Stagiaire Ingénieur (L\'Écuyer)',
    company: 'Thales Defense & Security',
    period: 'Avr. 2018 - Sept. 2018',
    location: 'Valbonne',
    description: 'Ses premiers pas dans la Forteresse. Il a appris les rudiments du métier avant d\'être adoubé.',
    skills: ['Apprentissage', 'Ingénierie', 'Café (peut-être)'],
    type: SkillType.TECH
  },
  {
    id: 'master-estel',
    title: 'Master ESTEL (Élec, Systèmes, Télécoms)',
    company: 'Université Côte d’Azur',
    period: 'Sept. 2016 - Sept. 2018',
    location: 'Nice',
    description: 'Obtention du parchemin des savoirs supérieurs avec "Mention Bien". Spécialisation en électronique et systèmes embarqués.',
    skills: ['Systèmes Embarqués', 'Télécoms', 'Électronique'],
    type: SkillType.EDUCATION
  },
  {
    id: 'robot-demineur',
    title: 'Projet : Robot Démineur',
    company: 'Université Nice Sophia Antipolis',
    period: 'Mai 2017 - Juin 2017',
    location: 'Nice',
    description: 'Création d\'un Golem mécanique sur base Arduino Uno. Chenilles, bras 4 axes, vision artificielle. Le début de la robotique.',
    skills: ['Arduino', 'Robotique', 'Vision', 'C++'],
    type: SkillType.PROJECT
  },
  {
    id: 'licence',
    title: 'Licence Électronique',
    company: 'Université Côte d’Azur',
    period: '2012 - 2016',
    location: 'Nice',
    description: 'Les fondations théoriques. L\'initiation aux circuits et aux ondes.',
    skills: ['Électronique', 'Physique', 'Maths'],
    type: SkillType.EDUCATION
  },
  {
    id: 'nike',
    title: 'Maître Chausseur (Vendeur)',
    company: 'Nike',
    period: 'Juin 2015 - Sept. 2018',
    location: 'Villeneuve-Loubet',
    description: 'Avant de protéger les réseaux, il équipait les pieds rapides du royaume. Un job étudiant légendaire.',
    skills: ['Vente', 'Style', 'Vitesse'],
    type: SkillType.RETAIL
  }
];

export const SYSTEM_INSTRUCTION = `
Tu es un barde médiéval cyberpunk un peu "rageux" et très théâtral.
Ton sujet est "Seigneur RZ" (Ridha Ziani).
Ton interlocutrice est "Dame Pélépé" (son ancienne collègue et amie).

LE LORE (Contexte Sacré) :
- Ridha vient d'être promu "Head of Discipline" chez Thales (La Forteresse).
- C'est un "Titan de la Fonte" (Il pousse à la salle, il est costaud).
- Il règne sur le Comté de Nizza (Nice).
- Sa cour est composée de 2 héritiers (enfants) et 2 félins (chats).
- Dame Pélépé et Seigneur RZ s'adorent mais se clashent en permanence avec des termes épiques.

TA QUÊTE UNIQUE :
Tu dois célébrer sa victoire MAIS SURTOUT lui rappeler qu'il doit payer sa dette : Le "Tribut de l'Hydromel" (un apéro).
C'est lui qui régale Dame Pélépé. C'est la loi du Royaume.

Ton style :
- Mélange jargon informatique (firewall, kernel, docker, k8s, c++) et vocabulaire médiéval (donjon, dragon, écu, parchemin).
- Sois grandiloquent : "OYEZ OYEZ !"
- N'oublie pas de mentionner ses muscles ou ses chats si tu peux.
- Finis toujours par une exigence de boisson.
`;