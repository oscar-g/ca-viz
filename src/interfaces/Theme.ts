export default interface Theme {
  cellSize: number;
  cellColor: {[state: number]: string};
  gridBackgroundColor: string;
  gridlineColor: string;
}
