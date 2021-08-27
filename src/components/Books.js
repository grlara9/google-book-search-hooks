import {React, useState} from 'react'
import {Card , Collapse, Badge, Button } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
//rafc

 const Books = ({ book }) => {

    const [open, setOpen]= useState(false)

    const toggle = () => setOpen(!open)
    return (
        <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {book.volumeInfo.title} - <span className="text-muted font-weight-light">{book.volumeInfo.title}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date().toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">ghj</Badge>
            <Badge variant="secondary"><p>hola</p></Badge>
            <div style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown  />
            </div>
          </div>
          <img className="d-none d-md-block" height="50" />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="primary"
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={book.volumeInfo.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
      
       
    )
}
export default Books;
