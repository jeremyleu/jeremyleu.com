import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';

import './index.scss';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Helmet
      title="Jeremy Leu"
      link={[
        { rel: 'stylesheet', href: 'https://use.typekit.net/mdx0cer.css' },
      ]}
    />
    <div
      css={css`
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        `}
      >
        {children}
      </div>
    </div>
  </>
);

export default Layout;
