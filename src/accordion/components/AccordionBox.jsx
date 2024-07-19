import { data } from "autoprefixer";

export default function AccordionBox({data,isOpen,clickHandler}){
    return <div className="border border-black w-50 mb-4">
        <div onClick={clickHandler}  className=" cursor-pointer flex p-2 justify-between bg-cyan-300 ">
            <span>{data.title}</span>
            <p className={`${!isOpen && '-rotate-180 ' } transition-all duration-500`}>👇</p>
        </div>
        <div>
           {isOpen && <p className="p-2">{data.content}</p>}
        </div>
    </div>
}