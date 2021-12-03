import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {
  bannerClass,
  triangle1,
  triangle2,
  bannerImage,
  bannerContent,
} from './banner.module.scss';

const Banner = () => {
  return (
    <div className={bannerClass}>
      <div className={triangle1}></div>
      <StaticImage
        className={bannerImage}
        imgStyle={{ objectPosition: '20% 0%' }}
        src="../images/banner1.png"
        aspectRatio={1}
        transformOptions={{ cropFocus: 'top' }}
      />
      <div className={bannerContent}>
        <div className="text-light">
          <h1 className="display-1 text-light">TIM RUESINK</h1>
          <h5 className="fw-light">
            <span className="fw-light text-secondary">Mechanical Engineer</span>{' '}
            by Training
          </h5>
          <h5 className="fw-light">
            <span className="fw-light text-secondary">Software Developer</span>{' '}
            by Passion
          </h5>
          <button className="btn btn-secondary me-2 my-2">Contact Me</button>
          <a href="#projects" className="btn btn-outline-light my-2">
            Projects
          </a>
        </div>
      </div>
      <div className={triangle2}></div>
    </div>
  );
};

export default Banner;
