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
    `}</style>
        <div className="page">
            <Header/>
            <Avatar url="/static/me-min.jpg"/>

        </div>
    </div>
)