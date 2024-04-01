import SvgIcon from '@/components/icon'
import Navbar from '@/layout/navBar'
import { Button, Input, Space } from 'antd'
import { useState } from 'react'

export default function Battle() {
  return (
    <div>
      <Navbar type='battle'></Navbar>
      <div className='w-full h-full text-[20px] flex_c'>
        <div className='mt-20 w-full max-w-[1280px]'>
          <p className='text-center'>instructions</p>
          <div className='flex flex-row mt-10 w-full m-auto'>
            <div className='flex-1  flex flex-col items-center'>
              <p>Enter two Github users</p>
              <div className='w-[20vw] md:max-w-[250px] md:max-h-[250px]   h-[20vw] mt-5 bg-[#ddd] flex_r'>
                <SvgIcon iconName='users' width='60%' height='60%' color='#ffb66d'></SvgIcon>
              </div>
            </div>
            <div className='flex-1  flex flex-col items-center'>
              <p>Battle</p>
              <div className='w-[20vw] md:max-w-[250px] md:max-h-[250px] h-[20vw] mt-5 bg-[#ddd] flex_r'>
                <SvgIcon iconName='battle' width='60%' height='60%' color='#333'></SvgIcon>
              </div>
            </div>
            <div className='flex-1   flex flex-col items-center'>
              <p>See the winner</p>
              <div className='w-[20vw] md:max-w-[250px] md:max-h-[250px] h-[20vw] mt-5 bg-[#ddd] flex_r'>
                <SvgIcon iconName='winner' width='60%' height='60%' color='#ffcf2c'></SvgIcon>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-20 w-full max-w-[1440px]'>
          <p className='text-center mt-2'>Players</p>
          <div className='flex_r w-full mt-10'>
            <div className='flex1 flex_c_s px-5'>
              <p>Player1</p>
              <div className='w-full flex_r_s'>
                <Space.Compact style={{ width: '100%' }}>
                  <Input
                    defaultValue='github username'
                    onChange={() => {
                      seta
                    }}
                  />
                  <Button
                    type='primary'
                    onClick={() => {
                      handleGetWinner
                    }}
                  >
                    Submit
                  </Button>
                </Space.Compact>
              </div>
            </div>
            <div className='flex1 flex_c_s px-5'>
              <p>Player2</p>
              <div className='w-full flex_r_s'>
                <Space.Compact style={{ width: '100%' }}>
                  <Input defaultValue='github username' />
                  <Button type='primary'>Submit</Button>
                </Space.Compact>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
