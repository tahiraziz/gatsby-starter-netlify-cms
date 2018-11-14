import React from 'react'
import Link from 'gatsby-link'
import './footer.scss'

const Footer = () => (
    <footer>
        <a class="home" href="http://alphalambdamu.org"></a>
        <p>Alpha Lambda Mu is a registered 501(c)3 non-profit organization, operating under Tax ID 46-2518412. All rights reserved. Established 2013 at the University of Texas at Dallas.</p>
        <div class="social">
            <a class="fb" href="http://fb.com/AlphaLambdaMu" target="_blank"></a>
            <a class="tw" href="http://twitter.com/AlphaLambdaMu" target="_blank"></a>
            <a class="ig" href="http://instagram.com/AlphaLambdaMu" target="_blank"></a>
            <a class="em" href="mailto:contact@alphalambdamu.org" target="_blank"></a>
        </div>
    </footer>
)

export default Footer