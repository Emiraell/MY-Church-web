import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="m-auto w-full py-20 bg-gray-900 text-gray-100 font-montserrat h-[100vh]">
      <p className="text-xl font-thin">404</p>
      <p className="py-10 text-2xl"> Page Not Found</p>
      <Link className="italic text-xl text-blue-300" to="my-church-web/">
        Back to home page
      </Link>
    </div>
  );
}
