interface IHistoryItem {
  name: string;
  path: string;
}
export interface IBreadCrumbPath {
  key: string;
  history: IHistoryItem[];
}
