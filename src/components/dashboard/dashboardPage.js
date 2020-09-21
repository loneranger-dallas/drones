import React, { Component } from "react";
import { connect } from "react-redux";
import * as dashboardActions from "redux/actions/dashboardActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Masthead from "components/common/masthead/Masthead";
import Footer from "components/common/footer/Footer";
import styles from "./dashboardPage.module.scss";
import DroneList from "components/dashboard/DroneList";
import LiveMap from "components/dashboard/LiveMap/LiveMap"

class DashboardPage extends Component {
    componentDidMount() {
        const { actions } = this.props;

        function loadDrones() {
            actions.loadDronesInfo().catch(error => {
                alert("Loading drones failed.");
            });
        }
        loadDrones();
        setInterval(loadDrones, 1000);
    }
    render() {
        const { auth } = this.props;
        return (
            <div className={`flex fdc ${styles.container}`}>
                <Masthead auth={auth}></Masthead>
                <div className={`flex elastic p3 ${styles.workspace}`}>
                    <div className={`flex elastic p3 ${styles.paperSheet}`}>
                        <DroneList drones={this.props.drones} />
                        <LiveMap drones={this.props.drones}></LiveMap>
                    </div>
                </div>
                <Footer></Footer>
            </div >
        );
    }
}

DashboardPage.propTypes = {
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        drones:
            state.dashboard.drones.length === 0
                ? []
                : state.dashboard.drones.map(drone => {
                    return { ...drone };
                })
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadDronesInfo: bindActionCreators(dashboardActions.loadDronesInfo, dispatch),
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPage);