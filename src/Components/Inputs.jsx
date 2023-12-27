import { useState } from "react";

const Inputs = () =>{
    const [forms, setforms] = useState([
        {
            title: 'day', 
            type: 'text', 
            holder: 'dd', 
            id: 1
        },
        {
            title: 'month', 
            type: 'text', 
            holder: 'mm', 
            id: 2
        },
        {
            title: 'year', 
            type: 'text', 
            holder: 'yyyy', 
            id: 3
        },
    ])
    return(
        <div className="relative w-10/12 mx-auto lg:pb-10 pb-20">
            <div className="flex lg:gap-8 gap-5">
                {forms.map((form)=>(
                    <div key={form.id}>
                        <div>
                            <div className="grid gap-2">
                               <label className="uppercase font-semibold text-SmokeyGrey text-xs">{form.title}</label>
                               <input type={form.type} placeholder={form.holder} className="outline outline-[1px] outline-LightGrey rounded-md lg:h-[4rem] lg:w-[9rem] w-full h-[3rem] px-2 uppercase font-extrabold lg:text-3xl text-2xl focus:outline-Purple"/>
                            </div>
                        </div>

                    </div>
                ))}
            </div>



        </div>
    )
}
export default Inputs;