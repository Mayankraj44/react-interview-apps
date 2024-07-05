import { Link } from "react-router-dom";
import { APP_NAMES } from "./utils/const";

export default function Info() {
  return (
    <div className="flex flex-col gap-10">
      {APP_NAMES.map((app) => (
        <Link to={app.url} key={app.url}>
          {app.name}
        </Link>
      ))}
    </div>
  );
}
