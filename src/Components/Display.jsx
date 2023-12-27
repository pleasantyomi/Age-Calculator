import { useState } from "react";

const Display = () =>{
    const [calc, setCalc] = useState([
        {
            holder: '--',
            title: 'years',
            id: 1
        },
        {
            holder: '--',
            title: 'months',
            id: 2
        },   {
            holder: '--',
            title: 'days',
            id: 3
        },
    ])
    return(
        <div className="lg:pt-10 pt-20 w-10/12 mx-auto">
            <div className="grid">
                {calc.map((calcs)=>(
                    <div key={calcs.id}>
                        <div className="font-black italic lg:text-[6rem] text-[3rem] leading-none flex gap-2">
                            <span className="text-Purple">{calcs.holder}</span>
                            <span className="text-OffBlack">{calcs.title}</span>
                        </div>


                    </div>
                ))}
                <p>
                    <span></span>
                </p>
            </div>
            

        </div>
    )
}
export default Display;