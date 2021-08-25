import React from 'react'
import { Card } from 'react-bootstrap'
//rafc
 const Books = ({ book }) => {
    
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {book.volumeInfo.title} - <span className="text-muted
                            font-weight-light">{book.volumeInfo.authors}</span>

                        </Card.Title>
                    </div>
                </div>

            </Card.Body>
        </Card>
       
    )
}
export default Books;
