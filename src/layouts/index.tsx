import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { Global } from '@emotion/core';
import { Main, globalStyles } from './index.styles';

import './index.scss';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Helmet
      title="Jeremy Leu"
      link={[
        { rel: 'stylesheet', href: 'https://use.typekit.net/mdx0cer.css' },
      ]}
    />
    <Global styles={globalStyles} />
    <Main>{children}</Main>
  </>
);

export default Layout;
