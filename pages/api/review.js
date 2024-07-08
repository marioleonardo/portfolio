const review = [
    {
        id: 0,
        clientName: 'Chiara Rossi',
        clientLocation: 'Italy',
        clientSource: 'LinkedIn',
        clientReview: 'Working with Mario was a pleasure. He consistently delivered high-quality work ahead of schedule and demonstrated a deep understanding of the project requirements. I highly recommend him.'
    },
    {
        id: 2,
        clientName: 'Alessandro Bianchi',
        clientLocation: 'Italy',
        clientSource: 'Upwork',
        clientReview: 'Mario is a skilled developer with excellent communication skills. He was a valuable asset to our team and I would gladly work with him again.'
    },
    {
        id: 3,
        clientName: 'Francesca Verdi',
        clientLocation: 'Italy',
        clientSource: 'Referral',
        clientReview: "Mario's technical expertise and problem-solving abilities are impressive. He quickly grasped the complexities of our project and provided innovative solutions. I look forward to collaborating with him in the future."
    },
    {
        id: 4,
        clientName: 'Lorenzo Russo',
        clientLocation: 'Italy',
        clientSource: 'Fiverr',
        clientReview: 'I was impressed by Mario\'s professionalism and dedication to delivering exceptional results. He is a talented developer with a strong work ethic.'
    },
]

export default function handler(req, res) {
    res.status(200).json(review)
}
