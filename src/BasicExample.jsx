import Card from "react-bootstrap/Card";

function BasicExample(props) {
  return (
    <div style={{ display: "flex" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>name: {props.name} </Card.Title>
          <Card.Text>nationality: {props.nationality}</Card.Text>
          <Card.Text>team :{props.team} </Card.Text>
          <Card.Text>jerseyNumber :{props.jerseyNumber} </Card.Text>
          <Card.Text>age: {props.age} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
