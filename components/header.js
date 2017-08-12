import React from 'react'
import HireMeButton from './hire-me-button'
import Link from 'next/link'
import ReactTooltip from 'react-tooltip'


const Header = () => (
    <div>
        <style>{`
            nav {
                max-width: 950px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding: 16px 0;
            }
            .sources {
                font-size: 14px;
                margin-right: auto;
            }
            .source-link {
                color: rgba(1, 169, 255, 0.54);
                text-decoration: none;
            }
            .link {
                color: rgba(1, 169, 255, 0.54);
                margin-right: 50px;
                text-decoration: none;
            }
            @media (max-width: 768px) {
                .sources {
                    position: absolute;
                    top: 6px;
                    right: 12px;
                }
            }
        `}
        </style>

        <nav>
            <div data-tip data-for="sources" className="sources">(<a target="_blank" href="https://github.com/kandros/jagasantagostino.com" className="source-link">sources</a>)</div>
            {/*<Link href="/about" className="link"><a className="link">about</a></Link>*/}
            {/*<a target="_blank" href="//blog.jagasantagostino.com" className="link">blog</a>*/}
            {/*<Link href="/open-source" className="link"><a className="link">open-source</a></Link>*/}
            {/*<Link href="/contacts" className="link"><a className="link">contacts</a></Link>*/}
            <ReactTooltip id="sources" effect="solid" place="bottom">
                <span>Open Source 🎉🎉🎉</span>
            </ReactTooltip>

        </nav>
    </div>
)

export default Header
