import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import App from '@/app.jsx'
import { StoreProvider } from '@/app/config/store'

import '@/app/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </MantineProvider>
)
