import React , {Component} from 'react';
import portfolioStyle from './portfolioStyle.module.css';
import portfolioImage1 from '../../images/Portfolio/portfolio1.png';
import portfolioImage2 from '../../images/Portfolio/portfolio2.png';
import portfolioImage3 from '../../images/Portfolio/portfolio3.png';
import portfolioImage4 from '../../images/Portfolio/portfolio4.png';
import portfolioImage5 from '../../images/Portfolio/portfolio5.png';
import portfolioImage6 from '../../images/Portfolio/portfolio6.png';

class Portfolio extends Component{
    render(){
        return(
            <React.Fragment>
                <section className = "portfolio my-4 py-3">
                    <h2 className = {`${portfolioStyle.portfolioTitle} ${portfolioStyle.portfolioColor} text-center text-uppercase`}>portfolio</h2>
                    <div className={`my-3 text-center ${portfolioStyle.portfolioIcon} portfolio-icon`}>
                        <i className={`fas fa-star fa-2x ${portfolioStyle.portfolioColor}`}></i>
                    </div>
                    <div className="container">
                        <div className="row mt-4 py-3">
                            <div className="col-lg-4 my-3">
                                <div className = "portfolioItem position-relative">
                                    <img src={portfolioImage1} className = "w-100" alt=""/>
                                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                                        <i className="fas fa-plus text-white fa-3x"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 my-3">
                                <div className = "portfolioItem position-relative">
                                    <img src={portfolioImage2} className = "w-100" alt=""/>
                                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                                        <i className="fas fa-plus text-white fa-3x"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 my-3">
                                <div className = "portfolioItem position-relative">
                                    <img src={portfolioImage3} className = "w-100" alt=""/>
                                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                                        <i className="fas fa-plus text-white fa-3x"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 my-3">
                                <div className = "portfolioItem position-relative">
                                    <img src={portfolioImage4} className = "w-100" alt=""/>
                                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                                        <i className="fas fa-plus text-white fa-3x"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 my-3">
                                <div className = "portfolioItem position-relative">
                                    <img src={portfolioImage5} className = "w-100" alt=""/>
                                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                                        <i className="fas fa-plus text-white fa-3x"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 my-3">
                                <div className = "portfolioItem position-relative">
                                    <img src={portfolioImage6} className = "w-100" alt=""/>
                                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                                        <i className="fas fa-plus text-white fa-3x"></i>
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

export default Portfolio;