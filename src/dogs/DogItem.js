import React, { useEffect, useState } from "react";
import { ListGroupItem, Spinner } from "react-bootstrap";
import styled from "styled-components";
import {
  DetectionFrame,
  DetectionLabel,
  WithDetections,
} from "../detections/DetectionFrame";
import { fetchDetections } from "../detections/fetchDetections";

export function DogItem({ url }) {
  const [detections, setDetections] = useState();

  useEffect(() => {
    fetchDetections(url).then(setDetections);
  }, [url]);

  return (
    <StyledListGroupItem>
      <WithDetections>
        {!detections && (
          <CenteredOverlay>
            <Spinner animation="grow" variant="success" />
          </CenteredOverlay>
        )}
        {detections &&
          detections.map(({ bbox, label, score }) => (
            <DetectionFrame key={`${bbox.x1},${bbox.y1}`} {...bbox}>
              <DetectionLabel>
                {label} {score}
              </DetectionLabel>
            </DetectionFrame>
          ))}
        <ContainedImage alt="dog" src={url} key={url} />
      </WithDetections>
    </StyledListGroupItem>
  );
}

const CenteredOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContainedImage = styled.img`
  max-width: 500px;
  max-height: 500px;
`;

const StyledListGroupItem = styled(ListGroupItem)`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
