import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import PermissionsTable from "./EmpPermissionsTable";

const drawWidth = 220;

function EmpPermissions() {
    const [mobileViewOpen, setMobileViewOpen] = React.useState(false);

    const handleToggle = () => {
        setMobileViewOpen(!mobileViewOpen);
    };

    const navigate = useNavigate();

    const responsiveDrawer = (

        <div style={{
            backgroundColor: "#09212E",
            height: "100%"
        }}>
            <Toolbar />
            <Divider />
            <Typography
                sx={{
                    textAlign: "center", pt: 4,
                    color: "green", fontSize: 20
                }}
            >

            </Typography>
            <List sx={{ backgroundColor: "#09212E" }}>

                <ListItemButton sx={{ color: "white" }} onClick={() => {
                    navigate("/");
                }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard"} />
                </ListItemButton>

                <ListItemButton sx={{ color: "white" }} onClick={() => {
                    navigate("/employee");
                }}>

                    <ListItemIcon sx={{ color: "white" }}>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Employee"} />
                </ListItemButton>

                <ListItemButton sx={{ color: "white" }} onClick={() => {
                    navigate("/shifts");
                }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Shifts"} />
                </ListItemButton>

                <ListItemButton sx={{ color: "white" }} onClick={() => {
                    navigate("/permissions");
                }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Permissions"} />
                </ListItemButton>


                <ListItemButton sx={{ color: "white" }} onClick={() => {
                    navigate("/evaluation");
                }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Evaluation"} />
                </ListItemButton>

                <ListItemButton sx={{ color: "white" }} onClick={() => {
                    navigate("/reports");
                }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Reports"} />
                </ListItemButton>

            </List>
        </div>
    );

    return (
        <div>
            <div>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{
                            width: { sm: `calc(100% - ${drawWidth}px)` },
                            ml: { sm: `${drawWidth}px` },
                            backgroundColor: "",
                        }}
                    >
                        <Toolbar>
                            <IconButton
                                color=""
                                edge="start"
                                onClick={handleToggle}
                                sx={{ mr: 2, display: { sm: "none" } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6">
                                Welcome
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{
                            width: { sm: drawWidth },
                            flexShrink: { sm: 0 }
                        }}
                    >
                        <Drawer
                            variant="temporary"
                            open={mobileViewOpen}
                            onClose={handleToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { xs: "block", sm: "none" },
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: drawWidth,
                                },
                            }}
                        >
                            {responsiveDrawer}
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: "none", sm: "block" },
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: drawWidth,
                                },
                            }}
                            open
                        >
                            {responsiveDrawer}
                        </Drawer>
                    </Box>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: 3,
                            width: { sm: `calc(100% - ${drawWidth}px)` },
                        }}
                    >
                        <Toolbar />
                        <PermissionsTable />
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default EmpPermissions