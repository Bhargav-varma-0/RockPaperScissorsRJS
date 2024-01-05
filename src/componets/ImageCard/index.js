const ImageCard = propps => {
  const {imageItem, title, altName} = propps
  return (
    <div className="column">
      <h1>{title}</h1>
      <img className="game-img" src={imageItem} alt={altName} />
    </div>
  )
}

export default ImageCard
