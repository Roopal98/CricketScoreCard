import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import './MatchCard.css'
import background from '../../MCG.jpeg'

const MatchCard = () => {
    return(
        <Card className="bg-dark text-white">
    <Card.Img src={background} alt="Card image" className='image' />
    <Card.ImgOverlay>
      <Container className='match-card'>
        {/* first row */}
          <Row className='match-card-info d-flex align-items-center flex-column'>ICC Men's T20 World Cup- Australia vs Sri Lanka, 19th Match</Row>
          {/* second row */}
          <Row className='match-card-score'>
            <Col lg={4}><span><img
              src="https://images.entitysport.com/assets/uploads/2020/12/India.png"
              alt=""
            /></span>IND</Col>
            <Col lg={4}> 212/2</Col>
          </Row>
          <Row className='match-card-score'>
            <Col lg={4}><span><img
              src="https://images.entitysport.com/assets/uploads/2020/12/Afghanistan.png"
              alt=""
            /></span> AFG</Col>
            <Col lg={4}> 111/2</Col>
          </Row>
          <Row className='match-card-footer d-flex align-items-center flex-column'>
            Tue, 25 Oct, India won by 100 runs. Man of the match: Virat Kohli
          </Row>
        </Container>
    </Card.ImgOverlay>
  </Card>
    )
}

export default MatchCard