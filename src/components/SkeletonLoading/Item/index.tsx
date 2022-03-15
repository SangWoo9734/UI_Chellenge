import { Content } from './style';

export interface Props {
  width?: string | number;
  height?: string | number;
}

function Item({ width = 150, height = 150 }: Props) {
  return <Content width={width} height={height}></Content>;
}

export default Item;
