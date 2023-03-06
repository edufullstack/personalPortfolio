import { Container, Row, Col } from 'react-bootstrap'
// import { MailchimpForm } from './MailchimpForm'
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
// import navIcon2 from '../assets/img/nav-icon2.svg'
// import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col size={8} sm={2}>
            <img src={logo} alt='Logo' />
          </Col>
          <Col size={14} sm={10} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/joseeduardoramirezhernandez/'>
                <img
                  src={navIcon1}
                  alt='Icon'
                  target='_blank'
                  rel='noreferrer'
                />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
