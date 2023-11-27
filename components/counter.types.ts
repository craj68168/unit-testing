export interface IProps {
  count?: number;
  incrementCount?: () => void;
  decrementCount?: () => void;
  value?: number | string;
}
