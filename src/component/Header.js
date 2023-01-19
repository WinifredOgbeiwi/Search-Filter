import React from "react";
import Logo from './Logo.png'
function Header() {
  return (
  <>
  <header>
    <img src={Logo} alt="I'made Logo"/>
    <ul>
        <li>
            <a href= 'https://github.com/i-made-web 'target='_blank'><i class="fa-brands fa-square-github"></i></a>
            </li>
        <li>
            <a href="https://www.linkedin.com/in/winifred-imade-ogbeiwi-792b3a200/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
            </li>
        <li>
            <a href="https://twitter.com/winifredogbeiwi" target='_blank'><i class="fa-brands fa-square-twitter"></i></a>
            </li>

    </ul>
  </header>
  </>
  )
}

export default Header