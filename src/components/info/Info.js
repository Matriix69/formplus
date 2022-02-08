import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import "./info.scss";

function Info({ text }) {
    return (
        <div className="info-container" data-testid="info">
            <BsInfoCircle />
            <p>{text}</p>
        </div>
    );
}

export default Info;
