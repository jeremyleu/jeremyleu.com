import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactIScroll from 'react-iscroll';
import IScroll from 'iscroll';

import './index.scss';

const Layout = ({ children }) =>
  window ? (
    <ReactIScroll
      iScroll={IScroll}
      options={{ mouseWheel: true, scrollbars: false, scrollX: true }}
    >
      <div className="scroll-container">
        <Helmet
          title="Jeremy Leu's Portfolio"
          link={[
            { rel: 'stylesheet', href: 'https://use.typekit.net/mdx0cer.css' },
            {
              rel: 'stylesheet',
              href:
                'https://fonts.googleapis.com/css?family=Playfair+Display:700',
            },
          ]}
        />
        {children()}
        <div className="line" />
      </div>
    </ReactIScroll>
  ) : (
    <div className="scroll-container">
      <Helmet
        title="Jeremy Leu's Portfolio"
        link={[
          { rel: 'stylesheet', href: 'https://use.typekit.net/mdx0cer.css' },
          {
            rel: 'stylesheet',
            href:
              'https://fonts.googleapis.com/css?family=Playfair+Display:700',
          },
        ]}
      />
      {children()}
      <div className="line" />
    </div>
  );

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
