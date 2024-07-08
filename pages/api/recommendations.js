// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Elena Rossi',
    image: "images/emoji.png", // Placeholder, adjust as needed
    designation: 'Frontend Developer | React | JavaScript',
    view: "Mario is a highly skilled frontend developer with a strong grasp of React. His attention to detail and ability to quickly learn new technologies make him a valuable asset to any team. I highly recommend him for any frontend development opportunities.",
  },
  {
    id: 1,
    name: 'Marco Bianchi',
    image: "images/emoji.png", // Placeholder
    designation: 'Software Engineer | Python | Django',
    view: "I had the pleasure of working with Mario on a challenging project, and I was consistently impressed by his problem-solving skills and dedication. He is a reliable and collaborative team member who consistently delivers high-quality work.",
  },
  {
    id: 2,
    name: 'Sofia Verdi',
    image: "images/emoji.png", // Placeholder
    designation: 'UI/UX Designer',
    view: "Mario has a keen eye for design and a deep understanding of user experience principles. He is a creative and talented developer who consistently produces beautiful and functional interfaces.",
  },
  {
    id: 3,
    name: 'Lorenzo Ferrari',
    image: "images/emoji.png", // Placeholder
    designation: 'Full Stack Developer | Node.js | React',
    view: "Mario is a versatile full-stack developer with expertise in both frontend and backend technologies. He is a quick learner and a strong communicator, making him a valuable addition to any development team.",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
