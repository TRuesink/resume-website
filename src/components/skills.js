import React, { useState, useEffect } from 'react';
import {
  skillsClass,
  jobTitle,
  jobTitleAnimate,
  skillsContainer,
  skill,
  skillIcon,
  skillFeatured,
  skillNotFeatured,
  skillIconFeatured,
  skillDescription,
  skillDescriptionContainer,
  skillDescriptionHidden,
  generalDescription,
} from './skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faNode,
  faSalesforce,
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const [elementState, changeElementState] = useState({
    softwareDev: false,
    lowCode: false,
    frontend: false,
    backend: false,
  });

  const changeVisibility = () => {
    const screenHeight = document.documentElement.clientHeight;
    const softwareDev = document.getElementById('softwareDev');

    const softwareDevPosition = softwareDev.getBoundingClientRect().top;
    const newState = { ...elementState };
    if (softwareDevPosition - screenHeight / 2 < 0) {
      newState.softwareDev = true;
    } else {
      newState.softwareDev = false;
    }
    for (let el in newState) {
      if (newState[el] != elementState[el]) {
        console.log(el + ' Changed');
        changeElementState({ ...elementState, [el]: newState[el] });
      }
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', changeVisibility);
    return () => {
      document.removeEventListener('scroll', changeVisibility);
    };
  });

  const onItemClick = (id) => {
    let newState = { ...elementState };
    for (let item in newState) {
      if (item === id) {
        newState[item] = !newState[item];
      } else if (item !== 'SoftwareDev') {
        newState[item] = false;
      }
    }

    changeElementState(newState);
    console.log(elementState);
  };

  return (
    <div className={skillsClass}>
      <div
        className={`${jobTitle} ${
          elementState.softwareDev ? jobTitleAnimate : null
        }`}
        id="softwareDev"
      >
        <FontAwesomeIcon icon={faCode} size="5x" />
      </div>
      <h1 className="display-4 text-center">SOFTWARE DEVELOPER</h1>
      <p className={`fw-light ${generalDescription}`}>
        Although circuitous, the above path led me to software engineering. The
        more I coded, the more I wanted to code - Take a look at the skills and
        projects I developed along the way!
      </p>
      <div className={skillsContainer}>
        <div className={skill}>
          <h1 className="display-6 text-center">Low Code</h1>
          <div
            className={`${skillIcon} ${
              elementState['lowCode'] ? skillIconFeatured : null
            }`}
            onClick={() => onItemClick('lowCode')}
          >
            <FontAwesomeIcon
              icon={faSalesforce}
              size="5x"
              className={`${
                elementState['lowCode'] ? skillFeatured : skillNotFeatured
              }`}
            />
          </div>
        </div>
        <div className={skill}>
          <h1 className="display-6 text-center">Frontend</h1>
          <div
            className={`${skillIcon} ${
              elementState['frontend'] ? skillIconFeatured : null
            }`}
            onClick={() => onItemClick('frontend')}
          >
            <FontAwesomeIcon
              icon={faReact}
              size="5x"
              className={`${
                elementState['frontend'] ? skillFeatured : skillNotFeatured
              }`}
            />
          </div>
        </div>
        <div className={skill}>
          <h1 className="display-6">Backend</h1>
          <div
            className={`${skillIcon} ${
              elementState['backend'] ? skillIconFeatured : null
            }`}
            onClick={() => onItemClick('backend')}
          >
            <div>
              <FontAwesomeIcon
                id="icon"
                icon={faNode}
                size="5x"
                className={`${
                  elementState['backend'] ? skillFeatured : skillNotFeatured
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={skillDescriptionContainer}>
        <div
          className={`${
            !elementState['lowCode'] &&
            !elementState['frontend'] &&
            !elementState['backend']
              ? skillDescription
              : skillDescriptionHidden
          }`}
        >
          <h1 className="display-6">Click above to learn more!</h1>
        </div>
        <div
          className={`${
            elementState['lowCode'] ? skillDescription : skillDescriptionHidden
          }`}
        >
          <h1 className="display-6">Low Code</h1>
          <h6>
            <span class="badge bg-primary">Salesforce</span>
            <span class="badge bg-primary mx-2">Zoho Creator</span>
          </h6>
          <p>
            Low code platforms provide tremendous value in business
            enviornments. Developers can create useful applications in a
            fraction of the time it takes to develop traditional custom apps. At
            Plastic Ingenuity, I developed custom Salesforce applications to
            guide salespeople through our unique sales funnel. At Calimetrix I
            used Zoho Creator, another low-code development platform, to create
            a custom inventory management application.
          </p>
        </div>
        <div
          className={`${
            elementState['frontend'] ? skillDescription : skillDescriptionHidden
          }`}
        >
          <h1 className="display-6">Frontend</h1>
          <h6>
            <span class="badge bg-primary">React</span>
            <span class="badge bg-primary ms-2">Gatsby</span>
            <span class="badge bg-primary ms-2">CSS / SASS</span>
            <span class="badge bg-primary ms-2">HTML</span>
            <span class="badge bg-primary ms-2">Bootstrap / UI Semantic</span>
            <span class="badge bg-primary ms-2">Gatsby</span>
          </h6>
        </div>
        <div
          className={`${
            elementState['backend'] ? skillDescription : skillDescriptionHidden
          }`}
        >
          <h1 className="display-6">Backend</h1>
          <h6>
            <span class="badge bg-primary">Node</span>
            <span class="badge bg-primary ms-2">Express</span>
            <span class="badge bg-primary ms-2">MongoDB</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Skills;
