import { Link, useLocation, useParams } from "react-router-dom";

function Menu({ categories }) {
  const location = useLocation()
  const param = location.pathname.split("/")[2]
  

  return (
    <nav className="flex items-center justify-center">
      <ul className="flex gap-4">
        {categories.map((category) => (
          <li key={category}>
            <Link to={`menu/${category}`}>
              <button className={`btn group ${category === param ? "active" : ""}`}>
                <span className="btn_content">{category.toUpperCase()}</span>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
