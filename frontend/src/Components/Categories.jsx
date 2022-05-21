import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

export default function Categories() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <>
      <NavDropdown className="NavLink" title="Categories">
        {cats.map((c) => (
          <Link to={`Category/${c.name}`} className="link">
            <NavDropdown.Item className="dropdownItem" href="#action3">
              {c.name}
            </NavDropdown.Item>
          </Link>
        ))}
      </NavDropdown>
    </>
  );
}
