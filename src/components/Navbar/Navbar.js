import Nav from 'react-bootstrap/Nav';
import './Navbar.css'
const Navbar= () => {
    return(
        <Nav fill variant="tabs" defaultActiveKey="/home" className='scroll'>
        <Nav.Item>
          <Nav.Link href="/home">ScoreCard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
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