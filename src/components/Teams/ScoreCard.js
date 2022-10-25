import Card from 'react-bootstrap/Card';
import './ScoreCard.css'

const ScoreCard = (props) => {
    return (
        <Card sx={{ border: '1px solid red' }} className='team-score' style={{ width: '-webkit-fill-available','align-items':'center' }}>
      <Card.Body>
      <Card.Text>
        <span><img
              src={props.image}
              alt=""
            /></span>
          {props.country}
        </Card.Text>
        <Card.Title>{props.score}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        
      </Card.Body>
    </Card>
    )

}

export default ScoreCard     