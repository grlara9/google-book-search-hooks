import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Card , Badge, Collapse, Button } from 'react-bootstrap'
//rafc
 const Books = ({ book }) => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {book.volumeInfo.title} - <span className="text-muted
                            font-weight-light" >{book.volumeInfo.authors}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-1">
                            {new Date(book.volumeInfo.publishedDate).toLocaleDateString()}
                        </Card.Subtitle>
                        
                        {book.volumeInfo.categories}

                        <div>
                           {book.volumeInfo.infoLink} 
                        </div>

                        <Card.Text className="mt-3">
                       <Button variant="primary">View details</Button>
                    </Card.Text>
                   
                        <div className="mt-3">
                            <p>{book.volumeInfo.description}</p>
                        </div>
                   
                    </div>
                    <img className="d-none d-md-block" height="150" src={book.volumeInfo.imageLinks.thumbnail}/>
                    
                   
                </div>

            </Card.Body>
        </Card>
       
    )
}
export default Books;
