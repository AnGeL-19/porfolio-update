
interface Base{
    id: number;
    title: string;
    subtitle: string;
    img: string;
    date: string;
    description: string;
}

interface Study extends Base{
    goals: Array<string>;
}


export const studies: Array<Study> = [
    {
        id: 1,
        title: 'Instituto tecnologico de Sonora (ITSON)',
        subtitle: 'Ingenieria en software',
        img: '/img/proyects/itson.png',
        date: '2018-2022',
        description: 'Estudié la carrera de ingeniería en software en la universidad ITSON ubicada en Navojoa, Sonora,  Mexico. Inicie mis estudios en el 2018 y lo finalice en el 2022. Me especialice en desarrollo de aplicaciones web y móvil.',
        goals: ['Finalizada']
    }
]

export interface ProjectWork {
    id?: string;
    name: string;
    abbreviation: string;
    img: string;
    work_done: Array<string>
}

interface Work extends Base{
    link: string;
    proyects: Array<ProjectWork>;
}

export const works: Array<Work> = [
    {
        id: 1,
        title: 'Cefis',
        subtitle: 'Practicas profesionales',
        img: '/img/proyects/cefis.png',
        date: '2022-2023',
        description: 'Realice las practicas profesionales en cefis en desarrollar un software de administracion que les ayuda con la consultas de pacientes y ventas de servicios. La aplicacion les ayudo a poder ajilizar los procesos de docuementacion y mejor control de los datos.',
        link: 'https://www.chsj.mx/cefis',
        proyects: [
            {
                id: 'c001',
                name: 'Sistema cefis',
                abbreviation: 'CS',
                img: '/img/proyects/cefis-bg.png',
                work_done: [
                    'Ayude a diseñar y crear la base de datos',
                    'Ayude con el diseño de la interfaz',
                    'Ayude a crear  funcionalidades del frontend',
                    'Desarrolle el bakend',
                    'Atencion con el cliente',
                    'Lidere un equipo de 2 personas',
                ]
            },
        ]
    },
    {
        id: 2,
        title: 'Satori Tech',
        subtitle: 'Programador junior Web',
        img: '',
        date: '2023-2024',
        description: 'Trabajé como programador junior en esta empresa, donde logré participar en varios proyectos y poder aprender bastantes cosas. Desde comenzar un inicio del proyecto hasta poder entregarlo. Me ayudó mucho a poner en práctica mis conocimientos y poder reforzarlos, vencer miedos que tenía y seguir un proceso.',
        link: 'https://satoritech.com.mx/',
        proyects: [
            {
                id: 's001',
                name: 'Cold Wind System',
                abbreviation: 'CWS',
                img: '',
                work_done: [
                    'Ayude con el diseño de componentes y su creacion',
                    'Apoye con la correccion de errores y bugs',
                    'Testear el sistema',
                    'Atencion con cliente del sistema',
                ]
            },
            {
                id: 's002',
                name: 'CXLAB',
                abbreviation: 'CXLAB',
                img: '',
                work_done: [
                    'Maquetado y rediseño de algunas paginas de la web',
                    'Ayude con la creacion de componentes y funcionalidades',
                    'Testear el sistema',
                    'Hice la base de datos y diseño de tablas',
                    'Apoye en corregir errores y bugs de diseño',
                ]
            },
            {
                id: 's003',
                name: 'WORKAP',
                abbreviation: 'WORKAP',
                img: '',
                work_done: [
                    'Apoye con el maquetado y rediseño de web - Lading page',
                    'Ayude con la correcciones de bugs'
                ]
            },
            {
                id: 's004',
                name: 'The lab Kitchen',
                abbreviation: 'TLK',
                img: '',
                work_done: [
                    'Hice la base de datos y el diseño de tablas',
                    'Realice el maquetado de la web y estilos',
                    'Hice funcionalidad de componentes y modulos',
                    'Ayude con el analisis de diseño',
                    'Testear el sistema'
                ]
            },
            {
                id: 's005',
                name: 'V-Road',
                abbreviation: 'VR',
                img: '',
                work_done: [
                    'Maquetado y rediseño de algunas partes de la web',
                    'Correccion de errores y bugs',
                    'Creacion de nuevas funcionalidades y componentes',
                    'Atencion y presentacion del sistema con el cliente',
                    'Apoye con el testeo del sistema'
                ]
            },
            {
                id: 's006',
                name: 'Brokers',
                abbreviation: 'Brokers',
                img: '',
                work_done: [
                    'Apoye en el diseño de base datos',
                    'Apoye con las creacion de funcionalidades y componentes',
                    'Ayude con las correcciones de errores y bugs',
                    'Apoye y agregue funcionalidades a las graficas en datos'
                ]
            },
            {
                id: 's007',
                name: 'Bestoffices',
                abbreviation: 'Bestoffices',
                img: '',
                work_done: [
                    'Apoye con las correcciones de errores y bugs',
                    'Agregue nuevas funcionalidades que se pedian',
                    'Se rediseño y se crearon funcionalidades en partes de la web',
                    'Logre corregir errores de pagos en el sistema'
                ]
            },
            {
                id: 's008',
                name: 'Gamman Sport',
                abbreviation: 'GS',
                img: '',
                work_done: [
                    'Correccion de errores y bugs',
                    'Logre hacer una correccion critica del sistema que ya se tenia en los registros de usuarios y pagos'
                ]
            }
        ]
    }
]


