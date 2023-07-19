import { v4 as uuidv4 } from 'uuid';
import DunesNpImg from "../../images/dunesNP.jpg"
import CalcImg from "../../images/calc.png"

const projectsData = [
    {
        id: uuidv4(),
        name: "Diabetic calculator",
        desc: "This calculator helps me to transfer glucose mg/dl to mmol/L units that I used to.",
        img: CalcImg
    },
    {
        id: uuidv4(),
        name: "National Parks of USA",
        desc: "It's a base of NP of US with information and checking in where I've been so far.",
        img: DunesNpImg
    },
]

export default projectsData;