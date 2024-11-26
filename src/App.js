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

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <header className="d-flex flex-column flex-shrink-0">
        <MyNav title="BookShop" fluid={true} />
        <Welcome />
      </header>
      <main className="d-flex flex-column align-items-center justify-content flex-grow-1">
        <div className="row row-col-12 row-col-md-6 row-col-lg-4">

          <AllTheBooks category={'fantasy'} />

        </div>
      </main>
      <footer className="d-flex flex-column flex-shrink-0">
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
