import 'bootstrap/dist/css/bootstrap.min.css'
import { Component, useState } from "react";
import { Alert, Card, Button, Container, Row, Col } from "react-bootstrap"

import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"



document.getElementsByTagName('html')[0].classList.add('h-100')
document.getElementsByTagName('body')[0].classList.add('h-100')
document.getElementById('root').classList.add('h-100')



class App extends Component {

  state = {
    bookFilter: 'history', // Variabile per tenere traccia del filtro selezionato
  }

  changeState = (label) => {
    this.setState({ bookFilter: label })
    console.log(`Filtro selezionato: ${label}`) // Per verificare
  }

  render() {
    return (
      <div className="d-flex flex-column h-100">
        <header className="d-flex flex-column flex-shrink-0">
          <MyNav title="BookShop" changeState={this.changeState} fluid={true} />
          <Welcome />
        </header>
        <main className="d-flex flex-column align-items-center justify-content flex-grow-1">

          <AllTheBooks category={this.state.bookFilter} />

        </main>
        <footer className="d-flex flex-column flex-shrink-0">
          <MyFooter />
        </footer>
      </div>
    );
  }
}

export default App;
