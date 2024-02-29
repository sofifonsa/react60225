import { CartWidget } from "../Cart/CartWidget"
import { Categories } from "../Categories/Categories"
import  Logo  from "../../Logo"
export const NavBar = () => {
    return (
        <nav className="bg-green-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white"><Logo/></div>
                    <ul className="flex space-x-4">
                        < Categories />
                        < CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}