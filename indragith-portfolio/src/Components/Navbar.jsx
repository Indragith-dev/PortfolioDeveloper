import styled from "styled-components";

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.8);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  z-index: 10;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <h2>Indragith</h2>
      <div>
        <a href="#about">About</a> | <a href="#projects">Projects</a> |{" "}
        <a href="#contact">Contact</a>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
