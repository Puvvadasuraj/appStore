import './index.css'

const AppItem = props => {
  const {Item} = props
  const {appName, imageUrl} = Item
  return (
    <li className="liElement">
      <img src={imageUrl} alt={appName} className="img" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
