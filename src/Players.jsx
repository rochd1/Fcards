import React, { useState } from "react";
import BasicExample from "./BasicExample";
import { Container, Row, Col } from "react-bootstrap";
const playerss = [
  {
    name: "Maradona",
    team: "Napli",
    nationality: "🇦🇷",
    jerseyNumber: "10",
    age: "28",
    image:
      "https://cdn.artphotolimited.com/images/5f60bc53bd40b8173f11e855/1000x1000/diego-maradona-playing-for-argentina-in-1986.jpg",
  },
  {
    name: "Pirlo",
    team: "Juvantus",
    nationality: "🇮🇹",
    jerseyNumber: "21",
    age: "28",
    image:
      "https://www.figc.it/media/88555/gettyimages-146335292.jpg?v=12174695",
  },
  {
    name: "Chetali",
    team: "Etoile Sahel",
    nationality: "🇹🇳",
    jerseyNumber: "8",
    age: "28",
    image:
      "https://cdn.al-ain.com/lg/images/2022/11/13/163-210932-tunisia-mondial-abdelmajid-chetali-3.jpeg",
  },
  {
    name: "Cruyff",
    team: "Ajax",
    nationality: "🇳🇱",
    jerseyNumber: "14",
    age: "28",
    image:
      "https://www.sportsbignews.com/wp-content/uploads/2021/07/og-ogogogogog-1.jpg",
  },
];
const Players = (props) => {
  //const [players, setplayerss] = useState(props.players);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col
          key={player.name}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="mb-4 d-flex align-items-stretch"
        >
          {playerss.map((playerss) => (
            <div>
              <BasicExample
                name={playerss.name}
                nationality={playerss.nationality}
                team={playerss.team}
                jerseyNumber={playerss.jerseyNumber}
                age={playerss.age}
                image={playerss.image}
              />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Players;
