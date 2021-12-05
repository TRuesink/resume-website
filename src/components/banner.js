import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { bannerClass, bannerImage, bannerContent } from './banner.module.scss';

const Banner = () => {
  return (
    <div className={bannerClass}>
      <div className={bannerContent}>
        <h1 className="display-1">TIM RUESINK</h1>
        <h5 className="fw-light">
          <span className="fw-light">Mechanical Engineer</span> by Training
        </h5>
        <h5 className="fw-light">
          <span className="fw-light">Software Developer</span> by Passion
        </h5>
        <div>
          <button className="btn btn-secondary me-2 my-2">Contact Me</button>
          <a href="#projects" className="btn btn-outline-dark my-2">
            Projects
          </a>
        </div>
      </div>
      <StaticImage
        className={bannerImage}
        src="../images/banner1.png"
        aspectRatio={1}
        transformOptions={{ cropFocus: 'top' }}
      />
    </div>
  );
};

export default Banner;
