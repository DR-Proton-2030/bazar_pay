import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import { ILayout } from "../../../@types/interface/layout.interface";
import { IProject } from "../../../@types/interface/Projects";
import ProjctLayout from "../../shared/projectLayout/ProjectLayout";
import { api } from "../../../utils/api";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface LayoutImageCellRendererProps {
  value: string;
  projectId: string;
  plotId: string;
  mode: "ENQUIRY" | "ALL";
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LayoutImageCell: React.FC<LayoutImageCellRendererProps> = ({
  plotId,
  mode,
  projectId,
}) => {
  const [open, setOpen] = React.useState(false);
  const [rectanglePositions, setRectanglePositions] = React.useState<ILayout[]>([]);
  const [project, setProject] = React.useState<IProject | null>(null);

  const getProjectDetails = React.useCallback( async () => {
    const payload = {
      project_object_id: projectId,
    };
    const projectDetails = await api.project.getProjectDetails(payload);
    console.log(projectDetails);
    if (projectDetails) {
      setProject(projectDetails.project_details);
      setRectanglePositions(projectDetails.layout_list);
    }
  },[projectId])

  const handleClickOpen = React.useCallback( () => {
    if(projectId){
      setOpen(true);
      getProjectDetails();
    }
  },[getProjectDetails, projectId]);

  const handleClose = () => {
    setOpen(false);
  };

  console.log("statte--->", project);
  console.log("state--->", rectanglePositions);

  return (
    <>
    <IconButton aria-label="delete" onClick={handleClickOpen}>
      <RemoveRedEyeIcon/>
    </IconButton>
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Image Preview"}</DialogTitle>
        <DialogContent>
          {/* <img src={value} alt="Preview" style={{ maxWidth: "100%" }} /> */}
          <ProjctLayout
            plotId={plotId}
            mode={mode}
            layoutPosition={rectanglePositions}
            project={project}
            key={0}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </>
  );
};

export default LayoutImageCell;
