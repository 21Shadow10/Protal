import React from 'react' ;
import './Contact.css' ;

class Contact extends React.Component{
    render(){
        return (
            <div class="container">
                <div class="text">
                    Contact Us
                 </div>
      <form action="#">
         <div class="form-row">
            <div class="input-data">
               <input type="text" required />
               <label for="">First Name *</label>
            </div>
            <div class="input-data">
               <input type="text" required />
               <div class="underline"></div>
               <label for="">Last Name *</label>
            </div>
         </div>
         <div class="form-row">
            <div class="input-data">
               <input type="text" required />
               <div class="underline"></div>
               <label for="">Email Address *</label>
            </div>
            <div class="input-data">
               <input type="text" required />
               <div class="underline"></div>
               <label for="">Phone Number *</label>
            </div>
         </div>
         <div class="form-row">
         <div class="input-data textarea">
            <textarea rows="8" cols="80" required></textarea>
            <br />
            <div class="underline"></div>
            <label for="">Message (if any)</label>
            <br />
            <div class="form-row submit-btn">
               <div class="input-data">
                  <div class="inner"></div>
                  <input type="submit" value="submit" />
               </div>
            </div>
            </div>
            </div>
      </form>
      </div>
        )
    }
}

export default Contact ;