import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import Input from '../../ui/form/input';
import Textarea from '../../ui/form/textarea';
import { addArticle } from '../../modules/articles/articles-actions';

const enhance = compose(
  connect(null, { addArticle }),
  withState('state', 'setState', { title: '', body: '', showError: false }),
  withHandlers({
    onTitleChange: ({ setState }) => value => setState(state =>
      ({ ...state, title: value, showError: false })
    ),
    onBodyChange: ({ setState }) => value => setState(state =>
      ({ ...state, body: value, showError: false })
    ),
    onSubmit: ({ state, state: { title, body }, setState, addArticle }) => (e) => {
      e.preventDefault();

      if (title.length === 0 || body.length === 0) {
        setState({ ...state, showError: true });
        return;
      }

      addArticle(title, body);
      setState({ title: '', body: '', showError: false });
    }
  })
);

const MainForm = ({
  formTitle,
  state: { title, body, showError },
  onTitleChange,
  onBodyChange,
  onSubmit
}) =>
  <form className="form" onSubmit={onSubmit}>
    {formTitle &&
      <h2 className="form__title">{formTitle}</h2>
    }
    <div className="form__input-grp">
      <Input
        className="input"
        placeholder="Название поста"
        onChange={onTitleChange}
        value={title}
      />
    </div>
    <div className="form__input-grp">
      <Textarea
        className="textarea"
        placeholder="Содержание поста"
        onChange={onBodyChange}
        value={body}
      />
    </div>
    {showError &&
      <p className="form__error">Пост должен содержать название и текст!</p>
    }
    <div className="form__submit-grp">
      <input className="form__submit-btn" type="submit" value="Создать пост" />
    </div>
  </form>;

MainForm.propTypes = {
  formTitle: PropTypes.string,
  onBodyChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    showError: PropTypes.bool.isRequired
  })
};

export default enhance(MainForm);
