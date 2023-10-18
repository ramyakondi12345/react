import React from 'react'
import 
{  BsPersonSquare, BsPatchCheck, BsFillHexagonFill, BsChatSquareDotsFill, BsBox, BsBadge3DFill,BsCarFront}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsFillHexagonFill  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCarFront className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBox className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPersonSquare className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBadge3DFill className='icon'/> Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPatchCheck className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsChatSquareDotsFill className='icon'/> Help
                </a>
            </li>
           
        </ul>
    </aside>
  )
}

export default Sidebar
