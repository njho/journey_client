import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Icon from 'react-icon-base';
import Transition from 'react-transition-group/Transition';

import agent from '../../Helpers/agent';
import history from '../../Helpers/history';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    remoteCapture: () => dispatch(agent.FirebaseQuery.requestCapture(null))
});


class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: false
        }
    }

    componentDidMount() {

        this.setState({
            mount: true
        })
    }

    componentWillUnmount() {
        this.setState({
            mount: false
        })
    }

    render() {
        return (
            <Transition
                unmountOnExit={true}
                in={this.state.mount}
                timeout={500}
            >
                {(state) => (
                    <div className={`start-now-banner start-now-banner-${state}`}>
                        <h1>Start Your Journey</h1>
                        <h3>Track and share your Experiences: hands free, in real-time.<br/>
                        </h3><br/>


                        <div className={'start-now'} >
                            <div className={'left'} onClick={()=>history.push('/about')}>
                                How Does it Work?
                            </div>
                            <div className={'right'}>
                                <Icon viewBox="0 0 40 40" style={{color: 'white'}} size={25}>
                                    <g>
                                        <path
                                            d="m25 10l7.8 8.2c0.5 0.5 0.7 1.1 0.7 1.8s-0.2 1.3-0.7 1.7l-7.8 8.3c-1 0.9-2.4 0.9-3.4 0s-0.9-2.7 0-3.6l3.8-3.9h-17c-1.3 0-2.4-1.1-2.4-2.5s1.1-2.5 2.4-2.5h17l-3.9-3.9c-0.9-0.9-0.9-2.7 0-3.6s2.5-0.9 3.5 0z"/>
                                    </g>

                                </Icon>
                            </div>
                        </div>
                    </div>

                )}
            </Transition>

        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GetStarted));
