import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import GoogleAnalytics from '../components/google-analytics.js'

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const {html, head} = renderPage()
        const styles = flush()
        return {html, head, styles}
    }

    render() {
        return (
            <html>
            <Head>
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