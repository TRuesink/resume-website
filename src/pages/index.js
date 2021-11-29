import React from 'react';
import Banner from '../components/banner';
import Jobs from '../components/jobs';
import Layout from '../components/layout';
import Projects from '../components/projects';
import Skills from '../components/skills';

const Index = () => {
  return (
    <Layout>
      <Banner />
      <Jobs />
      <Skills />
      <Projects />
    </Layout>
  );
};

export default Index;
