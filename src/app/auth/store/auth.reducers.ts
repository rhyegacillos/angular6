

export interface State {
  token: string;
  authenticated: boolean;
}
const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducer(state: State, action) {

  return state ;

}
