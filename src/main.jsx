import * as React from 'react'
import { ChakraProvider,theme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)