import { v4 as uuidv4 } from 'uuid';
import DunesNpImg from "../../images/dunesNP.jpg"
import CalcImg from "../../images/calc.png"
import Progress from "../../images/3rd-project.jpg"

const projectsData = [
    {
        id: uuidv4(),
        name: "Diabetic calculator",
        desc: "This calculator combines the capabilities of a standard calculator and a diabetic calculator, providing users with a unified tool for both general calculations and glucose unit conversions.",
        img: CalcImg //I will replace with a screenshot of the site
    },
    {
        id: uuidv4(),
        name: "National Parks of USA",
        desc: "It's a base of National Parks of USA. It contains general information and my journey through USA.",
        img: DunesNpImg //I will replace with a screenshot of the site
    },
    {
        id: uuidv4(),
        name: "In Progress",
        desc: "In Progress",
        img: Progress //I will replace with a screenshot of the site
    },
]

export default projectsData;