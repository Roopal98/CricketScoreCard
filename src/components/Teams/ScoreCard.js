import Card from 'react-bootstrap/Card';

const ScoreCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Text>
          {props.country}
        </Card.Text>
        <Card.Title>{props.score}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        
      </Card.Body>
    </Card>
    )

}

export default ScoreCard     