//React-BootStrap Components
import { Alert, Breadcrumb, Button, Card, Form } from 'react-bootstrap';

//Importing Styles for React-BootStrap Components
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Button>My First Button</Button>
      <Button variant="warning">Warning Button</Button>

      {/* A breadcrumb or breadcrumb trail is a graphical control element used as a navigational aid
       in user interfaces and on web pages. It allows users to keep track and maintain awareness of 
       their locations within programs, documents, or websites */}
      <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test3</Breadcrumb.Item>
      </Breadcrumb>

      <Alert>This an alert</Alert>

      {/* Spacing */}
      {/* The classes are named using the format {property}{sides}-{size} for xs and {property}{sides}-{breakpoint}-{size} for sm, md, lg, and xl. */}
      <Card className='mb-3'>
        <Card.Img src="https://justinmahar.gallerycdn.vsassets.io/extensions/justinmahar/react-bootstrap-snippets/2.1.0/1674710651199/Microsoft.VisualStudio.Services.Icons.Default"  style={{ width: '100px' }}/>
        <Card.Body>
          <Card.Title>
            Card Example
          </Card.Title>
          <Card.Text>
            This is an example of react bootstrap card
          </Card.Text>
          <Button>Read More</Button>
        </Card.Body>
      </Card>

      <Form>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder='basmaelhoseny6@gmail.com'/>
          <Form.Text>
            we'll never share your email trust us :D
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder='Password'/>
        </Form.Group>
        <Button variant='secondary' type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default App;
