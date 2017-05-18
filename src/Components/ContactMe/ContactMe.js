import React from 'react'
import './ContactMe.scss'

class ContactMe extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (name, event) {
    this.setState({ [name]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }
  render () {
    return (
      <div className='ContactMe-container' id='contact'>
        <h1>Contact Me</h1>
        <form className='ContactMe-form-container' onSubmit={this.handleSubmit}>
          <input
            placeholder='Your Name'
            value={this.state.name}
            onChange={(event) => this.handleChange('name', event)}
          />
          <input
            placeholder='Your Email'
            value={this.state.email}
            onChange={(event) => this.handleChange('email', event)}
          />
          <input
            placeholder='Your Phone'
            value={this.state.phone}
            onChange={(event) => this.handleChange('phone', event)}
          />
          <textarea
            rows='5'
            placeholder='Your Message'
            value={this.state.message}
            onChange={(event) => this.handleChange('message', event)}
          />
          <a href={`mailto:khayyam@khayyamjones.com?subject=Website Contact&body=${this.state.message} Phone:${this.state.phone} Email:${this.state.email}`}>
            <div
              className='ContactMe-form-button'
              onClick={this.handleSubmit}
            >
              Send Message
            </div>
          </a>
        </form>
      </div>
    )
  }
}

export default ContactMe
