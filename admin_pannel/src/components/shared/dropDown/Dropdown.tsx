import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuList from "@mui/material/MenuList";
import { AccountCircle, People } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./dropdown.css";

// const options = [<Button>My Profile</Button>, <Button>Log out</Button>];
// const buttons = [
//     <Button key="one">One</Button>,
//     <Button key="two">Two</Button>,

//   ];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    window.location.href = "https://www.youtube.com/";
  };
  //   const handleClick = () => {
  //     console.info(`You clicked ${buttons[selectedIndex]}`);
  //   };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        style={{ outline: "white" }}
        ref={anchorRef}
        aria-label="Button group with a nested menu"
      >
        {/* <Button onClick={handleClick}>{options[selectedIndex]}</Button> */}
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          className="muibutton"
          onClick={handleToggle}
        >
          <AccountCircle className="clickable-user-icon" />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="mui-popper"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className="mui-paper">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuItem>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "left",
                      alignItems: "left",
                      gap: "5px",
                    }}
                  >
                    <Button  className="profile-view-btn">
                      <PersonIcon className="profile-icon" />
                      <a>My profile</a>
                    </Button>

                    <Button className="log-out-btn">
                      <LogoutIcon className="logout-icon" />
                      <a>log out</a>
                    </Button>
                  </div>
                </MenuItem>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
