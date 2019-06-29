export const initialState = {
  text: "",
  width: 200,
  height: 200,
  fontSize: 30,
  imageURL: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "TEXT_UPDATED": {
      const { text } = action;
      return {
        ...state,
        text
      };
    }
    case "CANVAS_UPDATED": {
      const { property, value } = action;
      return {
        ...state,
        [property]: value
      };
    }
    case "IMAGE_UPDATED": {
      const { imageURL } = action;
      return {
        ...state,
        imageURL
      };
    }
    default:
      return state;
  }
};
