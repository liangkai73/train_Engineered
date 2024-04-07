import style from '../index.module.scss'

export default function Heard(props: any) {
  const { handleSetType, types } = props
  function changeLan(index: number) {
    let newtypes = [...types]
    newtypes = newtypes.map((item, index2) => {
      if (index == index2) {
        item.isActive = true
        return item
      } else {
        item.isActive = false
        return item
      }
    })
    handleSetType(newtypes)
  }

  return (
    <div className={`${style['page-head']} flex_r`}>
      <ul className='flex_r' style={{ width: '300px' }}>
        {types.map((item: any, index: number) => {
          return (
            <li className={`flex1 flex_r ${item.isActive && 'text-[red]'}`} key={item.code}>
              <a
                href={'#' + item.code}
                onClick={() => {
                  changeLan(index)
                }}
              >
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
