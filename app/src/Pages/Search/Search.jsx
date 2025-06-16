import Faq from "../../Components/FAQ/Faq"
import Navbar from "../../Components/Navbar/Navbar"
import styles from "./Search.module.css";
import { useOutletContext } from "react-router-dom";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Stack from "@mui/material/Stack";


export default function Search() {

    const {stateData, selectedState, setSelectedState,
        cityData, selectedCity, setSelectedCity,
        medicalCenters
    } = useOutletContext();

    console.log("mc >> ", medicalCenters);

    return (
        <div>
            <Navbar home />
            <div className={styles.blueBlock}>
                <Searchbar home stateData={stateData} selectedState={selectedState} setSelectedState={setSelectedState} 
                    cityData={cityData} selectedCity={selectedCity} setSelectedCity={setSelectedCity}
                />
            </div>
            <div className={styles.searchResult}>

                <Stack spacing={3}>

                    <h1>{`${medicalCenters.length} medical centers available in ${selectedCity.toLowerCase()}`}</h1>

                </Stack>

            </div>
            <Faq />
        </div>
    )
}