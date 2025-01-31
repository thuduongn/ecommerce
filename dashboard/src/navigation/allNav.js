import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers, FaUserTimes } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { MdPayment, MdViewList } from "react-icons/md";
import { TbBasketDiscount } from "react-icons/tb";
import { BsCartCheck } from "react-icons/bs"; 


export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiOutlineDashboard />,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Category',
        icon: <BiCategory />,
        role: 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id : 3,
        title : 'All Product',
        icon : <MdViewList />,
        role : 'admin',
        path: '/admin/dashboard/products'
    },
    {
        id : 4,
        title : 'Add Product',
        icon : <IoMdAdd />,
        role : 'admin',
        path: '/admin/dashboard/add-product'
    },     
    
]