import IconWrapper from '../IconWrapper'

const ArrowBackIcon = (props = {}) => {
  return (
    <IconWrapper props={props}>
      <svg className='ArrowBackIcon' fill='inherit' width='24px' height='24px'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z' />
      </svg>
    </IconWrapper>
  )
}

export default ArrowBackIcon
