/* eslint-disable no-extra-semi */
import Head from './components/head'
import CardItem from './components/cardItem'
import { message } from 'antd'
import style from './index.module.scss'
import Navbar from '@/layout/navBar'
import Api from '@/api'

import { useEffect, useState } from 'react'

const initTypes = [
  {
    isActive: false,
    code: 'all',
    name: 'All'
  },
  {
    isActive: false,
    code: 'javascript',
    name: 'Javascript'
  },
  {
    isActive: false,
    code: 'ruby',
    name: 'Ruby'
  },
  {
    isActive: false,
    code: 'java',
    name: 'Java'
  },
  {
    isActive: false,
    code: 'css',
    name: 'Css'
  }
]
const hash: string = window.location.hash.substring(1) || 'all'
initTypes.forEach(n => {
  if (n.code == hash) {
    n.isActive = true
  }
})

let listParams = {
  q: 'stars:>1',
  sort: 'stars',
  order: 'desc',
  page: 1,
  per_page: 10
}

const dataCache: any = {
  all: [],
  javascript: [],
  ruby: [],
  java: [],
  css: []
}

export default function Popular() {
  const [type, setType] = useState(initTypes)
  const [list, setList] = useState<any[]>([])

  // effect => type
  useEffect(() => {
    console.log(dataCache)
    const activeLan = type.filter(i => i.isActive)[0] || {
      isActive: false,
      code: 'all',
      name: 'All'
    }

    const queryStr = activeLan.code == 'all' ? 'stars:>1' : `stars:>1 language:${activeLan.code}`

    if (dataCache[activeLan.code].length > 0) {
      const newList = [...dataCache[activeLan.code]]
      setList(newList)
    } else {
      listParams = {
        ...listParams,
        ...{
          q: queryStr,
          page: 1,
          per_page: 10
        }
      }
      Api.popular
        .getGithubSearchList(listParams)
        .then(res => {
          res[res.length - 1].isWatchScoll = true
          dataCache[activeLan.code] = res
          setList(res)
        })
        .catch(err => {
          message.error(err)
        })
    }
  }, [type])

  function getMoreData(params: any) {
    listParams = { ...listParams, ...params }
    Api.popular
      .getGithubSearchList(listParams)
      .then(res => {
        const newList: any = [...list, ...res]
        newList.forEach((item: any) => {
          item.isWatchScoll = false
        })
        newList[newList.length - 1].isWatchScoll = true
        const activeLanCode: string = type.filter(i => i.isActive)[0].code
        dataCache[activeLanCode] = newList
        setList(newList)
      })
      .catch(err => {
        message.error(err)
      })
  }

  return (
    <div className={style['page-view']}>
      <Navbar type='popular'></Navbar>
      <Head types={type} handleSetType={setType}></Head>
      <div className='flex flex-row flex-wrap justify-around'>
        {list.map((item, index) => {
          return (
            <CardItem
              data={item}
              index={index}
              className='basis-[100%] sm:basis-[50%] md:basis-[33.3%] lg:basis-[25%]'
              key={type.filter(i => i.isActive)[0].code + item.id + item.forks}
              isWatchScoll={item.isWatchScoll}
              handleGetPopular={getMoreData}
            ></CardItem>
          )
        })}
      </div>
    </div>
  )
}
