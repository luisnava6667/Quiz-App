import { category } from '../helpers/arrayCategory'
import { CategoryCard } from './CategoryCard'

export const CategoryList = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
      {category.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  )
}
