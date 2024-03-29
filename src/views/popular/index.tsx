/* eslint-disable no-extra-semi */
import Head from './components/head'
import CardItem from './components/cardItem'
import style from './index.module.scss'
import Navbar from '@/layout/navBar'
import Api from '@/api'
import { useEffect, useRef, useState } from 'react'

export default function Popular() {
  type typeEnum = 'all' | 'javascript' | 'ruby' | 'java' | 'css'

  const hash: any = window.location.hash.substring(1)
  const [type, setType] = useState<typeEnum>(hash || 'all')
  const [list, setList] = useState<any[]>([])

  const cacheArrRef = useRef({
    all: [],
    javascript: [],
    ruby: [],
    java: [],
    css: []
  })
  const listParamsRef = useRef({
    q: 'stars:>1',
    sort: 'stars',
    order: 'desc',
    page: 1,
    per_page: 10
  })

  // effect => type
  useEffect(() => {
    if (cacheArrRef.current[type].length > 0) {
      console.log(type)
      console.log(cacheArrRef.current)
      setList(cacheArrRef.current[type])
    } else {
      const queryStr = type == 'all' ? 'stars:>1' : `stars:>1 language:${type}`
      listParamsRef.current = { q: queryStr, sort: 'stars', order: 'desc', page: 1, per_page: 10 }
      Api.popular.getGithubSearchList(listParamsRef.current).then(res => {
        res[res.length - 1].isWatchScoll = true
        cacheArrRef.current[type] = res
        setList(res)
      })
    }
  }, [type])

  function getMoreData(params: any) {
    listParamsRef.current = { ...listParamsRef.current, ...params }
    Api.popular.getGithubSearchList(listParamsRef.current).then(res => {
      res[res.length - 1].isWatchScoll = true
      const newList: any = [...list, ...res]
      cacheArrRef.current[type] = newList
      setList(newList)
    })
  }

  return (
    <div className={style['page-view']}>
      <Navbar type='popular'></Navbar>
      <Head handleSetType={setType}></Head>
      <div className='flex flex-row flex-wrap justify-around'>
        {list.map((item, index) => {
          return (
            <CardItem
              data={item}
              index={index}
              className='basis-[100%] sm:basis-[50%] md:basis-[33.3%] lg:basis-[25%]'
              key={type + item.id}
              isWatchScoll={item.isWatchScoll}
              handleGetPopular={getMoreData}
            ></CardItem>
          )
        })}
      </div>
    </div>
  )
}
