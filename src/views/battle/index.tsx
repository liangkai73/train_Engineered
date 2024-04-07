import SvgIcon from '@/components/icon'
import Navbar from '@/layout/navBar'
import Icon from '@/components/icon'
import api from '@/api'
import { Button, Input, Space } from 'antd'
import { useEffect, useRef, useState } from 'react'

const hash = window.location.hash
let initVal1 = ''
let initVal2 = ''
let initResult = false
if (hash.indexOf('player1') > 0 && hash.indexOf('player2') > 0) {
  initVal1 = hash.split('&&')[0]?.split('=')[1]
  initVal2 = hash.split('&&')[1]?.split('=')[1]
  initResult = true
}

export default function Battle() {
  const [val1, setVal1] = useState(initVal1)
  const [val2, setVal2] = useState(initVal2)
  const [loading1, setLoding1] = useState(false)
  const [loading2, setLoding2] = useState(false)
  const [info1, setInfo1] = useState<any>({})
  const [info2, setInfo2] = useState<any>({})
  const [isResult, setIsresult] = useState(initResult)

  function handleGetWinner() {
    if (val1 && val2) {
      window.location.hash = 'player1=' + val1 + '&&player2=' + val2
      setLoding1(true)
      setLoding2(true)
      api.popular.getGithubUser(val1).then(res => {
        setInfo1(res)
      })
      api.popular.getGithubUser(val2).then(res => {
        setInfo2(res)
        setIsresult(true)
      })
    }
  }

  const inputRef: any = useRef(null)

  function reset() {
    window.location.hash = ''
    setVal1('')
    setVal2('')
    setInfo1({})
    setInfo2({})
    setLoding1(false)
    setLoding2(false)
    setIsresult(false)
  }

  const keydownfn = function (e) {
    if (e.keyCode == 13) {
      document.getElementById('sure-btn')?.click()
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.input.addEventListener('keydown', keydownfn)
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.input.removeEventListener('keydown', keydownfn)
      }
    }
  }, [isResult])

  // 初始化
  useEffect(() => {
    if (isResult && val1 && val2) {
      handleGetWinner()
    }
  }, [])

  function Result() {
    return (
      <div className='w-full h-full overflow-hidden text-lg flex_c'>
        <div className='w-[60%] flex_r mt-20'>
          <span className='flex1'></span>
          <div className='w-[250px] bg-[#ccc] flex_c overflow-hidden'>
            <p className='mt20 text-xl'>{info1.stargazers_count > info2.stargazers_count ? 'Winner' : 'Loser'}</p>
            <div className='w-[200px] h-[200px]'>
              <img src={info1.owner?.avatar_url} className='w-full h-full' alt='' />
            </div>
            <p className='mt-5'>Scores:{info1.stargazers_count}</p>
            <p className='mt-5 text-[#009de4]'>{info1.name}</p>
            <div className='px-5 py-5 w-full'>
              <p className='mt-5 flex_r_s w-full'>
                <Icon iconName='plane' width='16px' height='16px' color='#000000' />
                <span>{info1.forks}</span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='jurassic-users' width='16px' height='16px' color='#000000' />
                <span>{info1.size}</span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='user-add' width='16px' height='16px' color='#000000' />
                <span>{info1.open_issues}</span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='fork' width='16px' height='16px' color='#000000' />
                <span>{info1.watchers}</span>
              </p>
            </div>
          </div>
          <span className='flex1'></span>
          <div className='w-[250px] bg-[#ccc] flex_c overflow-hidden'>
            <p className='mt20 text-xl'>{info1.stargazers_count > info2.stargazers_count ? 'Loser' : 'Winner'}</p>
            <div className='w-[200px] h-[200px]'>
              <img src={info2.owner?.avatar_url} className='w-full h-full' alt='' />
            </div>
            <p className='mt-5'>Scores:{info2.stargazers_count}</p>
            <p className='mt-5 text-[#009de4]'>{info2.name}</p>
            <div className='px-5 py-5 w-full'>
              <p className='mt-5 flex_r_s w-full'>
                <Icon iconName='plane' width='16px' height='16px' color='#000000' />
                <span>{info2.forks}</span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='jurassic-users' width='16px' height='16px' color='#000000' />
                <span>{info2.size}</span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='user-add' width='16px' height='16px' color='#000000' />
                <span>{info2.open_issues}</span>
              </p>
              <p className='flex_r_s w-full'>
                <Icon iconName='fork' width='16px' height='16px' color='#000000' />
                <span>{info2.watchers}</span>
              </p>
            </div>
          </div>
          <span className='flex1'></span>
        </div>
        <div className='w-full mt-10 text-center'>
          <Button type='primary' onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
    )
  }

  function Battle() {
    return (
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
                    ref={inputRef}
                    defaultValue='github username'
                    value={val1}
                    onChange={e => {
                      setVal1(e.target.value)
                    }}
                  />
                  <Button
                    loading={loading1}
                    id='sure-btn'
                    type='primary'
                    disabled={val1.length == 0 || val2.length == 0}
                    onClick={() => {
                      handleGetWinner()
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
                  <Input
                    defaultValue='github username'
                    value={val2}
                    onChange={e => {
                      setVal2(e.target.value)
                    }}
                  />
                  <Button
                    loading={loading2}
                    disabled={val1.length == 0 || val2.length == 0}
                    type='primary'
                    onClick={() => {
                      handleGetWinner()
                    }}
                  >
                    Submit
                  </Button>
                </Space.Compact>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar type='battle'></Navbar>
      {isResult ? Result() : Battle()}
    </div>
  )
}
