import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactIScroll from 'react-iscroll';
import IScroll from 'iscroll';

import Header from '../components/header';
import './index.scss';

const Layout = ({ children, data }) => (
  <ReactIScroll
    iScroll={IScroll}
    options={{ mouseWheel: true, scrollbars: false, scrollX: true }}
    onScrollStart={() => { console.log('hi'); }}
  >
    <div className="scroll-container">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
        link={[
          { rel: 'stylesheet', href: 'https://use.typekit.net/mdx0cer.css' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display:700' },
        ]}
      />
      {children()}
      <div className="line" />
    </div>
  </ReactIScroll>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
