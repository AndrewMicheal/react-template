import React , {Component} from 'react';
import homeStyle from './homeStyle.module.css';
import homeImage from '../../images/home.svg';

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <div className={`${homeStyle.home} position-relative`}>
                    <div className={`${homeStyle.home_content} position-absolute text-center home-content`}>
                        <img src={homeImage} className = {homeStyle.image}  alt=""/>
                        <div className="home-info text-center my-4">
                            <h2 className = {`${homeStyle.homeTitle} text-uppercase text-white`}>start react</h2>
                        </div>
                        <div className={`${homeStyle.homeIcon} my-2 home-Icon`}>
                            <i className="fas fa-star fa-2x text-white"></i>
                        </div>
                        <div className = {`mt-4`}>
                            <h3 className = {`text-white ${homeStyle.homeSkills}`}>Graphic Artist - Web Designer - Illustrator</h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;