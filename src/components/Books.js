import  React,{ useState} from 'react'
import {Card , Badge, Button, Collapse } from 'react-bootstrap'
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
              {book.volumeInfo.title} - <span className="text-muted font-weight-light">{book.volumeInfo.authors}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(book.volumeInfo.publishedDate).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">ghj</Badge>
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
            <ReactMarkdown>{book.volumeInfo.description}</ReactMarkdown>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
      
       
    )
}
export default Books;
