import { DragItem, DragList } from "./SortingList.styled";

interface ISortingList {
  list: string[];
  saver: (data: string[]) => void;
}

const SortingList = ({ list, saver }: ISortingList) => (
  <DragList axis="x" values={list} onReorder={saver}>
    {list.map((item: string) => (
      <DragItem value={item} key={item} bg={item} />
    ))}
  </DragList>
);

export default SortingList;
