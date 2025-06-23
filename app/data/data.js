import { FaDribbble, FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';

/* ----------  Open-source repos that appear on the home page ---------- */
export const featuredRepositories = [
  'convert_jsonl_to_csv',   // handy data-wrangling CLI
  's-parking',
  'factory_manager_server',
  'workout-plan'
];

/* ----------  Career timeline ---------- */
export const companies = [
  {
    id: 1,
    institution: 'Docenti.it',
    logo: '/images/companies/docenti-it.png',
    degree: 'Full-Stack Developer',
    startDate: 'Jun 2021',
    endDate  : 'Jun 2023'
  },                               // full-time role :contentReference[oaicite:5]{index=5}
  {
    id: 2,
    institution: 'GC Group Srl',
    logo: '/images/companies/gc-group.png',
    degree: 'System & Network Administrator',
    startDate: 'Sep 2016',
    endDate  : 'Jun 2018'
  },                               // sys-admin experience :contentReference[oaicite:6]{index=6}
  {
    id: 3,
    institution: 'I-Tel Srl',
    logo: '/images/companies/itel.png',
    degree: 'IT Intern',
    startDate: 'Feb 2015',
    endDate  : 'Mar 2015'
  }                                // internship :contentReference[oaicite:7]{index=7}
];

/* ----------  Education ---------- */
export const institutions = [
  {
    id: 1,
    institution: 'University of Bologna',
    logo: '/images/institutions/unibo.png',
    degree: 'M.S. Computer Science & Engineering',
    startDate: '2022',
    endDate  : 'Present'
  },                                // current studies :contentReference[oaicite:8]{index=8}
  {
    id: 2,
    institution: 'University of Bologna',
    logo: '/images/institutions/unibo.png',
    degree: 'B.S. Computer Science & Engineering',
    startDate: '2019',
    endDate  : '2022'
  },
  {
    id: 3,
    institution: 'I.T.I. P. Gobetti',
    logo: '/images/institutions/gobetti.png',
    degree: 'Technical High-School Diploma (IT)',
    startDate: '2009',
    endDate  : '2014'
  }
];

/* ----------  2025 Goals ---------- */
export const highlightList = [
  { id: 1, text: 'Graduate my M.S. and publish summarisation research' },
  { id: 2, text: 'Contribute more to open-source JVM & NLP tooling' },
  { id: 3, text: 'Speak at a tech conference on production NLP' }
];

/* ----------  Social links ---------- */
export const socialMedia = [
  {
    id: 1,
    label: 'GitHub',
    icon : <FaGithub />,
    url  : 'https://github.com/davidcohenDC'
  },
  {
    id: 2,
    label: 'LinkedIn',
    icon : <FaLinkedin />,
    url  : 'https://www.linkedin.com/in/david-cohen96/'
  },
  {
    id: 3,
    label: 'Mail me',
    icon : <FaRegEnvelope />,
    url  : 'mailto:davidcohen96@outlook.com'
  }
];

