import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-6 px-10 bg-(--c1)">
        <Link to="/" className="text-2xl font-semibold">Median Search</Link>
        <div className="flex gap-5 text-xl items-center">
          <Link
            className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2"
            to="/"
          >
            Search
          </Link>
          <Link
            className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2"
            to="/collection"
          >
            Collections
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar
