import React from 'react'
// import ReactDOM from 'react-dom'
import './NavBar.scss'

const pageName = 'Khayyam.ga'

const links = [
  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Resume',
    href: '#resume'
  },
  {
    name: 'Contact',
    href: '#Contact'
  }
]

let scrollTop

class NavBar extends React.Component {
  constructor () {
    super()
    this.state = {
      transform: -60
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (event) {
    scrollTop = event.srcElement.body.scrollTop
    let itemTranslate = Math.min(0, scrollTop / 3 - 65)
    this.setState({ transform: itemTranslate })
  }

  render () {
    return (
      <nav
        className={this.state.transform === 0 ? 'navbar navbar-fixed-top' : 'navbar navbar-default'}
        ref='navbar'>
        <div>
          <a className='navbar-header' href='#page-top'>{pageName}</a>
        </div>
        <div>
          <ul className='navbar-right'>
            {links.map(link => {
              return (
                <li key={link.name}>
                  <a className='navbar-item' href={link.href}>{link.name}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
