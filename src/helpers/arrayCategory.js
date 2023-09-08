import Ciencia from '../assets/ciencia.png'
import Deportes from '../assets/deportes.png'
import Filosofia from '../assets/filosofía.png'
import Geografia from '../assets/geografía.png'
import Historia from '../assets/historia.png'
import Literatura from '../assets/literatura.png'
import Tecnologia from '../assets/tecnología.png'
const style = (gradientColor) => {
  return `flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r ${gradientColor} transition-all hover:scale-105`
}
export const category = [
  {
    id: 1,
    name: 'Historia',
    img: Historia,
    class: style('from-sky-300 to-indigo-900'),
    link: 'historia'
  },
  {
    id: 2,
    name: 'Literatura',
    img: Literatura,
    class: style('from-amber-400 to-emerald-600'),
    link: 'literatura'
  },
  {
    id: 3,
    name: 'Deportes',
    img: Deportes,
    class: style('from-lime-400 to-teal-700'),
    link: 'deportes'
  },
  {
    id: 4,
    name: 'Ciencia',
    img: Ciencia,
    class: style('from-purple-500 to-pink-500'),
    link: 'ciencia'
  },
  {
    id: 5,
    name: 'Filosofía',
    img: Filosofia,
    class: style('from-red-400 to-zinc-400'),
    link: 'filosofía'
  },
  {
    id: 6,
    name: 'Tecnología',
    img: Tecnologia,
    class: style('from-violet-900 to-rose-500 '),
    link: 'tecnología'
  },
  {
    id: 7,
    name: 'Geografía',
    img: Geografia,
    class: style('from-cyan-200 to-lime-200'),
    link: 'geografía'
  }
]
