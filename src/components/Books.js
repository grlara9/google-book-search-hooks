import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Card , Badge } from 'react-bootstrap'
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
                    </div>
                    <img alt="logo" src={book.volumeInfo.imageLinks.thumbnail}/>
                </div>

            </Card.Body>
        </Card>
       
    )
}
export default Books;
