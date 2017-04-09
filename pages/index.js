import Header from '../components/header'
import Avatar from '../components/avatar'
import 'glamor/reset'
// https://evernote.com/media/img/products/web-clipper/icon-laptop@2x.png

export default () => (
    <div>
        <style jsx>{`
      {/*:global(body) {*/}
            {/*background: linear-gradient(90deg, #2DBE60 0%, #499b9e 100%);*/}
        {/*}*/}
        {/*.page {*/}
           {/*background: white;*/}
           {/*height: calc(100vh - 32px);*/}
           {/*margin: 16px;*/}
           {/*border-radius: 4px;*/}
           {/*box-shadow: 0 3px 10px 8px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);*/}
        {/*}*/}
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
        }
        .accent {
            font-size: 22px;
            color: rgba(1, 169, 255, 0.54);
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
        </div>
    </div>
)