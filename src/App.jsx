import { BrowserRouter, Routes } from 'react-router-dom'
import renderRoutes from '@/routes'
import { routes } from '@/routes/routes'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </BrowserRouter>
  )
}

export default App
