import Nav from 'react-bootstrap/Nav';
import './Navbar.css'
const Navbar= () => {
    return(
        <Nav fill variant="tabs" defaultActiveKey="/home" className='scroll' style={{'margin-bottom':'30px'}}>
        <Nav.Item>
          <Nav.Link href="/home">ScoreCard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Highlights</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default Navbar