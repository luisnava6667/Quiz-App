/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
export const CategoryCard = ({ category }) => {
  return (
    <Link to={`/${category.link}/dificulty`} className={`${category.class}`}>
      <div className='p-5 flex justify-center items-center'>
        <img src={category.img} alt={category.name} className='w-36' />
      </div>
      <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 text-center uppercase bg-opacity-60 p-3 px-5'>
        {category.name}
      </h1>
    </Link>
  )
}
