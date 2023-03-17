import "../../styles/home/header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="heading">
      <div className="text">
        <h2>New week, new deals! Check out our weekly sale and save big</h2>
        <Link to={"/deals"}>
          <button className="button">View deals</button>
        </Link>
      </div>
    </div>
  );
}
