import Icon from '@/components/icon'
import { Button } from 'antd'
import Navbar from '@/layout/navBar'
export default function Result() {
  return (
    <div>
      <Navbar type='battle'></Navbar>
      <div className='w-full h-full overflow-hidden text-lg flex_c'>
        <div className='w-[60%] flex_r mt-20'>
          <span className='flex1'></span>
          <div className='w-[250px] bg-[#ccc] flex_c overflow-hidden'>
            <p className='mt20 text-xl'>Loser</p>
            <div className='w-[200px] h-[200px]'></div>
            <p className='mt-5'>Scores:123</p>
            <p className='mt-5 text-[#009de4]'>FaceBook</p>
            <div className='px-5 py-5 w-full'>
              <p className='mt-5 flex_r_s w-full'>
                <Icon iconName='plane' width='16px' height='16px' color='#000000' />
                <span>DEF DFPEFK FE </span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='jurassic-users' width='16px' height='16px' color='#000000' />
                <span>0</span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='user-add' width='16px' height='16px' color='#000000' />
                <span>0</span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='fork' width='16px' height='16px' color='#000000' />
                <span>0</span>
              </p>
            </div>
          </div>
          <span className='flex1'></span>
          <div className='w-[250px] bg-[#ccc] flex_c overflow-hidden'>
            <p className='mt20 text-xl'>Winner</p>
            <div className='w-[200px] h-[200px]'></div>
            <p className='mt-5'>Scores:123</p>
            <p className='mt-5 text-[#009de4]'>FaceBook</p>
            <div className='px-5 py-5 w-full'>
              <p className='mt-5 flex_r_s w-full'>
                <Icon iconName='plane' width='16px' height='16px' color='#000000' />
                <span>DEF DFPEFK FE </span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='jurassic-users' width='16px' height='16px' color='#000000' />
                <span>0</span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='user-add' width='16px' height='16px' color='#000000' />
                <span>0</span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='fork' width='16px' height='16px' color='#000000' />
                <span>0</span>
              </p>
            </div>
          </div>
          <span className='flex1'></span>
        </div>
        <div className='w-full mt-10 text-center'>
          <Button type='primary'>Reset</Button>
        </div>
      </div>
    </div>
  )
}
