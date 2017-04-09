import React, {PropTypes} from 'react'
import Link from 'next/link'

const Cta = ({text, href}) => (
    <div>
        <style jsx>{`
            .button {
                transition: all 0.2s ease;
                width: 150px;
                height: 45px;
                background: black;
                color: white;
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 2px solid black;
                cursor: pointer;
            }
            .button:hover {
                border: 2px solid #000;
                background: #fff;
                color: #000;
            }
            b {
                font-size: 12px;
            }
            a {
                text-decoration: none;
            }
        `}
        </style>
        <a href={href}>
            <div className="button">
                <b>{text}</b>
            </div>
        </a>
    </div>
)

Cta.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}
export default Cta