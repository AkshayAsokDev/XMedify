import Navbar from "../Navbar/Navbar"
import styles from "./Hero.module.css"
import DoctorBg from "../../Assets/hero/hero_image.png"
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Searchbar from "../Searchbar/Searchbar";
import DisplayCard from "../DisplayCard/DisplayCard";

export default function Hero() {

    return (
        <div className={styles.container}>

            <Navbar home />
            
            {/* <div className={styles.DoctorBg}>
                <img src={DoctorBg} alt="doctor-bg" />
            </div> */}
            
            <div style={{
                paddingLeft: "5%",
            }} >

                <div className={styles.heroText}>

                    <Stack spacing={2}> 

                        <div>
                            <Typography 
                            sx={{
                                fontSize: "30px",
                            }}
                            > Skip the travel! Find Online </Typography>

                            <Typography
                            sx={{
                                fontSize: "50px",
                                fontWeight: 700
                            }}
                            >Medical <span style={{color: "#2AA8FF"}} >Centers</span></Typography>
                        </div>

                        <Typography
                        sx={{
                            fontSize: "20px",
                            color: "#5C6169",
                            width: "30%"
                        }}
                        >Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</Typography>

                        <Button variant="contained" 
                        sx={{
                            width: "fit-content",
                            textTransform: "none"
                        }}
                        >Find Centers</Button>
                        
                    </Stack>            
                </div>
            </div>

            <div style={{
                paddingLeft: "5%",
                paddingRight: "5%",
            }}>
                <div style={{
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid gray",
                    borderRadius: "10px"
                }}>
                    <Searchbar home />

                    <Typography
                    sx={{
                        fontSize: "20px",
                        fontWeight: "500"
                    }}
                    >You may be looking for</Typography>

                    {/* Display Card part */}
                    <DisplayCard />
                </div>
                
            </div>

            
        </div>
    )
}