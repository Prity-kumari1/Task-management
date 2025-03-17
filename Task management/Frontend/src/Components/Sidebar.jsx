import { Link } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { MdOutlineLabelImportant } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { HiMiniBookmarkSlash } from "react-icons/hi2";

function Sidebar() {
    const items = [
        {
            task: "All Task",
            icon: <CgNotes />,
            link: "/"
        },
        {
            task: "Important Task",
            icon: <MdOutlineLabelImportant />,
            link: "/importantTask"
        } , {
            
            task: "Complete Task",
            icon: <IoCheckmarkDoneOutline />,
            link: "/completetask"
        }, {
            task: "Incomplete Task",
            icon: <HiMiniBookmarkSlash />,
            link: "/incompletetask"
        }
    ]
    return (
         < >
            <div>
                <h2 className="text-xl font-semibold">Username</h2>
                <h4 className="mb-1 text-gray-400">Abc@gmail.com</h4>
                <hr />

            </div>
            <div>
                {items.map((data, ind) => (
                    <Link to={data.link} className="my-2 flex items-center gap-2 text-xl hover:bg-gray-500 bounded p-2 transition-all duration-300" key={ind}>{data.icon}{data.task}
                    </Link>
                ))}
            </div>
            <div>
                <button className="bg-gray-500 w-full p-2 rounded" >Logout</button>
            </div>
        </>
    )
}
export default Sidebar;