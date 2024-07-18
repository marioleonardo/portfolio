const portfolio = [
    {
        id: 0,
        projectName: "HCube Frontend",
        url: "https://youtu.be/PMWxY_GB9_8",
        image: "projects/jmm.png",
        projectDetail: "HCube Frontend provides a comprehensive interface for connecting to a Bluetooth patch, viewing interactive charts, performing OTA firmware upgrades, managing user login, and accessing historical data. It is written in Flutter, ensuring cross-platform compatibility for iOS and Android with customizable settings and an intuitive user interface.",
        technologiesUsed: [
            {
                tech: "Flutter"
            },
        ]
    },
    {
        id: 1,
        projectName: "HCube Website",
        url: "https://marioleonardo.github.io/landing/",
        image: "projects/jmm.png",
        projectDetail: "The HCube website offers detailed information about the HCube ecosystem, including features of the Frontend, Dashboard, and processing server. It serves as a central hub for users to learn about HCube's capabilities, access resources, and stay updated with the latest news and updates.",
        technologiesUsed: [
            {
                tech: "React"
            },
        ]
    },
    {
        id: 2,
        projectName: "HCube Dashboard",
        url: "https://youtu.be/PLUYzfLrQ-U",
        image: "projects/jmm.png",
        projectDetail: "The HCube Dashboard is a React SPA that allows coaches to view real-time and processed training data from their players' devices. It utilizes MQTT IoT for real-time monitoring, API integration for login and data retrieval, and provides insightful analytics to enhance player performance tracking.",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "MQTT IoT"
            },
            {
                tech: "API Integration"
            },
        ]
    },

    {
        id: 3,
        projectName: "Landing ichiban",
        url: "https://landing-ichibann.vercel.app",
        image: "projects/jmm.png",
        projectDetail: "API integration for login and data retrieval, and provides insightful analytics to enhance player performance tracking.",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "MQTT IoT"
            },
            {
                tech: "API Integration"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
