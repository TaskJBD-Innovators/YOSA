import React from 'react';
import Navbar from '../Navbar.js';
import '../Styles/tailwind.css';
import Footer from '../Components/Footer.jsx';

const ContactUs = () => {
  return (
    <div className="relative">
      <div className="heading h-64 relative">
        <img 
          src={require('../Assets/contactus.png')} 
          alt="Header" 
          className="h-64 w-full object-cover brightness-50"
        />
        <h1 className="text-5xl text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Contact Us</h1>
        <div className="absolute top-0 left-0 right-0">
          <Navbar />
        </div>
      </div>

      

<div className='ml-20 mr-20'>
  <p>Get In Touch</p>
  <h2>Send Me A Message</h2>


  

</div>

<div className='flex h-full bg-red-200  mt-5 flex-col sm:flex-row md:flex-row gap-5 gap-x-10 align-center justify-center'  >

  {/* form goes here */}
  <div className= 'sm:w-2/3 h-full w-full bg-blue-300'>
    <form action="">
      <div name='name-section' className='flex gap-2 gap-x-10 flex-row'>
        <div name= "first-name" className='w-1/2 flex flex-col ml-1 '>
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" id="first-name" className=' w-full h-10' placeholder='First Name'/>
        </div>

        <div name= "first-name" className='w-1/2 flex flex-col mr-1 '>
        <label htmlFor="first-name">Last Name</label>
        <input type="text" name="first-name" id="first-name" className='w-full h-10' placeholder='Last Name'/>
        </div>

      </div>

      <div name= 'mail-phone-section ' className='flex gap-2 gap-x-10 flex-row mt-5'>
        <div name= 'mail-section' className='w-1/2 flex flex-col ml-1'>
          <label htmlFor="mail">Email</label>
          <input type="text" name="mail" id="mail" className='w-full h-10' placeholder='Email'/>
        </div>

        <div name='phone-section' className='w-1/2 flex flex-col mr-1 '>
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" id="phone" className='w-full h-10' placeholder='+088'/>

        </div>

      


      </div>

      <div name='message-section' className='w-full flex flex-col mr-1 p-1 mt-5'>
        <label htmlFor="message">Message</label>
        <textarea type="text-area" name="message" id="message" className='w-full h-40 ' placeholder='Message'/>

</div>

      <div name='button-section' className=' p-1 mt-5'>
     <button className='bg-slate-950 text-white h-10'>Send Message</button>   
       </div>   

    </form>

 

  </div>


  {/* contact info goes here */}
  <div className= ' sm:w-1/3 h-full  w-full bg-green-300'>
  <h1>Address</h1> 
  
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, minus quas. Ad eius doloremque iure consequatur sequi, nesciunt voluptatem quae fuga hic eos voluptatibus minus harum explicabo eligendi facere enim!
  </p>

  <p>
    <span>Location: </span>
    4517 Washington Ave. Manchester, Kentucky 39495
  </p>
  <p>
    <span>Phone: </span>
    +88544767456
  </p>
  <p>
    <span>Email: </span>
    givelifecharity@gmail.com
  </p>



  </div>


</div>


<div name='sponsors-logos' className='flex flex-row justify-space-between h-200 mt-10 mb-20'>
    <div className='w-1/4 h-200 bg-yellow-300'>
      <img src={require('../Assets/client1.png')} alt="sponsor1" className='h-200 w-full grayscale'/>
    </div>
    <div className='w-1/4 h-200 bg-yellow-300'>
    <img src={require('../Assets/client2.png')} alt="sponsor1" className='h-200 w-full grayscale'/>
    
    </div>
    <div className='w-1/4 h-200 bg-yellow-300'>
    <img src={require('../Assets/client3.png')} alt="sponsor1" className='h-200 w-full grayscale'/>
    
    </div>
    <div className='w-1/4 h-200 bg-yellow-300'>
    <img src={require('../Assets/client4.png')} alt="sponsor1" className='h-200 w-full grayscale'/>
    
    </div>

</div>

<Footer/>

    </div>
  );
};

export default ContactUs;
