import { v4 as uuidv4 } from 'uuid';
import CalcImg from "../../images/calc.png"
import Progress from "../../images/3rd-project.jpg"
import NPImage from "../../images/natParks.png"

const projectsData = [
    {
        id: uuidv4(),
        name: "Diabetic calculator",
        desc: "This calculator combines the capabilities of a standard calculator and a diabetic calculator, providing users with a unified tool for both general calculations and glucose unit conversions.",
        img: CalcImg,
        link: "https://diabetic-regular-calculator.vercel.app/"
    },
    {
        id: uuidv4(),
        name: "National Parks of USA",
        desc: "This is a repository dedicated to the National Parks of the USA. You'll find a treasure trove of general information about these natural wonders, as well as my personal journey through the United States.",
        img: NPImage,
        link: "https://npusa.onrender.com"
    },
    {
        id: uuidv4(),
        name: "In Progress",
        desc: "In Progress",
        img: Progress //I will replace with a screenshot of the site
    },
]

export default projectsData;