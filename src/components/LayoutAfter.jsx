import { Outlet } from "react-router-dom";
import Header from "./Header";
const LayoutAfter = () => {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>

        </div>

    )
}

export default LayoutAfter;