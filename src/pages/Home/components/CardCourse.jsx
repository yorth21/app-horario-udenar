import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import Divider from '@/components/Divider'

function CardCourse () {
  const nombre = 'SISTEMAS BASADOS EN EL CONOCIMIENTO'
  const ubicacion = 'A208-BLOQUE 6 INGENIERIA'
  const tipo = 'Practica'
  const categoria = 'Flexibilidad'
  return (
    <div className='bg-secondary px-4 py-3 rounded-lg'>
      <p className='font-bold text-xl leading-6'>{capitalizeFirstLetter(nombre)}</p>
      <p className='my-2 text-stone-300'>{capitalizeFirstLetter(ubicacion)}</p>
      <div className='flex gap-2 mt-1'>
        <p className='bg-blue-700 px-2 rounded-lg text-sm font-bold'>{tipo}</p>
        <p className='bg-green-700 px-2 rounded-lg text-sm font-bold'>{categoria}</p>
      </div>
      <Divider />
      <p className='text-sm font-bold -mt-1'>10:00 AM - 11:00 AM</p>
    </div>
  )
}

export default CardCourse
