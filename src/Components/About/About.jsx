import React , {Component} from 'react';
import aboutStyle from './aboutStyle.module.css';

class About extends Component{
    render(){
        return(
            <React.Fragment>
                <section className = {`my-4 ${aboutStyle.about} p-5`}>
                    <h2 className = {`text-uppercase text-center text-white ${aboutStyle.title}`}>about</h2>
                    <div className={`my-3 text-center ${aboutStyle.aboutIcon} about-icon`}>
                        <i className={`fas fa-star fa-2x ${aboutStyle.aboutColor} text-white`}></i>
                    </div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <div className={`text-white`}>
                                    <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={`text-white`}>
                                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default About;