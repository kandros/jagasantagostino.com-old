import Header from '../components/header'
import Head from 'next/head'
import Avatar from '../components/avatar'
import 'glamor/reset'
import HireMeButton from '../components/hire-me-button'
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
        margin: 120px auto 0;
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
        opacity: 1;
      }
      @keyframes slidein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      .accent {
        font-size: 22px;
        color: rgba(1, 169, 255, 0.54);
      }
      .socials-wrapper {
        display: flex;
        margin-top: 80px;
        justify-content: center;
      }

      .hire-me {
        margin-top: 80px;
        display: flex;
        justify-content: center;
      }

      @media (max-width: 768px) {
        .main {
          font-size: 80%;
          flex-direction: column;
          margin-top: 0px;
        }
        .socials-wrapper {
          padding: 16px;
          margin-top: 60px;
          margin-bottom: 16px;
        }
      }

      @media (min-width: 768px) {
        .main {
          animation-duration: 2s;
          animation-name: slidein;
        }
      }
    `}</style>
    <div className="page">
      <Head>
        <title>Jaga Santagostino - Home </title>
      </Head>
      <Header />
      <div className="main">
        <h1>
          Jaga <br />
          Santagostino <br />
          <span className="accent">freelance</span> Fullstack <br />
          <span className="accent">javascript</span> Developer <br />
          <span className="accent">&& </span> Trainer <br />
        </h1>
        <Avatar src="/static/me-min.jpg" />
      </div>

      <div className="hire-me">
        <HireMeButton />
      </div>

      <div className="socials-wrapper">
        <Socials />
      </div>
    </div>
  </div>
)
