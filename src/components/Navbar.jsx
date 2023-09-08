import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='bg-gray-900 py-5 flex justify-center'>
      <Link to='/'>
        <p className='text-white text-2xl font-bold hover:scale-110 transition-all duration-500'>
          QuizApp
        </p>
      </Link>
    </header>
  )
}
