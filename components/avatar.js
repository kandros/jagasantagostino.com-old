import React, {PropTypes} from 'react'

const Avatar = ({src}) => (
    <div style={{zIndex: 10}}>
        <style jsx>{`
        img {
            background: #f7f7f7;
            max-width: 100%;
            display: block;
            border-radius: 2px;
            width: 230px;
            height: 230px;
            box-shadow: 13px 14px 20px 0px rgba(0, 0, 0, 0.22)
        }
        `}</style>
        <img src={src} alt="Photo of me"/>
    </div>
)

Avatar.propTypes = {
    src: PropTypes.string.isRequired
}
export default Avatar