import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(){
    return(
        <div>
               
      <div className='container'>
        <div>
            <div className="row">
                <div className="col-4">
                  <div className="card" >
      <img style={{height:"250px", width:"250px"}} src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960" className="card-img-top" alt="..."/> 
       <div className="card-body">
    <h5 className="card-title">frrari</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <Link to='/' className="btn btn-primary">Go somewhere</Link>
  </div>
 </div></div>
               <div className="col-4">
                <div className="card" >
 <img style={{height:"250px", width:"250px"}}  src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/Mahindra_Scorpio_BS6_Napoli_Bl.jpeg?size=690:388" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title">Scorpio</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/' className="btn btn-primary">Go somewhere</Link>
  </div>
 </div></div>
               <div className="col-4">
                <div className="card">
  <img style={{height:"250px", width:"250px"}} src="https://www.amalgamcollection.com/cdn/shop/products/DSCF4681_Resized_4000x2677_crop_center.jpg?v=1601657547" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title">frrari</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <Link to='/' className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
</div>

        </div>
     </div>
   

      </div>
    
        </div>
      )
}