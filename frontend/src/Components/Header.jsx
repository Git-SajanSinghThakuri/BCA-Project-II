import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Image,
  Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillGrid3X3GapFill } from "react-icons/bs"

const Header = ({ user }) => {
  return (
    <>
      <Navbar sticky="top" className='navbar' expand="lg">
        <Container>
          <Navbar.Brand className='Brand' as={Link} to="/">Booklet</Navbar.Brand>
          <Navbar.Toggle className='NavbarToggler' aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <Nav.Link className="NavLink" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="NavLink" as={Link} to="/SellBooks">Sell Book</Nav.Link>
              <NavDropdown className="NavLink" title="Categories">
                <NavDropdown.Item className='dropdownItem' href="#action3">School</NavDropdown.Item>
                <NavDropdown.Item className='dropdownItem' href="#action3">+2</NavDropdown.Item>
                <NavDropdown.Item className='dropdownItem' href="#action3">A Level</NavDropdown.Item>
                <NavDropdown.Item className='dropdownItem' href="#action3">Bachelor</NavDropdown.Item>
                <NavDropdown.Item className='dropdownItem' href="#action3">Master</NavDropdown.Item>
                <NavDropdown.Item className='dropdownItem' href="#action3">Literature & Fiction</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex me-auto my-2 my-lg-0">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            {user ? (
              <Stack direction="horizontal" className="d-flex justify-content-center">
                  <Nav.Link as={Link} to="/Profile"><Image fluid roundedCircle style={{ width: 30 }} src="https://source.unsplash.com/random/200x200?sig=1" alt="Italian Trulli" /></Nav.Link>
                  <Nav.Link as={Link} to="/Profile" className="NavProfile">Sajan</Nav.Link>
                <NavDropdown className="GridDropdown" title={<BsFillGrid3X3GapFill size={25} className='icon' />}>
                  <NavDropdown.Item className='dropdownItem' Link as={Link} to="/ManageProduct">Manage Product</NavDropdown.Item>
                  <NavDropdown.Item className='dropdownItem' Link as={Link} to="/SellBooks">Sell Book</NavDropdown.Item>
                  <NavDropdown.Item className='dropdownItem' href="#action3">LogOut</NavDropdown.Item>
                </NavDropdown>
              </Stack>

            ) : (
              <Stack direction="horizontal" className="d-flex justify-content-center">
                <Nav.Link as={Link} to="/LoginForm">LogIn</Nav.Link>
                <Nav.Link className='CustomButton' as={Link} to="/CreateAccount">Create Account</Nav.Link>
              </Stack>

            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;