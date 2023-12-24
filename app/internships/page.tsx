import { Nav } from "../constants";
import TopBar from "../topbar";

export default function page() {  
    return(
        <main>
            <TopBar currentNav={Nav.Internships} />
        </main>
    )
}