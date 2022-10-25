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
          <Row className='mb-3 match-card-info d-flex align-items-center flex-column'>Asia Cup - India vs Afghanistan</Row>
          {/* second row */}
          <Row className='match-card-score mb-2'>
            <Col className='d-flex align-items-flex-end'><span><img
              src="https://images.entitysport.com/assets/uploads/2020/12/India.png"
              alt=""
            /></span>IND</Col>
            <Col className='d-flex align-items-center'> 212/2</Col>
          </Row>
          <Row className='match-card-score mb-2'>
            <Col className='d-flex align-items-center'><span><img
              src="https://images.entitysport.com/assets/uploads/2020/12/Afghanistan.png"
              alt=""
            /></span> AFG</Col>
            <Col className='d-flex align-items-center'> 111/2</Col>
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