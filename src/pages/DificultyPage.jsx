import { Link, useParams } from 'react-router-dom'

export const DificultyPage = () => {
  const params = useParams()
  return (
    <div className='w-full mt-60 flex flex-col gap-5 justify-center items-center text-4xl  uppercase'>
      <Link
        to={`/${params.category}/easy`}
        className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 w-1/6'>
        Easy
      </Link>
      <Link
        to={`/${params.category}/medium`}
        className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 w-1/6'>
        Medium
      </Link>
      <Link
        to={`/${params.category}/hard`}
        className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 w-1/6'>
        Hard
      </Link>
    </div>
  )
}
