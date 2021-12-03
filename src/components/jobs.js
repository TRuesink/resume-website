import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import {
  jobsClass,
  pathDiv,
  trail,
  jobDescription,
  jobDescriptionRight,
  jobHidden,
  jobPhoto,
  jobContent,
} from './jobs.module.scss';

const Jobs = () => {
  const [jobState, setJobState] = useState({
    job1: false,
    job2: false,
    job3: false,
    job4: false,
  });

  function changePath() {
    const screenHeight = document.documentElement.clientHeight;
    // console.log(screenHeight);
    const distFromTop = document
      .getElementById('jobSvg')
      .getBoundingClientRect().top;
    if (distFromTop - screenHeight / 2 < 0) {
      const pathLength = document.getElementById('jobPath').getTotalLength();
      // console.log(pathLength);
      const svgHeight = document
        .getElementById('jobSvg')
        .getBoundingClientRect().height;

      const progress =
        ((distFromTop - screenHeight / 2) / svgHeight) * pathLength;
      document.getElementById('jobPath').style.strokeDashoffset =
        pathLength + progress;
    }
    const job1Pos = document.getElementById('WMU').getBoundingClientRect().top;
    const job2Pos = document.getElementById('UW').getBoundingClientRect().top;
    const job3Pos = document.getElementById('PI').getBoundingClientRect().top;
    const job4Pos = document.getElementById('CAL').getBoundingClientRect().top;
    // console.log(job1Pos, job2Pos, job3Pos, job4Pos);

    const newState = { ...jobState };
    if (job1Pos - screenHeight / 2 < 0) {
      newState.job1 = true;
    } else {
      newState.job1 = false;
    }
    if (job2Pos - screenHeight / 2 < 0) {
      newState.job2 = true;
    } else {
      newState.job2 = false;
    }
    if (job3Pos - screenHeight / 2 < 0) {
      newState.job3 = true;
    } else {
      newState.job3 = false;
    }
    if (job4Pos - screenHeight / 2 < 0) {
      newState.job4 = true;
    } else {
      newState.job4 = false;
    }

    for (let job in newState) {
      if (newState[job] != jobState[job]) {
        console.log(job + 'changed');
        setJobState({ ...jobState, [job]: newState[job] });
      }
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', changePath);
    return () => {
      document.removeEventListener('scroll', changePath);
    };
  });

  return (
    <div className={jobsClass}>
      <div className={pathDiv}>
        <h1 className="text-end display-3">WHERE IVE BEEN</h1>
        <svg
          id="jobSvg"
          width="100%"
          height="100%"
          viewBox="0 0 300 2250"
          preserveAspectRatio="none"
        >
          <path
            id="jobPath"
            className={trail}
            d="M 300 0 l -150 0 Q 10 0 10 250 Q 10 400 150 500 Q 290 600 290 750 Q 290 900 150 1000 Q 10 1100 10 1250 Q 10 1400 150 1500 Q 290 1600 290 1750 Q 290 1900 225 2000 Q 150 2100 150 2250"
            stroke="black"
            fill="transparent"
          />
        </svg>
      </div>

      <div
        id="WMU"
        className={`${jobDescription} ${jobState.job1 ? null : jobHidden}`}
      >
        <StaticImage
          src="../images/wmu_icon.jpeg"
          className={jobPhoto}
          imgStyle={{ borderRadius: '50%' }}
        />
        <div className={jobContent}>
          <h1 className="display-6">Western Michigan University</h1>
          <h3 className="text-dark my-1">
            B.S. Mechanical Engineering{' '}
            <span className="fw-light">| 2012 - 2016</span>
          </h3>
          <p className="fw-light">
            I graduated <span className="fst-italic">summa cum laude</span> from
            Western Michigan Unviversity with a bachelors degree in mechanical
            engineering, where I was introduced to basic programming. Still, I
            believed my future was in mechanical engineering (specifically
            biomechanics).
          </p>
        </div>
      </div>
      <div
        id="UW"
        className={`${jobDescriptionRight} ${jobState.job2 ? null : jobHidden}`}
      >
        <div className={jobContent}>
          <h1 className="display-6">University of Wisconsin - Madison</h1>
          <h3 className="text-dark my-1">
            M.S. Mechanical Engineering{' '}
            <span className="fw-light">| 2017 - 2019</span>
          </h3>
          <p className="fw-light">
            I completed a Masters degree from UW - Madison (GPA: 3.85), also in
            mechanical engineering, with a focus in cardiovascular fluid
            dynamics. I published a first author paper, attended international
            conferences, and designed intricate experiments. But what I enjoyed
            most about research was (1), data analysis and (2) the interaction I
            had with people (conferences, presentations, collaborating, ect). I
            set out to do something where I could satisfy both of those
            interests.
          </p>
        </div>
        <StaticImage
          src="../images/uw_icon.jpeg"
          className={jobPhoto}
          imgStyle={{ borderRadius: '50%' }}
        />
      </div>
      <div
        id="PI"
        className={`${jobDescription} ${jobState.job3 ? null : jobHidden}`}
      >
        <StaticImage
          src="../images/PI_icon.jpeg"
          className={jobPhoto}
          imgStyle={{ borderRadius: '50%' }}
        />
        <div className={jobContent}>
          <h1 className="display-6">Plastic Ingenuity</h1>
          <h3 className="text-dark my-1">
            Sales Engineer <span className="fw-light">| 2019 - 2021</span>
          </h3>
          <p className="fw-light">
            Out of grad school I started working in technical sales for Plastic
            Ingenuity (PI), a custom thermoformer. In parallel, I began teaching
            myself to code. Eventually, my self-study intersected with my work
            at PI, as they needed a business-savy engineer to take over{' '}
            <strong>Salesforce</strong> development (Me!). Managing high-value
            opportunities put me in the perfect position to design a system that
            salespeople understood and found valuable.
          </p>
        </div>
      </div>
      <div
        id="CAL"
        className={`${jobDescriptionRight} ${jobState.job4 ? null : jobHidden}`}
      >
        <div className={jobContent}>
          <h1 className="display-6">Calimetrix</h1>
          <h3 className="text-dark my-1">
            Operations Engineer{' '}
            <span className="fw-light">| 2021 - Present</span>
          </h3>
          <p className="fw-light">
            My most recent landmark is Calimetrix: a Madison-based start-up
            selling magnetic resonance imaging (MRI) test objects. With only 8
            team members, my title as operations engineer hardly describes the
            extent of my responsibilites. I developed an inventory management
            application, created marketing collateral, helped develop an
            international compliance program, and manufactured product.
          </p>
        </div>
        <StaticImage
          src="../images/cal_icon.png"
          className={jobPhoto}
          imgStyle={{ transform: 'rotate(50%)' }}
          layout="fullWidth"
          imgStyle={{ borderRadius: '50%' }}
        />
      </div>
    </div>
  );
};

export default Jobs;
