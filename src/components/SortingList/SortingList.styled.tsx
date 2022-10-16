import { Reorder } from "framer-motion";
import styled from "styled-components/macro";

export const DragList = styled(Reorder.Group)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const DragItem = styled(Reorder.Item)<{ bg: string }>`
  display: flex;
  height: 100px;
  width: 150px;
  background: url(${({ bg }) => bg}) center no-repeat;
  background-size: cover;
  cursor: all-scroll;
  margin-bottom: 5px;
  border-radius: 10px;
`;
