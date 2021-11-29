import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { headerClass, headerLink, headerLogo } from './header.module.scss';

const Header = () => {
  return (
    <div className={headerClass}>
      <Link className={headerLogo} to="/">
        <StaticImage src="../images/ruesink_logo_white.svg" width={70} />
      </Link>

      <div>
        <Link className={headerLink} to="/projects">
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
