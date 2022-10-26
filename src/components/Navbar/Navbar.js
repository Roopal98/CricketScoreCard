import Nav from 'react-bootstrap/Nav';
import './Navbar.css'
const Navbar= () => {
    return(
        <Nav fill variant="tabs" defaultActiveKey="/score" className='scroll' style={{'margin-bottom':'30px'}}>
        <Nav.Item>
          <Nav.Link href="/score" onClick={(e)=>e.preventDefault()}>ScoreCard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Highlights</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Stats</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Points Table</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">Schedules</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default Navbar