import './icon.css'

const IconWrapper = ({ children, props = {} }) => {
  const {
    disabled = false,
    onClick = () => {}
  } = props

  return (
    <div
      className={`Icon${disabled ? ' disabled' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default IconWrapper
