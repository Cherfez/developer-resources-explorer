const initialState = [
  {
    id: 1,
    name: "Kelley",
    website: "https://hi-im-kelley.netlify.com",
    favorites: [1, 2]
  },
  {
    id: 2,
    name: "Danny",
    website: null,
    favorites: [1]
  },
  {
    id: 3,
    name: "Fez",
    website: "https://cher-fez.com",
    favorites: [1]
  }
  //need to add more info. See Slices and Slice reducers
];

export default function userSliceReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
