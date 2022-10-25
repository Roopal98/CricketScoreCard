import Card from 'react-bootstrap/Card';
import './MatchCard.css'
const MatchCard = () => {
    return(
        <Card className="bg-dark text-white">
    <Card.Img src="https://us.123rf.com/450wm/learchitecto/learchitecto2008/learchitecto200800143/153016276-grand-stadium-full-of-spectators-expecting-an-evening-match-on-the-green-grass-field-sport-building-.jpg?ver=6" alt="Card image" className='image' />
    <Card.ImgOverlay>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>
    )
}

export default MatchCard