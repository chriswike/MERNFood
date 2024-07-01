import { Link } from "react-router-dom";

const Header = () => {
  return(
    // border location border color border padding
    <div className="border-b-2 border-b-orange-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link 
            to="/" 
            className="text 3x1 font-bold tracking-tight text-orange-500">
            MERNFood
            </Link>
        </div>
    </div>
  )
}

export default Header;