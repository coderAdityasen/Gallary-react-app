import { Routes ,Route } from "react-router-dom";
import ImageGallery from "../components/Gallary";
import FullView from "../components/FullView";

function Customrotes(){
    return(
        <Routes>
            <Route path="/" element={<ImageGallery/>}> </Route>
            <Route path="/gallary/:id" element={<FullView/>}> </Route>
        </Routes>
    )
}

export default Customrotes;