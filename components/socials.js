import React from 'react'
import {SocialIcon} from 'react-social-icons'
import ReactTooltip from 'react-tooltip'

const Socials = () => (
    <div>
        <style jsx>{`
        div {
            position: relative;
            opacity: 1;
        }
        @keyframes slidein {
              from {
                margin-right: -240px;
                opacity: 0;
              }
            to {
                margin-right: 0px;
                opacity: 1;
            }
        }
        @media (min-width: 768px) {
         div {
            animation-duration: 2s;
            animation-name: slidein;
         }
        }
        `}
        </style>
        <div>
            <SocialIcon data-for="social" data-tip="Twitter" style={{marginRight: 12, marginTop: 12}} color="black" url="https://twitter.com/kandros5591"/>
            <SocialIcon data-for="social" data-tip="Github" style={{marginRight: 12, marginTop: 12}} color="black" url="https://github.com/kandros"/>
            <SocialIcon data-for="social" data-tip="Linkedin" style={{marginRight: 12, marginTop: 12}} color="black" url="https://www.linkedin.com/in/jaga-santagostino-500676b0/"/>
            <SocialIcon data-for="social" data-tip="Blog" style={{marginRight: 12, marginTop: 12}} color="black" network="medium" url="http://blog.jagasantagostino.com/"/>
            <SocialIcon data-for="social" data-tip="Email" style={{marginRight: 12, marginTop: 12}} color="black" network="email" url="mailto:info@jagasantagostino.com"/>

            <ReactTooltip id="social" effect="solid"/>
        </div>

    </div>
)

export default Socials