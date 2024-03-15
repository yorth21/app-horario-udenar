import { Link } from 'react-router-dom'
import { Tooltip } from '@nextui-org/react'
import { FaCalendarDays, FaArrowRightFromBracket } from 'react-icons/fa6'

function Header () {
  return (
    <header className='sticky top-0 z-40 backdrop-blur border-b border-slate-50/[0.06]'>
      <div className='container max-w-6xl mx-auto py-2'>
        <div className='px-6 py-2 flex flex-row items-center justify-between gap-2'>
          <Link to='/' className='flex flex-row justify-center items-center gap-2'>
            <FaCalendarDays className='text-center text-3xl font-semibold' />
            <h1 className='text-center text-2xl sm:text-3xl'>Mi horario <b>Udenar</b></h1>
          </Link>

          <Tooltip content='Salir'>
            <button className='text-3xl' onClick={() => console.log('logout')}>
              <FaArrowRightFromBracket />
            </button>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}

export default Header
