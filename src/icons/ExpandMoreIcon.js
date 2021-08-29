import IconWrapper from '../IconWrapper'

const ExpandMoreIcon = (props = {}) => {
  return (
    <IconWrapper props={props}>
      <svg className='ExpandMoreIcon' fill='inherit' width='24px' height='24px'>
        <path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
        <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
      </svg>
    </IconWrapper>
  )
}

export default ExpandMoreIcon
