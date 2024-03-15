import diasMock from '@/mocks/dias.json'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'

function Home () {
  console.log(diasMock)
  const nombre = 'SISTEMAS BASADOS EN EL CONOCIMIENTO'
  const ubicacion = 'A208-BLOQUE 6 INGENIERIA'
  const tipo = 'Practica'
  const categoria = 'Flexibilidad'

  return (
    <section className='p-6 flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <p className='text-2xl font-semibold'>Bienvenidx</p>
        <p className='-mt-2 text-xl capitalize'>{diasMock.nombreAlumno.toLowerCase()}</p>
      </div>

      <div className='flex w-full flex-col'>
        <div>
          <p className='text-2xl mb-2'>Lunes</p>
          <div className='bg-[#16181c] px-4 py-3 rounded-lg'>
            <p className='font-bold text-xl'>{capitalizeFirstLetter(nombre)}</p>
            <p className=''>{capitalizeFirstLetter(ubicacion)}</p>
            <div className='flex gap-2 mt-1'>
              <p className='bg-blue-700 px-2 rounded-lg text-sm font-bold'>{tipo}</p>
              <p className='bg-green-700 px-2 rounded-lg text-sm font-bold'>{categoria}</p>
            </div>
            <p className='text-end'>10:00 AM - 11:00 AM</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
