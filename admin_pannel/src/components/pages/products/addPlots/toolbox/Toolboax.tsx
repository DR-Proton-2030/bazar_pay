import React, { useState } from "react";
import {
  Box,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ToolIcon from "@mui/icons-material/Build";
import DirectionIcon from "@mui/icons-material/Navigation";
import NorthIcon from "@mui/icons-material/North";
import EastIcon from "@mui/icons-material/East";
import SouthIcon from "@mui/icons-material/South";
import WestIcon from "@mui/icons-material/West";
import CheckIcon from '@mui/icons-material/Check';

const ToolboxContainer = styled(Box)({
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "8px",
  borderRadius: "4px",
  display: "flex",
  gap: "8px",
  backgroundColor: "white",
});

const ToolboxBar = ({ onDelete, onDirectionSelect, handleSetDetection }: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDirectionClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDirectionClose = () => {
    setAnchorEl(null);
  };

  const handleDirectionChoice = (direction: any) => {
    onDirectionSelect(direction);
    handleDirectionClose();
  };

  return (
    <ToolboxContainer>
      {/* Tool Icon with tooltip */}
      <Tooltip title="Tool">
        <IconButton color="primary">
          <ToolIcon />
        </IconButton>
      </Tooltip>

      {/* Direction Icon with dropdown */}
      <Tooltip title="Direction">
        <IconButton color="primary" onClick={handleDirectionClick}>
          <DirectionIcon />
        </IconButton>
      </Tooltip>

      {/* Menu for Direction Icon */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDirectionClose}
      >
        <MenuItem onClick={()=>handleSetDetection("N")}>
          <Tooltip title="North">
            <IconButton >
              <NorthIcon />
            </IconButton>
          </Tooltip>
        </MenuItem>
        <MenuItem onClick={()=>handleSetDetection("E")}>
          <Tooltip title="East">
            <IconButton>
              <EastIcon />
            </IconButton>
          </Tooltip>
        </MenuItem>
        <MenuItem onClick={()=>handleSetDetection("S")}>
          <Tooltip title="South">
            <IconButton>
              <SouthIcon />
            </IconButton>
          </Tooltip>
        </MenuItem>
        <MenuItem onClick={()=>handleSetDetection("W")}>
          <Tooltip title="West">
            <IconButton>
              <WestIcon />
            </IconButton>
          </Tooltip>
        </MenuItem>
      </Menu>

      {/* Divider for spacing */}
      <Divider orientation="vertical" flexItem />

      {/* Delete Icon with tooltip */}
      <Tooltip title="Done">
        <IconButton color="success" onClick={()=>handleSetDetection("")}>
          <CheckIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton color="secondary" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </ToolboxContainer>
  );
};

export default ToolboxBar;
