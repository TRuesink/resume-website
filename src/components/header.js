import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';

import {
  headerClass,
  scrollUp,
  scrollDown,
  headerLink,
  headerLogo,
  logoImage,
} from './header.module.scss';

const Header = () => {
  const [scrollState, changeScrollState] = useState('top'); // top, scrollDown, scrollUp
  const [scrollPos, changeScrollPos] = useState(0);

  const changeHeader = () => {
    const pos = window.scrollY;
    if (pos > 100 && pos - scrollPos > 0 && scrollState !== 'scrollDown') {
      changeScrollState('scrollDown');
    }
    if (pos > 100 && pos - scrollPos <= 0 && scrollState !== 'scrollUp') {
      changeScrollState('scrollUp');
    }
    if (pos <= 100 && scrollState !== 'top') {
      changeScrollState('top');
    }
    changeScrollPos(pos);
  };

  useEffect(() => {
    document.addEventListener('scroll', changeHeader);
    return () => {
      document.removeEventListener('scroll', changeHeader);
    };
  });

  return (
    <div
      className={`${headerClass} ${
        scrollState === 'scrollDown' ? scrollDown : null
      } ${scrollState === 'scrollUp' ? scrollUp : null}`}
    >
      <Link className={headerLogo} to="/">
        <StaticImage
          src="../images/ruesink_logo_white.svg"
          className={logoImage}
          aspectRatio={1}
        />
      </Link>

      <div>
        <Link className={`${headerLink}`} to="/#projects">
          Projects
        </Link>
        <Link className={headerLink} to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
