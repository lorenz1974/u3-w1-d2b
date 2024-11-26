import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

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
    <div className='row'>
      {booksArray
        .filter((book) => book.category === props.category)
        .map((book) => {
          return (
            <div key={book.asin} className='col mt-3'>
              <Card>
                <Card.Img
                  variant='top'
                  src={book.img}
                  alt={`Copertina di ${book.title}`}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>ASIN: {book.asin}</Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                  <ListGroup.Item>Prezzo: €{book.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href='#'>Compra</Card.Link>
                </Card.Body>
              </Card>
            </div>
          )
        })}
    </div>
  )
}

export default AllTheBooks
