const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Politecnico Torino',
                degree: 'BS, Computer Engineering',
                detail: "Bachelor's Degree in Computer Engineering Politecnico di Torino",
                year: '2020-2023'
            },
            {
                id: 1,
                title: 'Politecnico Torino',
                degree: 'MS, Computer Engineering',
                detail: "Master's Degree in Computer Engineering Politecnico di Torino",
                year: '2023-2025'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'BitPOLITO',
                role: 'Full-stack Developer',
                url: 'no website',
                desc: "Collaborated with cross-functional teams to design and develop web and mobile applications using React.js, Django, MongoDB, and Python. Demonstrated strong project management skills by establishing deadlines, monitoring development progress, and resolving issues promptly. Created effective software solutions for businesses and start-ups, ensuring client satisfaction and success.",
                year: 'January 2021 - February 2023 (2 years 2 months)',
                location: 'Italy, Torino'
            },
            {
                id: 2,
                title: 'H-CUBE',
                role: 'Lead Full Stack Developer',
                url: 'no website',
                desc: "Full Stack Developer at hCube: Managed full development lifecycle, including hybrid iOS/Android mobile application, admin dashboard, landing page and backend. Leveraged Flutter, AWS, and TypeScript to deliver innovative solutions for the wearable industry. Tested and managed low-level Bluetooth connections for embedded devices, including signal filtering and state management.",
                year: 'June 2023 - Present (1 year 2 months)',
                location: 'Italy, Torino'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
