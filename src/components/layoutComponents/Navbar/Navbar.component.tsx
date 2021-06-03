import React from "react";

import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import SafeGrid from "../SafeGrid/SafeGrid.component";

import useStyles from "./Navbar.stylesMUI";

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar>
            <SafeGrid mainColumn>
                <Toolbar>
                    <IconButton>
                        <MenuIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </SafeGrid>
        </AppBar>
    )
}

export default Navbar;