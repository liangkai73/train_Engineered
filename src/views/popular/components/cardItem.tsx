import { useEffect, useRef } from 'react'
import Img from '@/assets/placeholder.png'
import SvgIcon from '@/components/icon'

export default function CardItem(props: any) {
  const { className, data, index, isWatchScoll = false, handleGetPopular } = props
  const itemRef = useRef(null)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const imageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const dom: any = entry.target
          dom.src = dom.getAttribute('data-src')
          if (isWatchScoll) {
            const params = {
              page: (index + 1) / 10 + 1
            }
            handleGetPopular(params)
          }

          imageObserver.unobserve(dom)
        }
      })
    })
    imageObserver.observe(itemRef.current as any)
  }, [isWatchScoll])

  return (
    <div className={`flex_c pr-[16px] mt-[16px] ${className}`}>
      <div className='bg-[#ddd] w-full px-3 py-3'>
        <div className='flex_c'>
          <p className='text-[24px] py-3'>#{index + 1}</p>
          <div className='w-[50vw] h-[50vw] sm:w-[30vw] sm:h-[30vw] md:w-[20vw] md:h-[20vw] lg:w-[15vw] lg:h-[15vw]'>
            <img
              ref={itemRef}
              className='aspect-auto object-cover w-full h-full'
              src={Img}
              data-src={data.owner.avatar_url}
              alt=''
            />
          </div>

          <span className='text-[#ca3838] text-lg  mt-3 font-[600]'>{data.name}</span>
        </div>
        <div className='flex_c_s' style={{ width: '100%' }}>
          <div className='flex_r_s mt5 px-2 font-[600]'>
            <SvgIcon iconName='user' height='20px' width='20px' color='#ea873e'></SvgIcon>
            <span>{data.name}</span>
          </div>
          <div className='flex_r_s mt5 px-2'>
            <SvgIcon iconName='star' height='20px' width='20px' color='yellow'></SvgIcon>
            <span>{data.stargazers_count} &nbsp;</span>
            <span>stars</span>
          </div>
          <div className='flex_r_s mt5 px-2'>
            <SvgIcon iconName='fork' height='20px' width='20px'></SvgIcon>
            <span>{data.forks_count}&nbsp;</span>
            <span>forks</span>
          </div>
          <div className='flex_r_s mt5 px-2'>
            <SvgIcon iconName='dangerous' height='20px' width='20px' color='#e75d5d'></SvgIcon>
            <span>{data.open_issues_count}&nbsp;</span>
            <span>issues</span>
          </div>
        </div>
      </div>
    </div>
  )
}
