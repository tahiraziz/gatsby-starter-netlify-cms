import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import './navbar.scss'

const Navbar = () => (
  <nav>
    <input id="menuToggle" type="checkbox" />
    <a class="home" href="#"></a>
    <label for="menuToggle"></label>
    <ul>
      <li><a href="intentions/">Intentions</a></li>
      <li><a href="governance/">Governance</a></li>
      <li><a href="apply/">Apply</a></li>
      <li><a href="members/">Members</a></li>
      <li class="social">
        <a class="fb" href="http://fb.com/AlphaLambdaMu" target="_blank"></a>
        <a class="tw" href="http://twitter.com/AlphaLambdaMu" target="_blank"></a>
        <a class="ig" href="http://instagram.com/AlphaLambdaMu" target="_blank"></a>
        <a class="em" href="mailto:contact@alphalambdamu.org" target="_blank"></a>
      </li>
    </ul>
  </nav>
)

export default Navbar
