// Write your code here
import './index.css'

const AppItem = props => {
  const {cardDetails} = props
  const {appName, imageUrl} = cardDetails
  return (
    <li className="li">
      <img src={imageUrl} alt={appName} className="imageItem" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
