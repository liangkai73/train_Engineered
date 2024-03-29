import { useNavigate } from 'react-router-dom'

export default function Navbar({ type = 'popular' }) {
  const Navigate = useNavigate()
  function linkTo(url: string) {
    Navigate(url)
  }
  return (
    <div className='flex_r_s mt-10 text-[20px] font-[600] ml-10'>
      <p
        onClick={() => {
          linkTo('/train_Engineered/')
        }}
        className={`mr-3 cursor-pointer ${type == 'popular' && 'text-[red]'}`}
      >
        Popular
      </p>
      <p
        onClick={() => {
          linkTo('/train_Engineered/battle')
        }}
        className={`mr-3 cursor-pointer  ${type == 'battle' && 'text-[red]'}`}
      >
        Battle
      </p>
    </div>
  )
}
