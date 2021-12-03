import {
  faBootstrap,
  faGithub,
  faGoogle,
  faNodeJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {
  projectsClass,
  projectIcon,
  projectContainer,
  project,
  projectInfo,
  projectImage,
} from './projects.module.scss';
import mongoIcon from '../images/mongodb_icon.svg';
import gatsbyIcon from '../images/gatsby.svg';
import expressIcon from '../images/expressjs-icon.svg';
import { Link } from 'gatsby';

const Projects = () => {
  return (
    <div id="projects" className={projectsClass}>
      <div className={projectIcon}>
        <FontAwesomeIcon icon={faCodeBranch} size="5x" />
      </div>
      <h1 className="display-4 text-center">PROJECTS</h1>
      <div className={projectContainer}>
        <div className={project}>
          <div className={projectImage}>
            <StaticImage src="../images/tim.jpg" aspectRatio={0.7} />
          </div>
          <div className={projectInfo}>
            <Link
              to="https://ruesink-portfolio.herokuapp.com"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <h6>timruesink.com</h6>
            </Link>
            <p>
              MERN stack website about me with username / password
              authentication
              <hr style={{ margin: '0.5rem' }} />
              <span>
                <FontAwesomeIcon icon={faReact} className="mx-1" />
                <FontAwesomeIcon icon={faNodeJs} className="mx-1" />
                <img
                  className="mx-1"
                  src={mongoIcon}
                  style={{ height: '1rem', verticalAlign: '-0.125em' }}
                />
                <img
                  className="mx-1"
                  src={expressIcon}
                  style={{ height: '1rem', verticalAlign: '-0.125em' }}
                />
                <FontAwesomeIcon icon={faSass} className="mx-1" />
                <FontAwesomeIcon icon={faBootstrap} className="mx-1" />
              </span>
              <hr style={{ margin: '0.5rem' }} />
              <span>
                <Link
                  to="https://github.com/TRuesink/02-personalPortfolio"
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                  <FontAwesomeIcon icon={faGithub} /> Github Repo
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className={project}>
          <div className={projectImage}>
            <StaticImage src="../images/jobs.jpg" aspectRatio={0.7} />
          </div>
          <div className={projectInfo}>
            <Link
              to="https://my-jobtracker.herokuapp.com"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <h6>Job Tracker</h6>
            </Link>
            <p>
              MERN stack application to handle job searches, with google
              authentication.
              <hr style={{ margin: '0.5rem' }} />
              <span>
                <FontAwesomeIcon icon={faReact} className="mx-1" />
                <FontAwesomeIcon icon={faNodeJs} className="mx-1" />
                <img
                  className="mx-1"
                  src={mongoIcon}
                  style={{ height: '1rem', verticalAlign: '-0.125em' }}
                />
                <img
                  className="mx-1"
                  src={expressIcon}
                  style={{ height: '1rem', verticalAlign: '-0.125em' }}
                />
                <FontAwesomeIcon icon={faSass} className="mx-1" />
                <FontAwesomeIcon icon={faGoogle} className="mx-1" />
              </span>
              <hr style={{ margin: '0.5rem' }} />
              <span>
                <Link
                  to="https://github.com/TRuesink/03-jobTracker"
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                  <FontAwesomeIcon icon={faGithub} /> Github Repo
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className={project}>
          <div className={projectImage}>
            <StaticImage src="../images/code.jpg" aspectRatio={0.7} />
          </div>

          <div className={projectInfo}>
            <Link
              to="https://timruesinkdev.com"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <h6>timruesinkdev.com</h6>
            </Link>
            <p>
              Statically generated Gatsby-React site with an emphasis on
              front-end design.
              <hr style={{ margin: '0.5rem' }} />
              <span>
                <FontAwesomeIcon icon={faReact} className="mx-1" />
                <img
                  className="mx-1"
                  src={gatsbyIcon}
                  style={{ height: '1rem', verticalAlign: '-0.125em' }}
                />
                <FontAwesomeIcon icon={faSass} className="mx-1" />
              </span>
              <hr style={{ margin: '0.5rem' }} />
              <span>
                <Link
                  to="https://github.com/TRuesink/resume-website"
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                  <FontAwesomeIcon icon={faGithub} /> Github Repo
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
