import React from "react"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {goodsSelectors} from "../../../s1-bll/b3-selectors/s1-goods";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const Header = () => {
    const {arrOfBasket} = goodsSelectors
    const basket = useSelector(arrOfBasket)

    const basketPrise = basket.reduce((sum, el) => sum + (+el.prise.slice(1) * el.copies), 0)

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>


                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link to={"/goods"} style={{textDecoration: "none", color: "white"}}>
                            Goods
                        </Link>
                    </Typography>


                    <Link to={"/basket"} style={{textDecoration: "none", color: "white"}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <Badge
                                badgeContent={basketPrise && "$" + basketPrise}
                                color="error"
                                max={999999}
                            >
                                <ShoppingBasketIcon/>
                            </Badge>
                        </IconButton>
                    </Link>


                </Toolbar>
            </AppBar>
        </Box>
    )
}