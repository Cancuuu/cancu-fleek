// constantes
const initialData = {
  characters: [],
  filter: {
    name: "",
    status: "",
    gender: "",
  },
};

const GET_CHARACTERS_SUCCESFUL = "GET_CHARACTERS_SUCCESFUL";
const ADD_NAME = "ADD_NAME";
const ADD_STATUS = "ADD_STATUS";
const ADD_GENDER = "ADD_GENDER";

//reducers

export default function filterReducer(state = initialData, action) {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESFUL:
      return {
        ...state,
        characters: action.payload,
      };
    case ADD_NAME:
      return {
        ...state,
        filter: {
          ...state.filter,
          name: action.payload,
        },
      };
    case ADD_STATUS:
      return {
        ...state,
        filter: {
          ...state.filter,
          status: action.payload,
        },
      };
    case ADD_GENDER:
      return {
        ...state,
        filter: {
          ...state.filter,
          gender: action.payload,
        },
      };
    default:
      return state;
  }
}

//actions

export const getCharacters = (characters) => (dispatch, getState) => {
  dispatch({
    type: GET_CHARACTERS_SUCCESFUL,
    payload: characters,
  });
};

export const addName = (name) => (dispatch, getState) => {
  dispatch({
    type: ADD_NAME,
    payload: name.toLowerCase(),
  });
};

export const addStatus = (status) => (dispatch, getState) => {
  dispatch({
    type: ADD_STATUS,
    payload: status.toLowerCase(),
  });
};

export const addGender = (gender) => (dispatch, getState) => {
  dispatch({
    type: ADD_GENDER,
    payload: gender.toLowerCase(),
  });
};
