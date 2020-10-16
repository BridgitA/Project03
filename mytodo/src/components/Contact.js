import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

class ContactForm extends Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      comments: '',
    }
    handleSubmit(e) {
        e.preventDefault()
        const { firstName, lastName, email, comments } = this.state
        let templateParams = {
            firstName: firstName,
            lastName: lastName,
            from_name: email,
            to_name: '<YOUR_EMAIL_ID>',
            comments_html: comments,
           }
           emailjs.send(
            'gmail',
            'template_XXXXXXXX',
             templateParams,
            'user_XXXXXXXXXXXXXXXXXXXX'
           )
           this.resetForm()
       } 
       resetForm() {
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          comments: '',
        })
      }
      handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }
      render() {
        return (
          <>
            <Layout>
              <h1 className="p-heading1">Get in Touch</h1>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId="formBasicEmail">
                  <Label className="text-muted">Email address</Label>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className="text-primary"
                    onChange={this.handleChange.bind(this, 'email')}
                    placeholder="Email"
                    required
                  />
                </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">First Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="First Name"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Last Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Last Name"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Comments</Label>
              <Input
                type="textarea"
                name="comments"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'comment')}
                placeholder="What would like to say?"
                required
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Layout>
      </>
    )
  }
}
export default ContactForm
  
     
