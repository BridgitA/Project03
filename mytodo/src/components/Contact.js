import React from 'react';

const Contact = () => {
    
    return (
        
        <div className='container center contact'>
            <form>
               <div>
                  <label className='left'>First Name</label><br></br>
                  <input type='text' name='firstName' placeholder='First Name' required></input>
               </div><br></br> 
               <div>
                  <label className='left'>Last Name</label><br></br>
                  <input type='text' name='lastName' placeholder='Last Name' required></input>
               </div><br></br> 
               <div>
                  <label className='left'>Email</label><br></br>
                  <input type='text' name='email' placeholder='Email' required></input>
               </div><br></br>
               <div>
                  <label className='left'>Comments</label><br></br><br></br>
                  <textarea type='text' name='comments' placeholder='What would you like to say?' required></textarea>
               </div><br></br> 
               <div>
                   <button type='submit'>Submit</button>
               </div>

            </form>
        </div>
    )
}

export default Contact;

     
