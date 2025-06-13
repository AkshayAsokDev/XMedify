import { Outlet } from "react-router-dom";
import TopPromo from "../TopPromo/TopPromo";
import Footer from "../Footer/Footer";
import MobileAppPromo from "../MobileAppPromo/MobileAppPromo";


export default function Layout () {

    return (
        <div>
            <TopPromo />

            {/* Nested routes here */}
            <Outlet />

            <MobileAppPromo />
            <Footer />

        </div>
    )
}