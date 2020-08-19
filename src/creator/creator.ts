export interface Creator {
  id: String;
  name: String;
  img_path: String;
  bio: String;
}

export interface State {
  creators: Creator[];
}

export const initialState: State = {
  creators: []
}
