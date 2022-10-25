import Card from 'react-bootstrap/Card';

const ScoreCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Text>
          Bangladesh Innings
        </Card.Text>
        <Card.Title>Card Title</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        
      </Card.Body>
    </Card>
    )

}

export default ScoreCard