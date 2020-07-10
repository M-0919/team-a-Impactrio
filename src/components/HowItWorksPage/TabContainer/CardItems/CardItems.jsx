import React from "react"
import "./cardItems.scss"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
export const CardItems = ({ array }) => {
  const cards = array.map((item, index) => (
    <Card key={item.title}>
      <Card.Body>
        <Card.Title className="how-tabs__card-items__title">
          {item.title}
        </Card.Title>
        <Card.Img src={item.icon} className="w-50 p-3" />
        <Card.Text className="how-tabs__card-items__discription">
          <span>{item.discription}</span>
        </Card.Text>
      </Card.Body>
      <span className="how-tabs__card-items__number">{index + 1}</span>
    </Card>
  ))
  return (
    <div className="how-tabs__card-items pb-5">
      <CardDeck>{cards}</CardDeck>
    </div>
  )
}

export default CardItems
