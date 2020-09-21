import React, { Component } from 'react';
import styles from "./footer.module.scss";

class Footer extends Component {
    render() {
        return (
            <div className={`flex fsb fife pl6 pt2 pr6 pb2 ${styles.container}`}>
                <div>
                    <span>© 2019 Sergio Diaz</span>
                </div>
            </div>
        );
    }
}

export default Footer;