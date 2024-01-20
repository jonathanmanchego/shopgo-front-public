import { Link } from "react-router-dom";

function LinkText({ message, url, title, style }: Readonly<{ message: string, url: string, title: string; style: string; }>) {
  return (
    <Link
      to={url}
      className={"text-gray-900 hover:text-gray-700 " + style}
      title={title}
    >
      {message}
    </Link>
  );
}

export default LinkText;