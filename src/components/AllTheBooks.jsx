import {
  Alert,
  Card,
  ListGroup,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap'

import fantasyBooks from '../assets/fantasy.json'
import historyBooks from '../assets/history.json'
import horrorBooks from '../assets/horror.json'
import romanceBooks from '../assets/romance.json'
import scifiBooks from '../assets/scifi.json'

const booksArray = [
  ...fantasyBooks,
  ...historyBooks,
  ...horrorBooks,
  ...romanceBooks,
  ...scifiBooks,
]

function AllTheBooks(props) {
  console.log(props)
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-5'>
      {booksArray
        .filter((book) => book.category === props.category)
        .map((book) => {
          return (
            <div key={book.asin} className='col'>
              <Card>
                <Card.Img
                  className='img-fluid'
                  variant='top'
                  src={book.img}
                  alt={`Copertina di ${book.title}`}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>ASIN: {book.asin}</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Text className='text-end fs-4 '>
                    <span className='fw-bold'>€ {book.price}</span>
                  </Card.Text>
                  <Card.Text className='text-center'>
                    <Button className='mx-auto'>Compra</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )
        })}
    </div>
  )
}

export default AllTheBooks
