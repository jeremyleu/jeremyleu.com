import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { Global } from '@emotion/core';
import { Main, globalStyles } from './index.styles';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Helmet
      title="Jeremy Leu"
      link={[
        { rel: 'stylesheet', href: 'https://use.typekit.net/mdx0cer.css' },
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
          integrity:
            'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
          crossOrigin: 'anonymous',
        },
      ]}
    />
    <Global styles={globalStyles} />
    <Main>{children}</Main>
  </>
);

export default Layout;
