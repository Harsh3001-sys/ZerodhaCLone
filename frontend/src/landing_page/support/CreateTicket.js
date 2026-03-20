import React from 'react';
import  { useState } from "react";
import './ticket.css';
function CreateTicket({ icon, button, link1, link2, link3, link4, link5, link6 }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="tick-cont">
            <div className={`ticket ${open ? "open" : ""}`}>
                <button
                    className="ticket-btn"
                    onClick={() => setOpen(!open)}
                    type="button"
                >
                    <span className='icon-box'>
                        <span className="material-symbols-outlined icon">
                            {icon}
                        </span>
                    </span>
                    <span className="text">{button}</span>
                </button>

                <div className="ticket-content">
                    <a href="#">{link1}</a>
                    <a href="#">{link2}</a>
                    <a href="#">{link3}</a>
                    <a href="#">{link4}</a>
                    <a href="#">{link5}</a>
                    <a href="#">{link6}</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;