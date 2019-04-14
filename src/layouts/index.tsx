import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { Main } from './index.styles';

import './index.scss';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Helmet
      title="Jeremy Leu"
      link={[
        { rel: 'stylesheet', href: 'https://use.typekit.net/mdx0cer.css' },
      ]}
    />
    <Main>{children}</Main>
  </>
);

export default Layout;
