import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const mapStateToProps = state => ({
  articles: state.articlesReducer
});

const enhance = compose(
  connect(mapStateToProps, null)
);

const Article = ({ articles, params }) => {
  const article = articles.filter(art => art.id === +params.id)[0];
  return (
    <div className="article">
      <div className="container">
        <div className="article__btn-wrap">
          <Link className="article__btn" to="/">Назад</Link>
        </div>
        <h1 className="article__title">{article.title}</h1>
        <div className="article__body">
          {article.body.split('\n').map((text, i) => <p className="article__text" key={i}>{text}</p>)}
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  articles: PropTypes.array,
  params: PropTypes.object.isRequired
};

Article.PropTypes = {
  articles: []
};

export default enhance(Article);
