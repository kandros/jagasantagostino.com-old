import React from 'react'
import {SocialIcon} from 'react-social-icons'
import ReactTooltip from 'react-tooltip'

const Socials = () => (
    <div>
        <style jsx>{`
        div {
            position: relative;
            animation-duration: 2s;
            animation-name: slidein;
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
        `}
        </style>
        <div>
            <SocialIcon data-for="social" data-tip="Twitter" style={{marginLeft: 16}} color="black" url="https://twitter.com/kandros5591"/>
            <SocialIcon data-for="social" data-tip="Github" style={{marginLeft: 16}} color="black" url="https://github.com/kandros"/>
            <SocialIcon data-for="social" data-tip="Linkedin" style={{marginLeft: 16}} color="black" url="https://www.linkedin.com/in/jaga-santagostino-500676b0/"/>
            <SocialIcon data-for="social" data-tip="Blog" style={{marginLeft: 16}} color="black" network="medium" url="http://blog.jagasantagostino.com/"/>
            <SocialIcon data-for="social" data-tip="Email" style={{marginLeft: 16}} color="black" network="email" url="mailto:info@jagasantagostino.com"/>

            <ReactTooltip id="social" effect="solid"/>
        </div>

    </div>
)

export default Socials