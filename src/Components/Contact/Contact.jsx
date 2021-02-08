import React , {Component} from 'react';
import contactStyle from './contactStyle.module.css';

class Contact extends Component{
    render(){
        return(
            <React.Fragment>
            
                <section className = "mt-5">
                    <h2 className = {`${contactStyle.contactTitle} ${contactStyle.contactColor} text-center text-uppercase `}>contact me</h2>
                    <div className={`my-3 text-center ${contactStyle.contactIcon} contact-icon`}>
                        <i className={`fas fa-star fa-2x ${contactStyle.contactColor}`}></i>
                    </div>
                   <div className="container">
                    <form className = "my-4 py-4">
                        <div className="form-group w-75 m-auto position-relative">
                            <input type="text" className={`form-control w-75 ${contactStyle.Input}`} placeholder = "Name"/>
                        </div>
                        <div className="form-group w-75 m-auto position-relative">
                            <div className = "my-3">
                                <input type="email" className={`form-control w-75 ${contactStyle.Input}`} placeholder = "Email"/>
                            </div>
                        </div>
                        <div className="form-group w-75 m-auto position-relative">
                            <div className = "my-3">
                                <input type="number" className={`form-control w-75 ${contactStyle.Input}`} placeholder = "Phone Number"/>
                            </div>
                        </div>
                        <div className="form-group w-75 m-auto position-relative">
                            <div className = "my-3">
                                <textarea  cols="20" className={`form-control w-75 ${contactStyle.Input}`} placeholder = "Message" rows="2"></textarea>
                            </div>
                        </div>
                    </form>
                   </div>
                   <div className={`${contactStyle.contactItems} text-white`}>
                       <div className="container">
                           <div className="row">
                               <div className="col-lg-4">
                                   <div className="contactItem pt-5">
                                       <h2 className = "text-uppercase">location</h2>
                                       <span>2215 John Daniel Drive Clark, MO 65243</span>
                                   </div>
                               </div>
                               <div className="col-lg-4">
                                   <div className="contactItem pt-5">
                                       <h2 className = "text-uppercase">around the web</h2>
                                       <div className = {`${contactStyle.socialIcons} `}>
                                            <div className={`${contactStyle.socialIcon}`}>
                                                <i className="fab fa-facebook-f fa-lg text-white"></i>
                                            </div>
                                            <div className={`${contactStyle.socialIcon}`}>
                                                <i className="fab fa-twitter fa-lg text-white"></i>
                                            </div>
                                            <div className={`${contactStyle.socialIcon}`}>
                                                <i className="fab fa-linkedin-in fa-lg text-white"></i>
                                            </div>
                                            <div className={`${contactStyle.socialIcon}`}>
                                                <i className="fab fa-dribbble fa-lg text-white"></i>
                                            </div>
                                       </div>
                                       
                                   </div>
                               </div>
                               <div className="col-lg-4">
                                   <div className="item pt-5">
                                       <h2 className = "mb-4 text-white">ABOUT FREELANCER</h2>
                                       <p className = "text-white">Freelance is a free to use, MIT licensed Bootstrap theme created by .</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Contact;