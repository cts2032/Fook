import styled from "styled-components";

function Paging({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-left: 43%;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0 auto;
  background: #c7e8ca;
  color: white;
  font-size: 15px;

  &:hover {
    background: #5d9c59;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: lightgrey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #5d9c59;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Paging;
