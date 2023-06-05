// Write your code here

import './index.css'

const TabItem = props => {
  const {details, setActiveTabId, isActive} = props
  const {displayText, tabId} = details

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabClassName = isActive ? 'addBottom ' : 'tabButton'

  return (
    <li className="tabname">
      <button className={tabClassName} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
