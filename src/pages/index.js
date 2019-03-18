import React from 'react';

import Layout from '../layouts';

import './index.scss';

const IndexPage = () => (
  <Layout>
    {() => (
      <div className="components-container">
        <div className="main-title">Jeremy Leu</div>
        <div className="sub-title">This site is under construction.</div>
      </div>
    )}
  </Layout>
);

export default IndexPage;
