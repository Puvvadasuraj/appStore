import './index.css'

const TabItem = props => {
  const {tab, onChange, isActive} = props
  const {displayText, tabId} = tab
  const onClickFunction = () => {
    onChange(tabId)
  }
  const name = isActive ? 'color' : ''
  return (
    <li>
      <button
        className={`text ${name}`}
        type="button"
        onClick={onClickFunction}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
