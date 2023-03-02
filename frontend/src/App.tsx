import React, { useState } from 'react'

import theme, {darkTheme} from './ui/themes/theme'
import { ThemeProvider } from '@mui/material/styles'

import Footer from './ui/components/surface/Footer/Footer';
import Header from './ui/components/surface/Header/Header';

import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';

import { AppContainer } from './ui/styles/pages/app.styled';

function App() {
  const [stateBoolean, SetStateBoolean] = useState(true);
  const [stateTheme, setStateTheme] = useState(theme);

  return (
    <>
      <ThemeProvider theme={stateBoolean ? theme : darkTheme }>
        <AppContainer>
          <div>
            <Header />
            <main>
              <RouterProvider router={routers} />
            </main>
          </div>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  )
}

export default App
