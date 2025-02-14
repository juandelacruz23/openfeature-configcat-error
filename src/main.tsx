import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { OpenFeature, OpenFeatureProvider } from '@openfeature/react-sdk'
import { ConfigCatWebProvider } from '@openfeature/config-cat-web-provider'

const configCatProvider = ConfigCatWebProvider.create(import.meta.env.VITE_APP_CONFIGCAT_KEY);

OpenFeature.setProvider(configCatProvider);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OpenFeatureProvider>
      <App />
    </OpenFeatureProvider>
  </StrictMode>,
)
