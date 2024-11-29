import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import Messages from './messages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
      <Route path="App" element={<App/>}/>
      <Route path="messages" element={<Messages/>}/>
    </Routes>
  </BrowserRouter>
)
