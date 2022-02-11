import styled from "styled-components";

export const WithDetections = styled.div`
  position: relative;
`;

export const DetectionFrame = styled.div`
  border: 2px solid lightgreen;
  position: absolute;
  border-radius: 4px;
  top: ${(props) => props.y1}px;
  left: ${(props) => props.x1}px;
  width: ${(props) => props.x2 - props.x1}px;
  height: ${(props) => props.y2 - props.y1}px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const DetectionLabel = styled.span`
  color: white;
  fontweight: bold;
  background-color: gray;
  border-radius: 4px;
  padding: 0 4px;
  transform: translateY(50%);
`;
