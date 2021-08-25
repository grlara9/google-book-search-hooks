import React from 'react'
import {Card , Badge } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
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
                        <Badge variant="info">{book.volumeInfo.categories}</Badge>

                        <div>
                           <ReactMarkdown source={book.volumeInfo.previewLink} />
                        </div>
                    </div>
                </div>

            </Card.Body>
        </Card>
       
    )
}
export default Books;
