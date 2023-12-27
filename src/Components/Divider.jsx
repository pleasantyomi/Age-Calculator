import arrow from '../assets/images/icon-arrow.svg'

const Divider = () =>{
    return(
        <div className="relative w-10/12 mx-auto">
            <div>
                <div className="bg-LightGrey h-[1px] w-full "></div>
                <div className="lg:block hidden absolute top-0 -translate-y-1/2 right-0">
                    <button className="relative bg-Purple hover:bg-OffBlack w-20 h-20 rounded-full">
                        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"  src={arrow}/>
                    </button>
                </div>
                <div className="lg:hidden block absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <button className="relative bg-Purple hover:bg-OffBlack lg:w-20 lg:h-20 w-16 h-16 rounded-full">
                        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-8"  src={arrow}/>
                    </button>
                </div>

            </div>

        </div>
    )
}
export default Divider;