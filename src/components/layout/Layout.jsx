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
                        background: #34e89e;  /* fallback for old browsers */
                        background: -webkit-linear-gradient(to right, #0f3443, #34e89e);  /* Chrome 10-25, Safari 5.1-6 */
                        background: linear-gradient(to right, #0f3443, #34e89e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    }

                    h1, h2, h3 {
                        font-family: 'Rubik', sans-serif;
                    }

                    p {
                        font-family: 'Karla', sans-serif;
                    }
                `}
            />

            <Header />
            {children}
        </>
    );
}
 
export default Layout;