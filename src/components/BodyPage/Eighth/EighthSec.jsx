
import HeadPage from '../ThirdSec/HeadPage';
import './EighthSecStyle.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function EighthSec({pricing}) {
 const title="Pricing";

 
 useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });
  
 
 return (
    <div className='eighth-sec'>
        <HeadPage titlePage={title}/>
    
    <div className="pricing">{
pricing.map((e,index)=>(
<div className="itemPrice" key={index}
data-aos="zoom-in-up"
data-aos-delay={index * 1000}
>
<h2>{e.title}</h2>
    <div className="row"><h2>{e.price}</h2>/month</div>
<p>
    {e.paragraph}
</p>
<button>{e.button}</button>

</div>

))

    }
    
    </div>
    </div>
  )
}

export default EighthSec