import Header from '../components/header'
import Avatar from '../components/avatar'
import 'glamor/reset'
import Socials from '../components/socials'

export default () => (
    <div>
        <style jsx>{`
        :global(html) {
            height: 100%;
        }
        :global(body) {
            height: 100%;
        }
        .main {
            margin: 200px auto 0;
            max-width: 950px;
            height: 100%;
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
        h1 {
            text-align: right;
            margin-right: 8px;
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
                margin-right: 8px;
                opacity: 1;
            }
        }
        .accent {
            font-size: 22px;
            color: rgba(1, 169, 255, 0.54);
        }
        .socials-wrapper {
            display: flex;
            margin-top: 180px;
            justify-content: center;
        }
    `}</style>
        <div className="page">
            <Header/>
            <div className="main">
                <h1>
                    Jaga <br/>
                    Santagostino <br/>
                    <span className="accent">freelance</span> Fullstack <br/>
                    <span className="accent">javascript</span> Developer <br/>
                    <span className="accent">&& </span> Trainer <br/>
                </h1>
                <Avatar src="/static/me-min.jpg"/>
            </div>

            <div className="socials-wrapper">
                <Socials />
            </div>
        </div>
    </div>
)