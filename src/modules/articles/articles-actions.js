export const ADD_ARTICLE = 'ADD_ARTICLE';

export function addArticle(title, body) {
  return {
    type: ADD_ARTICLE,
    payload: { title, body }
  };
}
