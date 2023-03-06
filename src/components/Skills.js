import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/js.png'
import reactjs from '../assets/img/reactjs.png'
import redux from '../assets/img/redux.png'
import node from '../assets/img/node.png'
import portgresql from '../assets/img/postgresql.png'
import sql from '../assets/img/sql.png'
import git from '../assets/img/git.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
// import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoplay={true}
                autoplayTimeout={300}
                className='owl-carousel owl-theme skill-slider'
              >
                <div className='item'>
                  <img src={html} alt='Web' />
                  <h5>HTML</h5>
                </div>
                <div className='item'>
                  <img src={css} alt='css' />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src={js} alt='js' />
                  <h5>JavaScript</h5>
                </div>
                <div className='item'>
                  <img src={reactjs} alt='reactjs' />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <img src={redux} alt='redux' />
                  <h5>Redux</h5>
                </div>
                <div className='item'>
                  <img src={node} alt='node' />
                  <h5>Node Js</h5>
                </div>
                <div className='item'>
                  <img src={portgresql} alt='postgresql' />
                  <h5>PostgreSQL</h5>
                </div>
                <div className='item'>
                  <img src={sql} alt='sql' />
                  <h5>SQL</h5>
                </div>
                <div className='item'>
                  <img src={git} alt='git' />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className='background-image-left' src={colorSharp} alt='Image' /> */}
    </section>
  )
}
