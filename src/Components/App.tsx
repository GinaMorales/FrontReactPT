import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Contenido from './Contenido';

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header></Header>
        <div className="container bg-light">
          <Contenido></Contenido>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}