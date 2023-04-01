import "../../styles/home/header.scss";
import { Link } from "react-router-dom";

/**
 * Heading component displays a promotional message and a call-to-action button.
 * The button navigates to the deals page.
 *
 * @returns {JSX.Element} - The Heading component with a message and a call-to-action button.
 */
export default function Heading() {
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
