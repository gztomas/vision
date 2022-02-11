import React, { useEffect, useState } from "react";
import { ListGroupItem } from "react-bootstrap";
import {
  DetectionFrame,
  DetectionLabel,
  WithDetections,
} from "./DetectionFrame";
import { fetchDetections } from "./fetchDetections";

export function DogItem({ url }) {
  const [detections, setDetections] = useState();

  useEffect(() => {
    fetchDetections(url).then(setDetections);
  }, [url]);

  return (
    <ListGroupItem
      style={{
        minHeight: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WithDetections>
        {detections &&
          detections.map(({ rect, label }) => (
            <DetectionFrame key={`${rect.x1},${rect.y1}`} {...rect}>
              <DetectionLabel>{label}</DetectionLabel>
            </DetectionFrame>
          ))}
        {detections && (
          <img alt="dog" src={url} key={url} style={{ maxWidth: 500 }} />
        )}
      </WithDetections>
    </ListGroupItem>
  );
}
