/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import { Button, styled } from "@mui/material";
import { IProject } from "../../../../../@types/interface/Projects";
import { api } from "../../../../../utils/api";
import UIContext from "../../../../../contexts/uiContext/UIContext";
import SaveIcon from "@mui/icons-material/Save";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { PublishPlot } from "../../../../shared/publishPlot/PublishPlot";
import { ToolDial } from "../../../../shared/toolDial/ToolDial";
import ToolboxBar from "./toolbox/Toolboax";
import { ILayout } from "../../../../../@types/interface/layout.interface";
import BuilderContext from "../../../../../contexts/builderContext/BuilderContext";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../../contexts/authContext/authContext";
import { ROLES } from "../../../../../constants/roles/Roles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadLayout: React.FC = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { builderDetails } = useContext(BuilderContext);
  const { setDashboardHeader } = useContext(UIContext);
  const [rectanglePositions, setRectanglePositions] = useState<ILayout[]>([]);
  const [originalImageWidth, setOriginalImageWidth] = useState(0);
  const [originalImageHeight, setOriginalImageHeight] = useState(0);
  const [direction, setDirection] = useState<string>("");
  const [project, setProject] = useState<IProject | null>(null);
  const queryParams = new URLSearchParams(window.location.search);
  const projectId = queryParams.get("pid");
  const [selectedPositions, setSelectedPositions] = useState([
    {
      x: 0,
      y: 0,
    },
  ]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionBox, setSelectionBox] = useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
  });

  const containerRef = useRef(null);

  const getProjectDetails = useCallback(async () => {
    const payload = {
      project_object_id: projectId,
    };
    const projectDetails = await api.project.getProjectDetails(payload);
    console.log(projectDetails);
    if (projectDetails) {
      setProject(projectDetails.project_details);
      setRectanglePositions(projectDetails.layout_list);
    }
  }, [projectId]);

  const handleSelect = (position: any) => {
    if (direction !== "") {
      const updatedPositions: ILayout[] = rectanglePositions.map((pos: any) => {
        if (pos.x === position.x && pos.y === position.y) {
          return { ...pos, facing: direction };
        }
        return pos;
      });
      setRectanglePositions(updatedPositions);
    } else setSelectedPositions([...selectedPositions, position]);
  };

  const handleMouseDown = (event: any) => {
    const { clientX, clientY } = event;
    setIsSelecting(true);
    setSelectionBox({
      startX: clientX,
      startY: clientY,
      endX: clientX,
      endY: clientY,
    });
  };

  const handleMouseMove = (event: any) => {
    if (!isSelecting) return;
    const { clientX, clientY } = event;
    setSelectionBox((prevBox) => ({
      ...prevBox,
      endX: clientX,
      endY: clientY,
    }));
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
  };

  const handleRemove = () => {
    const updatedSelctions = rectanglePositions.filter(
      (position: any) => !selectedPositions.includes(position)
    );
    setRectanglePositions(updatedSelctions);
  };

  const getSelectedItems = (position: any) => {
    const dotSize = 10; // Assuming the red dots are 10x10 pixels
    const container: any = containerRef.current;

    // Handle potential null reference for containerRef.current
    if (!container) {
      console.error("Container element not found!");
      return;
    }

    // Get the bounding rectangle of the container element
    const containerRect = container!.getBoundingClientRect();

    // Calculate the scale factor applied to the container (if any)
    const scaleX = containerRect.width / originalImageWidth;
    const scaleY = containerRect.height / originalImageHeight;

    // Calculate the adjusted coordinates of the selection box
    const adjustedSelectionTopLeftX =
      (selectionBox.startX - containerRect.left) / scaleX;
    const adjustedSelectionTopLeftY =
      (selectionBox.startY - containerRect.top) / scaleY;
    const adjustedSelectionBottomRightX =
      (selectionBox.endX - containerRect.left) / scaleX;
    const adjustedSelectionBottomRightY =
      (selectionBox.endY - containerRect.top) / scaleY;

    // Calculate the overlap area (considering 0 overlap for negative values)
    const overlapWidth = Math.max(
      0,
      Math.min(adjustedSelectionBottomRightX, position.x + dotSize) -
        Math.max(adjustedSelectionTopLeftX, position.x)
    );
    const overlapHeight = Math.max(
      0,
      Math.min(adjustedSelectionBottomRightY, position.y + dotSize) -
        Math.max(adjustedSelectionTopLeftY, position.y)
    );
    const overlapArea = overlapWidth * overlapHeight;

    // Check if there's any significant overlap between the dot and the selection box
    if (overlapArea / (dotSize * dotSize) > 0.5) {
      // Adjust threshold as needed (e.g., 0.7 for stricter selection)
      setSelectedPositions((prevSelectedPositions) => [
        ...prevSelectedPositions,
        position,
      ]);
    }
  };

  const handleSetDetection = (direction: string) => {
    setDirection(direction);
  };

  const handlePublishPlot = async () => {
    const payload = {
      project_object_id: projectId,
      layoutPosition: rectanglePositions,
      status: true,
    };
    const response = await api.project.updatePlotPostion(payload);
    if (response) {
      navigate(`/admin/Plots?cid=${builderDetails?._id}`);
    }
  };

  const handleDraftPlot = async () => {
    const payload = {
      project_object_id: projectId,
      layoutPosition: rectanglePositions,
      status: false,
    };
    const response = await api.project.updatePlotPostion(payload);
    if (response) {
      navigate(`/admin/Plots?cid=${builderDetails?._id}`);
    }
  };

  useEffect(() => {
    getProjectDetails();
  }, [getProjectDetails]);

  useEffect(() => {
    if (isSelecting) {
      rectanglePositions.map((position: any) => {
        getSelectedItems(position);
        console.log("selectionBos-->", selectionBox);
        console.log("position-->", position);
      });
    }
  }, [getSelectedItems, isSelecting, rectanglePositions, selectionBox]);

  useEffect(() => {
    setDashboardHeader("Confirm Plots");
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            // background: "white",
            paddingRight: 30,
            paddingLeft: 30,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 5,
          }}
        >
          {/* <Button onClick={handleRemove}>Remove Selections</Button> */}
          {user?.role === ROLES.telecaller ? null : (
            <>
              <ToolboxBar
                onDelete={handleRemove}
                handleSetDetection={handleSetDetection}
                onDirectionSelect={() => {}}
              />
              <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <Button
                  variant="contained"
                  style={{
                    width: "120px",
                    padding: "10px",
                  }}
                  type="submit"
                  color="info"
                  startIcon={<SaveIcon />}
                  sx={{
                    background: "black",
                    textAlign: "center",
                    fontSize: "12PX",
                  }}
                  onClick={handleDraftPlot}
                >
                  Save Draft
                </Button>
                <PublishPlot handlePublishPlot={handlePublishPlot} />
              </div>
            </>
          )}
        </div>

        {project?.layout_image && (
          <div
            ref={containerRef}
            style={{
              position: "relative",
              overflow: "auto",
              maxHeight: "100vh",
              maxWidth: "100vw",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <img
              src={project.layout_image}
              alt="Plot Map"
              style={{
                maxHeight: "100%",
                maxWidth: "1200px",
                objectFit: "contain",
              }}
              onLoad={(event) => {
                const img = event.target as HTMLImageElement;
                setOriginalImageWidth(img.naturalWidth);
                setOriginalImageHeight(img.naturalHeight);
              }}
            />
            {isSelecting && (
              <div
                style={{
                  position: "fixed",
                  left: selectionBox.startX,
                  top: selectionBox.startY,
                  width: selectionBox.endX - selectionBox.startX,
                  height: selectionBox.endY - selectionBox.startY,
                  backgroundColor: "rgba(0, 0, 255, 0.3)",
                  border: "1px dashed blue",
                  pointerEvents: "none",
                }}
              />
            )}
            {rectanglePositions.map((position: ILayout, index: number) => (
              <div
                className="mouse-select__selectable"
                key={index}
                onClick={() => handleSelect(position)}
                style={{
                  position: "absolute",
                  left: `${(position.x / originalImageWidth) * 100}%`,
                  top: `${(position.y / originalImageHeight) * 100}%`,
                  width: `${selectedPositions.includes(position) ? 20 : 10}px`,
                  height: `${selectedPositions.includes(position) ? 20 : 10}px`,
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: `${
                    selectedPositions.includes(position)
                      ? "rgba(50, 0, 255, 1)"
                      : position.facing
                      ? "rgba(255, 0, 0)"
                      : "rgba(255, 0, 0, 0.5)"
                  }`,
                  color: "white",
                  padding: 0,
                  cursor: "pointer",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    textAlign: "center",
                    fontWeight: "bolder",
                    color: "white",
                  }}
                >
                  {position.facing ? position.facing : null}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UploadLayout;
