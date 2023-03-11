import React, { Component } from 'react';


class Footer extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="d-flex my-1 justify-content-center">
                <span>&copy; {new Date().getFullYear()} Developed by <a href="http://enibly.com/" target="_blank" rel="noopener noreferrer">Aries Harry Pratama</a></span>
            </div>
        );
    }

}

export default Footer;