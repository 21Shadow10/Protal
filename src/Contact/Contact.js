import React from 'react' ;
import ReactDOM from 'react-dom' ;
import './Contact.css' ;

class Contact extends React.Component{
    render(){
        return (
            <div className='form'>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <label htmlFor="fname">First Name *</label>
                            </td>
                            <td>
                                <label htmlFor="lname">Last Name *</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input name="fname" type="text"></input>
                            </td>
                            <td>
                                <input name="lname" type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="mail">Email *</label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input className = "large" type="email" name="mail"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="phone">Phone Number *</label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input className="large" type="tel" name="phone"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="message">Message (if any)</label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <textarea className="large" name="message" rows="40"></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default Contact ;