interface ProjectRoutes{
    repo_frontend?: string;
    repo_backend?: string;
}

export interface ProjectI{
    id?: string;
    name: string;
    img: string;
    web: string;
    routes: ProjectRoutes;
}

export const projects: Array<ProjectI> = [
    {
        id: "p001",
        name: "Clone Tweeter",
        img: "/img/proyects/tweeter-clone.png",
        web: "https://app-tweeter-front.vercel.app/auth/login",
        routes: {
            repo_frontend: "https://github.com/AnGeL-19/app-tweeter-front",
            repo_backend: "https://github.com/AnGeL-19/app-tweet-backend"
        }
    },
    {
        id: "p002",
        name: "Eagle Wear Shop",
        img: "/img/proyects/eagle-shop.png",
        web: "https://e-wshop-kwe3.vercel.app/",
        routes: {
            repo_frontend: "https://github.com/AnGeL-19/EWshop" 
        }
    },
    {
        id: "p003",
        name: "Cat Wiki",
        img: "/img/proyects/cat-wiki.png",
        web: "https://app-cat-wiki.vercel.app/",
        routes: {
            repo_frontend: "https://github.com/AnGeL-19/app-catWiki"
        }
    }
] 

export interface Skill{
    id: string;
    name: string;
    icon: string;
}

interface TypeSkills{
    lenguage: Array<Skill>;
    frameworks: Array<Skill>;
    disign: Array<Skill>;
    others: Array<Skill>;
}

export const skills: TypeSkills = {
    lenguage: [
        {
            id: "001",
            name: "JavaScript",
            icon: "/img/icons/js.svg"
        },
        {
            id: "002",
            name: "TypeScript",
            icon: "/img/icons/ts.svg"
        },
        {
            id: "003",
            name: "Python",
            icon: "/img/icons/py.svg"
        },
        {
            id: "004",
            name: "Sql",
            icon: "/img/icons/sql.svg"
        },
        {
            id: "005",
            name: "PHP",
            icon: "/img/icons/php.svg"
        },
        {
            id: "006",
            name: "Java",
            icon: "/img/icons/java.svg"
        },
        {
            id: "007",
            name: "NodeJs",
            icon: "/img/icons/node.svg"
        }
    ],
    frameworks: [
        {
            id: "101",
            name: "React",
            icon: "/img/icons/react.svg"
        },
        {
            id: "102",
            name: "React Native",
            icon: "/img/icons/react-native.svg"
        },
        {
            id: "103",
            name: "MySQL",
            icon: "/img/icons/mysql.svg"
        },
        {
            id: "104",
            name: "Vue",
            icon: "/img/icons/vue.svg"
        },
        {
            id: "105",
            name: "Django",
            icon: "/img/icons/dj.svg"
        },
        {
            id: "106",
            name: "NextJs",
            icon: "/img/icons/nextjs.svg"
        },
        {
            id: "107",
            name: "Laravel",
            icon: "/img/icons/laravel.svg"
        },
        {
            id: "108",
            name: "MongoDB",
            icon: ""
        }
    ],
    disign: [
        {
            id: "201",
            name: "Figma",
            icon: "/img/icons/figma.svg"
        },
        {
            id: "202",
            name: "Diagrama ET",
            icon: "/img/icons/det.svg"
        }
    ],
    others: [
        {
            id: "301",
            name: "HTML",
            icon: "/img/icons/html.svg"
        },
        {
            id: "302",
            name: "CSS",
            icon: "/img/icons/css.svg"
        },
        {
            id: "303",
            name: "Git",
            icon: "/img/icons/git.svg"
        },
        {
            id: "304",
            name: "Docker",
            icon: "/img/icons/docker.svg"
        },
        {
            id: "305",
            name: "NextUI",
            icon: ""
        },
        {
            id: "306",
            name: "PrimeReact",
            icon: ""
        },
        {
            id: "307",
            name: "Vuetify",
            icon: ""
        },
        {
            id: "308",
            name: "Boostrap",
            icon: ""
        },
        {
            id: "309",
            name: "Tailwind",
            icon: ""
        },
        {
            id: "310",
            name: "SASS",
            icon: ""
        },
    ]
}
