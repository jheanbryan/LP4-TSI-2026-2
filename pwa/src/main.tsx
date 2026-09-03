import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//@ts-ignore
import { registerSW } from 'virtual:pwa-register'

registerSW({
  onRegisterSW(swUrl: string){
    console.log(`O service worker foi registrado em: ${swUrl}`);
  }

})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
