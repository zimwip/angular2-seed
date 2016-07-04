export class GraphDataSet<T> {
  settings: { fill: string, interpolation: string };
  dataset: Array<{ x: T, y: number }>
}
