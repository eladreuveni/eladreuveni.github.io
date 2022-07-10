import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import './CityCard.scss';

const CityCard = ({ dayData }: any) => {
    const [isFlipped, setIsFlipped] = useState(false); // true for data, false for pic

    const flipToPic = () => { setIsFlipped(true) }

    const flipToData = () => { setIsFlipped(false) }

    return (
        <div className="card-container" onMouseEnter={flipToPic} onMouseLeave={flipToData}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="front" key={1}>
                    <h3> {dayData.day}</h3>
                    <h4>{dayData.temp}</h4>
                </div>
                <div className="back" key={2}>
                    <img className="daily-img" src={dayData.pic} alt="" />
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default CityCard;