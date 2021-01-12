import "./index.css";

function List({ children = [] }) {
  return (
    <ul className="list">
      {children.map((listItem, index) => (
        <li key={index}>{listItem}</li>
      ))}
    </ul>
  );
}

export default List;
