import React, { Component } from 'react';
import './Home.css';
import PresenceStatus from '../Presence-Status/Presence-Status';

import PRESENCE_LABELS from '../mock/mock-data';

class Home extends Component {
    state = {
        presenceLabels: PRESENCE_LABELS,
        windowSize: "",
        containerWidth: 160
    }

    handleResize = e => {
        const windowSize = window.innerWidth;
        const containerWidth = (windowSize >= 480 && 160) || 100;
        this.setState(prevState => {
            return {
                windowSize,
                containerWidth
            };
        });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        return (
            <div>
                <div>
                    <PresenceStatus
                        labelData={this.state.presenceLabels}
                        containerWidth={this.state.containerWidth}/>
                </div>
            </div>
        );
    }
}

export default Home;
