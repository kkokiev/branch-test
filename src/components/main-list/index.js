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

const MainList = ({ articles }) =>
  <ul className="list">
    {articles.map(article =>
      <li className="list__item" key={article.id}>
        <div className="container">
          <div className="list__item-wrap">
            <h2 className="list__item-title">
              <Link className="list__item-link" to={`${article.id}`}>{article.title}</Link>
            </h2>
            <div className="list__item-body">
              {article.body.split('\n').map((text, i) => <p className="list__item-text" key={i}>{text}</p>)}
            </div>
          </div>
        </div>
      </li>
      )}
  </ul>;

MainList.propTypes = {
  articles: PropTypes.array
};

MainList.defaultProps = {
  articles: []
};

export default enhance(MainList);
