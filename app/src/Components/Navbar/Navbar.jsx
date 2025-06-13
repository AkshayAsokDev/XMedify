

export default function Navbar({home=false}) {

    return (
        <div>
            {
                home && (
                    <div>
                        Navbar-Home
                    </div>
                )
            }

            {
                home || (
                    <div>
                        Navbar-Alt
                    </div>
                )
            }
        </div>
    )
}