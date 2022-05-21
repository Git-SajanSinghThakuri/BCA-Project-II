import { useContext } from "react";
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
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { Context } from "../context/Context";
import Categories from "./Categories";
import BookletLogo from "../img/Logo.png";

const Header = ({ user }) => {
  const PF = "http://localhost:5000/images/";
  const { dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <Navbar sticky="top" className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="Brand" as={Link} to="/">
            <Image
              alt=""
              src={BookletLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Booklet
          </Navbar.Brand>

          <Navbar.Toggle
            className="NavbarToggler"
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <Nav.Link className="NavLink" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="NavLink" as={Link} to="/SellBooks">
                Sell Book
              </Nav.Link>
              <Categories />
            </Nav>
            {/* <Form className='d-flex me-auto my-2 my-lg-0'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
            </Form> */}
            <Nav className="d-flex me-auto my-2 my-lg-0">
              <Nav.Link className="NavLink" as={Link} to="/Search">
                Books
              </Nav.Link>
            </Nav>

            {user ? (
              <Stack
                direction="horizontal"
                className="d-flex justify-content-center"
              >
                <Nav.Link as={Link} to="/Profile">
                  {/* <Image
                    className='profilepic'
                    src={PF + user.profilepic}
                    alt=''
                  /> */}

                  <Image
                    className="profilepic"
                    src={PF + user.profilepic}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/512px-Breezeicons-actions-22-im-user.svg.png?20160527143724";
                    }}
                  />
                </Nav.Link>
                <Nav.Link as={Link} to="/Profile" className="NavProfile">
                  {user.firstname}
                </Nav.Link>
                <NavDropdown
                  className="GridDropdown"
                  title={<BsFillGrid3X3GapFill size={25} className="icon" />}
                >
                  <NavDropdown.Item
                    className="dropdownItem"
                    Link
                    as={Link}
                    to="/ManageProduct"
                  >
                    Manage Product
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdownItem"
                    Link
                    as={Link}
                    to="/SellBooks"
                  >
                    Sell Book
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdownItem"
                    onClick={handleLogout}
                  >
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              </Stack>
            ) : (
              <Stack
                direction="horizontal"
                className="d-flex justify-content-center"
              >
                <Nav>
                  <Nav.Link className="NavLink" as={Link} to="/Login">
                    LogIn
                  </Nav.Link>
                  <Nav.Link
                    className="CustomButton"
                    as={Link}
                    to="/CreateAccount"
                  >
                    Create Account
                  </Nav.Link>
                </Nav>
              </Stack>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
