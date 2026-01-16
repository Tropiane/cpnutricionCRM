import { Route, Routes } from "react-router-dom";
import { TicketsManager } from "../../components/pages/TicketsManager";
import { Login } from "../../components/pages/Login";
function Main() {

    return (
    <main>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/tickets-manager" element={<TicketsManager/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </main>
    )
}

export default Main