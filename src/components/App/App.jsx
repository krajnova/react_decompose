import React from 'react';
import './App.css';

import { Welcome } from '../Welcome';
import { Header } from '../Header';
import { Article } from '../Article';

export const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);
