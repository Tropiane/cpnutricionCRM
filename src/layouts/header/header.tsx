import NavBar from "./navBar.tsx";
import { config } from "../../config.ts"

function Header() {
    return <header className="flex flex-col gap-6 mb-[20vh] shadow-md py-6 px-4 h-[40vh]">
        <div className="flex flex-row-reverse items-center justify-center gap-6 p-4">
        <NavBar isFooter={false}></NavBar>
        <img src="" alt="" className="w-1/7"/>
        </div>
            <h2 className="secondTitleFont text-center">{config.pagePresentation}</h2>
    </header>
}

export default Header