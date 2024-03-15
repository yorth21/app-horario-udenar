import diasMock from '@/mocks/dias.json'
import CardCourse from './components/CardCourse'

function Home () {
  console.log(diasMock)

  return (
    <section className='p-6 flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <p className='text-2xl font-semibold'>Bienvenidx</p>
        <p className='-mt-2 text-xl capitalize text-stone-300'>{diasMock.nombreAlumno.toLowerCase()}</p>
      </div>

      <div className='flex w-full flex-col'>
        <div>
          <p className='text-2xl mb-2'>Lunes</p>

          <div className='flex flex-col gap-4'>
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home
