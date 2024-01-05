import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ButtonElement from '../ButtonElemet'
import ImageCard from '../ImageCard'
// import {H1} from './styledComponet'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {isSelected: false, myEle: {}, random: {}, resultText: '', score: 0}

  determineWinner = (userChoice, computerChoice) => {
    if (userChoice.id === computerChoice.id) {
      return 'IT IS DRAW'
    }
    if (
      (userChoice.id === 'ROCK' && computerChoice.id === 'SCISSORS') ||
      (userChoice.id === 'PAPER' && computerChoice.id === 'ROCK') ||
      (userChoice.id === 'SCISSORS' && computerChoice.id === 'PAPER')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  getScore = resultText => {
    const {score} = this.state
    if (resultText === 'YOU WON') {
      return score + 1
    }
    if (resultText === 'YOU LOSE') {
      return score - 1
    }
    return score
  }

  mySelectedItem = selectedEle => {
    console.log(selectedEle)
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const random = choicesList[randomIndex]
    const resultText = this.determineWinner(selectedEle, random)
    const score = this.getScore(resultText)
    console.log(score)
    this.setState({
      myEle: selectedEle,
      random,
      resultText,
      score,
      isSelected: true,
    })
  }

  playAgine = () => {
    this.setState({
      isSelected: false,
    })
  }

  render() {
    const {isSelected, random, myEle, resultText, score} = this.state
    console.log(choicesList[0].id)
    return (
      <div className="main ">
        <div className="score">
          <div className="row h-inherit pd-10">
            <div className="column width-100px">
              <h1>Rock Paper Scissors</h1>
            </div>
            <div className="actualScore">
              <p className="m-0">Score</p>
              <p className="score-p">{score}</p>
            </div>
          </div>
        </div>
        <div className="game-div">
          {!isSelected ? (
            <div className="game-holder">
              <div className="game-body row-center">
                <div>
                  <ButtonElement
                    key="rockButton"
                    testid="rockButton"
                    choicesListItem={choicesList[0]}
                    mySelectedItem={this.mySelectedItem}
                  />
                </div>
                <div>
                  <ButtonElement
                    key="paperButton"
                    testid="paperButton"
                    choicesListItem={choicesList[1]}
                    mySelectedItem={this.mySelectedItem}
                  />
                </div>
              </div>
              <div className="single-item game-body row-center">
                <div>
                  <ButtonElement
                    key="scissorsButton"
                    testid="scissorsButton"
                    choicesListItem={choicesList[2]}
                    mySelectedItem={this.mySelectedItem}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="result">
              <div className="game-body row-center">
                <ImageCard
                  imageItem={myEle.imageUrl}
                  title="YOU"
                  altName="your choice"
                />
                <ImageCard
                  imageItem={random.imageUrl}
                  title="OPPONENT"
                  altName="opponent choice"
                />
              </div>
              <div className="column-center">
                <p>{resultText}</p>
                <button
                  className="replay-button"
                  type="button"
                  onClick={this.playAgine}
                >
                  PLAY AGAIN
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="popupContaiiner">
          <Popup
            modal
            trigger={
              <button className="trigger-button" type="button">
                RULES
              </button>
            }
          >
            {close => (
              <div className="popup-div">
                <button
                  className="trigger-button"
                  type="button"
                  onClick={() => close()}
                >
                  <span className="visually-hidden">Close</span>
                  <RiCloseLine />
                </button>
                <div className="w-100">
                  <img
                    className="popup-h"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default Home
