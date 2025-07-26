import React from 'react'
import { PanelLeft } from 'lucide-react';
function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen md:w-[50px] transition-all sm:w-9 w-9 m-0 flex flex-col text-black border-r-0 border-gray-500 shadow-md bg-white">
            <div>
                        <ul className="py-5 px-[15px]">
                                    <>
                                            <li className="pb-5 text-gray-400"><button><PanelLeft size={20}/></button></li>
                                            <li className="pb-5"><PanelLeft size={20}/></li>
                                            <li className="pb-5"><PanelLeft size={20}/></li>
                                            <li className="pb-5"><PanelLeft size={20}/></li>
                                            <li className="pb-5"><PanelLeft size={20}/></li>
                                    </>
                        </ul>
            </div>
    </div>
  )
}
export default SideBar