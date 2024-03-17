import { FaHome } from "react-icons/fa";
import { GiJetFighter } from "react-icons/gi";
import { TbSchool } from "react-icons/tb";
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom"
export const Categories = () => {
    return (
        <>
            <li className="text-white">
                <Link  to={'/'}>
                    <button className="bg-orange-400 text-white px-4 py-2 rounded flex items-center">
                    <FaHome />
                    </button>
                </Link>
                
            </li>

            <li className="text-white">
                <Link to={'category/Types of trips'}>
                    <button className="bg-orange-400 text-white px-4 py-2 rounded flex items-center">
                    <GiJetFighter />
                    </button>
                </Link>
                
            </li>

            <li className="text-white">
                <Link to={'category/Study'}>
                    <button className="bg-orange-400 text-white px-4 py-2 rounded flex items-center">
                    <TbSchool />
                    </button>
                </Link>
                
            </li>

            <li className="text-white">
                <Link to={'category/Jobs'}>
                    <button className="bg-orange-400 text-white px-4 py-2 rounded flex items-center">
                    <MdOutlineWorkHistory />
                    </button>
                </Link>
                
            </li>

            <li className="text-white">
                <Link to={'category/Destinations'}>
                    <button className="bg-orange-400 text-white px-4 py-2 rounded flex items-center">
                    <FaMapLocationDot />
                    </button>
                </Link>
                
            </li>
        </>
    )
}