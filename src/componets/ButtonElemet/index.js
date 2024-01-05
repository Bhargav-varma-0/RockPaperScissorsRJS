const ButtonElement = props => {
  const {choicesListItem, mySelectedItem, testid} = props
  return (
    <button
      className="image-button grid-item "
      type="button"
      data-testid={testid}
      onClick={() => mySelectedItem(choicesListItem)}
    >
      <img
        className="game-img"
        src={choicesListItem.imageUrl}
        alt={choicesListItem.id}
      />
    </button>
  )
}

export default ButtonElement
