import React, { useState } from "react";
import { ILayout } from "../../../@types/interface/layout.interface";
import { IProjectLayout } from "../../../@types/props/layoutProps.types";

const ProjctLayout: React.FC<IProjectLayout> = ({
  project,
  layoutPosition,
  mode,
  plotId
}) => {
  const [originalImageWidth, setOriginalImageWidth] = useState(0);
  const [originalImageHeight, setOriginalImageHeight] = useState(0);
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></div>

      {project?.layout_image && (
        <div
          style={{
            position: "relative",
            overflow: "auto",
            maxHeight: "100vh",
            maxWidth: "100vw",
          }}
        >
          <img
            src={project.layout_image}
            alt="Plot Map"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
            onLoad={(event) => {
              const img = event.target as HTMLImageElement;
              setOriginalImageWidth(img.naturalWidth);
              setOriginalImageHeight(img.naturalHeight);
            }}
          />
          {layoutPosition.map((position: ILayout, index: number) => (
            <div
              id={position._id}
              key={index}
              style={{
                position: "absolute",
                left: `${(position.x / originalImageWidth) * 100}%`,
                top: `${(position.y / originalImageHeight) * 100}%`,
                width: "5px",
                height: `5px`,
                borderRadius: "50%",
                border: "none",
                backgroundColor: mode==="ALL" ?  "rgba(255, 0, 0, 0.5)" : plotId===position._id ? "rgba(255, 0, 0, 0.8)" : "transparent",
                color: "white",
                padding: "2px 2px",
                cursor: "pointer",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjctLayout;
