import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import './MatchCard.css'
import background from '/Users/khatana/Documents/cricker/CricketScoreCard/src/MCG.jpeg'

const MatchCard = () => {
    return(
        <Card className="bg-dark text-white">
    <Card.Img src={background} alt="Card image" className='image' />
    <Card.ImgOverlay>
      <Container className='d-flex justify-content-center align-items-center flex-column match-card'>
        {/* first row */}
          <Row className='match-card-info'>ICC Men's T20 World Cup- Australia vs Sri Lanka, 19th Match</Row>
          {/* second row */}
          <Row className='match-card-score'>
            <Col cassName='d-flex justify-content-flex-start' lg={4}>
              Austrilia
              Sri Lanka
            </Col>
            <Col cassName='d-flex justify-content-flex-end match-card-teams' lg={4}>
              156/3
              157/6 
            </Col>
          </Row>
          {/* 3rd row */}
          <Row className='match-card-footer'>
            Tue, 25 Oct, Austrilia won by 7 wickets. Man of the match: Marcus Stoinis
          </Row>
        </Container>
    </Card.ImgOverlay>
  </Card>
    )
}

export default MatchCard