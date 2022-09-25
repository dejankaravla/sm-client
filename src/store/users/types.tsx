export interface iLogin {
  payload: { _id: string; isLoggedIn: boolean; admin: string };
  type: string;
}

export interface DataState {
  isLoggedIn: boolean;
  id: string;
  admin: string;
}
