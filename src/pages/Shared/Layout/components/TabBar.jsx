function TabBar () {
  return (
    <nav className='sticky bottom-0 z-40 backdrop-blur border-t border-slate-50/[0.06]'>
      <ul className='flex flex-row flex-nowrap items-center justify-between px-6 font-bold text-2xl'>
        <li className='w-full text-center py-2 hover:bg-stone-400/30 transition-background'>
          <button className='shadow-white drop-shadow-lg'>
            L
          </button>
        </li>
        <li className='w-full text-center py-2 hover:bg-stone-400/30 transition-background'>
          <button>
            M
          </button>
        </li>
        <li className='w-full text-center py-2 hover:bg-stone-400/30 transition-background'>
          <button>
            M
          </button>
        </li>
        <li className='w-full text-center py-2 hover:bg-stone-400/30 transition-background'>
          <button>
            J
          </button>
        </li>
        <li className='w-full text-center py-2 hover:bg-stone-400/30 transition-background'>
          <button>
            V
          </button>
        </li>
        <li className='w-full text-center py-2 hover:bg-stone-400/30 transition-background'>
          <button>
            S
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default TabBar
