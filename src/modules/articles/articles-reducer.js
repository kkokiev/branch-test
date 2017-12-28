import { ADD_ARTICLE } from './articles-actions';

const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE: {
      const { title, body } = action.payload;
      const id = state.length + 1;
      return [...state, { title, body, id }];
    }

    default: {
      return state;
    }
  }
};

export default articlesReducer;
