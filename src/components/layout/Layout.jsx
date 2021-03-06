import React from 'react'
import { Global, css } from '@emotion/react';

import Header from './Header';

const Layout = ({ children }) => {
    return (
      <>
        <Global
          styles={css`
            * {
              margin: 0;
              padding: 0;
            }

            body {
              background: #FFF;
            }

            h1,
            h2,
            h3 {
              font-family: "Rubik", sans-serif;
            }

            p {
              font-family: "Karla", sans-serif;
            }
          `}
        />

        <Header />
        {children}
      </>
    );
}
 
export default Layout;