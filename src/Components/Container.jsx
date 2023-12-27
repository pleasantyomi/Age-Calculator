import Divider from "./Divider";
import Inputs from "./Inputs";
import Display from "./Display";

const Container = () => {
    return(
        <div className="bg-White lg:w-7/12 w-11/12 h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] rounded-br-[8rem] py-10">
            <Inputs/>
            <Divider/>
            <Display/>
        </div>
    )
}
export default Container;