import React, { useEffect, useState } from "react";
import { ListGroupItem, Spinner } from "react-bootstrap";
import styled from "styled-components";
import {
  DetectionFrame,
  DetectionLabel,
  WithDetections,
} from "../detections/DetectionFrame";
import { fetchDetections } from "../detections/fetchDetections";
import { fetchDataUrl } from "../utils";

export function DogItem({ url }) {
  const [detections, setDetections] = useState();
  const [dataUrl, setDataUrl] = useState();

  useEffect(() => {
    if (dataUrl) fetchDetections(dataUrl).then(setDetections);
  }, [dataUrl]);

  useEffect(() => {
    fetchDataUrl(url).then(setDataUrl);
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
        {/* Not a big performance deal to use the original url since browser
        will cache images. However, using the data url saves this presentation
        component be aware of any transform performed by the utility functions,
        like the size cap */}
        {dataUrl && <img alt="dog" src={dataUrl} key={url} />}
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

const StyledListGroupItem = styled(ListGroupItem)`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
