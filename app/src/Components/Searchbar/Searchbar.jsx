import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import styles from "./Searchbar.module.css"
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar({home=false}) {

    return (
        <div className={styles.container}>
            <form 
            name='searchForm'
            className={styles.searchForm}
            >   
                <div id='state'>
                    <FormControl fullWidth>
                        <InputLabel id="state-select-label">State</InputLabel>
                        <Select
                        labelId="state-select-label"
                        id="state-select"
                        label="State"
                        sx={{width: "200px"}}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div id='city'>
                    <FormControl fullWidth>
                        <InputLabel id="city-select-label">City</InputLabel>
                        <Select
                        labelId="city-select-label"
                        id="city-select"
                        label="city"
                        sx={{width: "200px"}}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <Button variant='contained' 
                id='searchBtn'
                type='button'
                label="Search"
                startIcon={<SearchIcon />}
                >Search</Button>

            </form>

            
        </div>
    )
}