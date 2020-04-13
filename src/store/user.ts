export interface UserState {
  name: null | string;
  id: string | null;
  accessToken: string | null;
}
export const userStore = {
  namespaced: true as true,
  state: {
    name: null,
    id: null,
    accessToken: null
  } as UserState,
  getters: {
    message: (state: UserState) => `Hello, ${state.name}!`
  },
  mutations: {
    SET_NAME(state: UserState, newName: string) {
      state.name = newName;
    }
  },
  actions: {
    async loadName(context: any, payload: { id: string }) {
      const name = `Name-${payload.id}`; // load it from somewhere
      context.commit("SET_NAME", name);
      return { name };
    }
  }
};
