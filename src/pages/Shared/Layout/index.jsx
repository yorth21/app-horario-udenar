import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import TabBar from './components/TabBar'

function Layout () {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-1 w-full max-w-6xl mx-auto flex flex-col'>
        <Outlet />
      </main>

      <TabBar />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
