import React , {Component} from 'react';
import footerStyle from './footerStyle.module.css';

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className = {`${footerStyle.footer} p-4 text-center`}>
                    <span>Copyright © Your Website 2021</span>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;