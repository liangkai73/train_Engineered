import style from '../index.module.scss'

export default function Heard(props: any) {
  const { handleSetType } = props
  const arr = [
    { name: 'All', type: 'all' },
    { name: 'JavsScript', type: 'javascript' },
    { name: 'Ruby', type: 'ruby' },
    { name: 'Java', type: 'java' },
    { name: 'Css', type: 'css' }
  ]
  function changeLan(type: string) {
    handleSetType(type)
  }

  return (
    <div className={`${style['page-head']} flex_r`}>
      <ul className='flex_r' style={{ width: '300px' }}>
        {arr.map(item => {
          return (
            <li className='flex1 flex_r' key={item.type}>
              <a
                href={'#' + item.type}
                onClick={() => {
                  changeLan(item.type)
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
