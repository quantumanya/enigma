import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import '../App.css';


function NavbarMenu() {
  return (
    <Navbar className="transparent-background"
      sticky="top" 
      collapseOnSelect 
      expand="lg" 
      bg="dark" 
      variant="dark"
      >
      <Container>
        <Navbar.Brand href="/">

          <div height="400px">
                <span style={{
                  fontSize: '18pt',
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                 color: "white",
                //  color: "#20CAFf",
                 
                }}
                >Supersymmetry</span>
                <span style={{
                  fontSize: '7pt',
                  fontFamily: 'sans-serif',
                  fontWeight: '800',
                 color: "#bcfd38"
                }}>
                  BETA
                </span>

            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="search" eventKey="search">Search Papers</Nav.Link>
            <Nav.Link href="explain" eventKey="explain">GPT</Nav.Link>
            <Nav.Link href="explore" eventKey="explore">Research Trends</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="features" eventKey="features" className="highlight-menu">
                Planned Features
            </Nav.Link>

            <Nav.Link href="project" eventKey="features">
                About Project
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;