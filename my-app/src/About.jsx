import React from 'react'
import NavBar from './NavBar'

const About = () => {
  return (
    <> 
    <NavBar/>
        <div className="card" >
  <img src="https://cdn.shopify.com/s/files/1/1346/6417/files/about-healthcare-mattresses-homecare_e51db0d8-6207-4d5d-b5c3-9d6006a98199.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
    </>
  )
}

export default About