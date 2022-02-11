import styled from "styled-components";

export const WithDetections = styled.div`
  position: relative;
`;

export const DetectionFrame = styled.div`
  align-items: flex-end;
  border-radius: 4px;
  border: 2px solid lightgreen;
  display: flex;
  height: ${(props) => props.y2 - props.y1}px;
  justify-content: center;
  left: ${(props) => props.x1}px;
  position: absolute;
  top: ${(props) => props.y1}px;
  width: ${(props) => props.x2 - props.x1}px;
`;

export const DetectionLabel = styled.span`
  background-color: gray;
  border-radius: 4px;
  color: white;
  padding: 0 4px;
  position: relative;
  transform: translateY(50%);
  white-space: nowrap;
  z-index: 1;
  :hover {
    z-index: 10;
  }
`;

export const DetectionOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
