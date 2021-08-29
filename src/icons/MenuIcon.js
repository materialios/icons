import IconWrapper from '../IconWrapper'

const MenuIcon = (props = {}) => {
  return (
    <IconWrapper props={props}>
      <svg className='MenuIcon' fill='inherit' width='24px' height='24px'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
      </svg>
    </IconWrapper>
  )
}

export default MenuIcon
