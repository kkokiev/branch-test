import React from 'react';

import MainForm from '../main-form';
import MainList from '../main-list';

const MainPage = () =>
  <div>
    <div className="hero">
      <div className="container">
        <div className="form-wrap">
          <MainForm formTitle="Форма создания поста" />
        </div>
      </div>
    </div>

    <div className="list-wrap">
      <MainList />
    </div>

  </div>;

export default MainPage;
