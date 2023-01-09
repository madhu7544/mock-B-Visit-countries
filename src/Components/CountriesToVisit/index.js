import './index.css'

const CountriesToVisit = props => {
  const {countryDetails, visitBtn} = props
  const {id, name, isVisited} = countryDetails

  const text = isVisited ? 'Visited' : 'Visit'

  const onClickVisitButton = () => {
    visitBtn(id)
  }

  return (
    <li className="visit-country-card">
      <p className="countryName">{name}</p>
      {isVisited ? (
        <p className="para">{text}</p>
      ) : (
        <button
          type="button"
          className="visit-button"
          onClick={onClickVisitButton}
        >
          {text}
        </button>
      )}
    </li>
  )
}

export default CountriesToVisit
