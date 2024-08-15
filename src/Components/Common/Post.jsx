import React from 'react'
import Card from 'react-bootstrap/Card';

const placeholder = {
  title: "Title Goes Here", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate veritatis alias aliquam dolorum, voluptates quam ab cum ipsa necessitatibus rerum sed enim delectus totam repudiandae nulla iusto incidunt quasi ipsum labore asperiores inventore odio id. Numquam optio magni eligendi iste ipsa, sequi fugiat? Debitis, quia magnam! Enim, hic aliquam.", image: "https://archive.org/download/placeholder-image/placeholder-image.jpg"
}

function Post({title, description, image}) {
  return <div className='post'>
    <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={image ? image : placeholder.image} />
      <Card.Body>
        <Card.Title>{title ? title : placeholder.title}</Card.Title>
        <Card.Text>
          {description ? description : placeholder.description}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
}

export default Post