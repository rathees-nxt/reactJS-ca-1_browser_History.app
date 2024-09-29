import './index.css'

const BrowserItem = props => {
  const {browserDetails, deleteHistory} = props
  const {domainUrl, logoUrl, timeAccessed, title, id} = browserDetails

  const onClickDeleteIcon = () => {
    deleteHistory(id)
  }

  return (
    <>
      <li className="history-list-item">
        <div className="first-container">
          <div className="datecontent-container">
            <p className="time-content">{timeAccessed}</p>
            <div className="logo-domain-container">
              <img className="logo-img" src={logoUrl} alt="domain logo" />
              <div className="domain-container">
                <p className="title">{title}</p>
                <p className="domain">{domainUrl}</p>
              </div>
            </div>
          </div>
          <button
            className="delete-btn"
            type="button"
            data-testid="delete"
            onClick={onClickDeleteIcon}
          >
            <img
              className="delete-img"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </>
  )
}

export default BrowserItem
