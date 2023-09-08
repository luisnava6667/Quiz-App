import { Route, Routes } from 'react-router-dom'
import { GamePage, DificultyPage, HomePage } from './pages'
import { Navbar } from './components'

export const AppRouter = () => {
  return (
    <div className='bg-slate-300 h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/category/:category' element={<DificultyPage />} /> */}
        <Route path='/:category/dificulty' element={<DificultyPage />} />
        <Route path='/:category/:dificulty' element={<GamePage />} />
        {/* <Route path='/category/:category' element={<CategoryPage />} /> */}
      </Routes>
    </div>
  )
}
