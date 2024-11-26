import { Card, Button, Row, Col } from 'react-bootstrap'

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
  console.log('AllTheBooks props è:', props)
  return (
    <Row className='row-cols-2 row-cols-lg-3 row-cols-xxl-4 mt-1'>
      {booksArray
        .filter((book) => book.category === props.category)
        .map((book) => {
          return (
            <Col key={book.asin} className='mt-5'>
              <Card style={{ height: '500px' }} className='shadow'>
                <Card.Img
                  className='mx-auto mt-3 p-0 rounded shadow w-50'
                  variant='top'
                  src={book.img}
                  alt={`Copertina di ${book.title}`}
                  onClick={() => {
                    props.setModalShow(true, {
                      asin: book.asin,
                      title: book.title,
                      img: book.img,
                      price: book.price,
                      category: book.category,
                    })
                  }}
                />
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <Card.Title className='d-flex align-items-center py-0 m-0 mt-2 flex-grow-1'>
                    {book.title.length >= 85
                      ? book.title.slice(0, 82) + '...'
                      : book.title}
                  </Card.Title>
                  <Card.Text className='d-flex py-0 m-0 mt-2 '>
                    ASIN: {book.asin}
                  </Card.Text>
                  <Card.Text className='d-flex py-0 m-0 mt-2 justify-content-end fs-4 '>
                    <span className='fw-bold'>€ {book.price}</span>
                  </Card.Text>
                  <Card.Text className='d-flex py-0 mt-3 text-center'>
                    <Button className='mx-auto shadow'>Compra</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
    </Row>
  )
}

export default AllTheBooks
