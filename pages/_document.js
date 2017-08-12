import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import GoogleAnalytics from '../components/google-analytics.js'

export default class MyDocument extends Document {
static getInitialProps (ctx) {
   return Document.getInitialProps(ctx)
}

    render() {
        return (
            <html>
            <style jsx>{`
            body {
                font-family: sans-serif
            }
            `}

            </style>
            <Head>
                <title>Jaga Santagostino</title>
                <meta name="description" content="freelance javascript developer and trainer with focus on React ecosystem" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <GoogleAnalytics/>
            </Head>
            <body className="custom_class">
            {this.props.customValue}
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}
