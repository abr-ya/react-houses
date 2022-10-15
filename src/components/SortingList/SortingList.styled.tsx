import { Reorder } from "framer-motion";
import styled from "styled-components/macro";

export const DragList = styled(Reorder.Group)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const DragItem = styled(Reorder.Item)<{ bg: string }>`
  display: flex;
  height: 100px;
  width: 100px;
  background: url(${({ bg }) => bg}) center no-repeat;
  background-size: cover;
  cursor: all-scroll;
`;
