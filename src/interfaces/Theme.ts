export default interface Theme {
  cellSize: number;
  cellColor: {[state: number]: string};
  gridlineColor: string;
  borderColor: string;
  borderWidth: number;
}
