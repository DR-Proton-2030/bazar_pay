import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Alert,
  Button,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Add, Close } from "@mui/icons-material";
import DragAndDrop from "../../../../shared/drag&Drop/Drag&Drop";

const GalleryAccordion = ({
  galleryPhotos,
  setGalleryPhotos,
  tittle,
}:any) => {
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );
  const [visibleSections, setVisibleSections] = useState(4);

  useEffect(() => {
    const selectedPhotosCount = galleryPhotos.filter(
      (photo:any) => photo !== null
    ).length;
    if (selectedPhotosCount < 2 && tittle !=="Upload Actual Photos") {
      setValidationMessage("Please upload at least 2 photos.");
    } else {
      setValidationMessage(null);
    }
  }, [galleryPhotos]);

  const handleFilesAccepted = (files: any) => {
    setGalleryPhotos((prevPhotos:any) => [
      ...prevPhotos,
      ...files.map((file: any) => file),
    ]);
  };

  const handleDeleteImage = (index: number) => () => {
    setGalleryPhotos((prevPhotos:any) => {
      const newPhotos = [...prevPhotos];
      newPhotos.splice(index, 1);
      return newPhotos;
    });
  };

  const handleAddSection = () => {
    setVisibleSections((prev) => (prev < 10 ? prev + 1 : prev));
  };

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          {tittle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {validationMessage && (
          <Alert severity="warning">{validationMessage}</Alert>
        )}
        <DragAndDrop onFilesAccepted={handleFilesAccepted} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {galleryPhotos?.map((photo: any, index:any) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={URL.createObjectURL(photo)}
                alt={`uploaded-${index}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  border: "2px solid #ccc",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: 5,
                }}
              />
              <IconButton
                onClick={handleDeleteImage(index)}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  backgroundColor: "white",
                }}
              >
                <Close />
              </IconButton>
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default GalleryAccordion;
