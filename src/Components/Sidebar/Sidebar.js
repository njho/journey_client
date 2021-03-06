import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Icon from 'react-icon-base';
import Transition from 'react-transition-group/Transition';

import SponsoredContribution from './SponsoredContribution'
import agent from '../../Helpers/agent';


import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-rickiest.css';

import member1 from '../Assets/member1.jpeg';
import member2 from '../Assets/member2.jpg';
import member3 from '../Assets/member3.jpeg';
import member4 from '../Assets/member4.jpg';
import member7 from '../Assets/member7.jpg';

const mapStateToProps = state => ({
    ...state,
    user: state.auth.user,

    sidebarExpanded: state.common.sidebarExpanded,
    author: state.choreographer.liveJourneyAuthor
});

const mapDispatchToProps = dispatch => ({
    setSidebarExpanded: (value) => dispatch({
        type: 'SET_SIDEBAR_EXPANDED',
        value: value
    }),
    login: () => dispatch(agent.Auth.login()),
    logout: () => {
        dispatch(agent.Auth.logout())
    },
    remoteCapture: (fcmToken) => dispatch(agent.FirebaseQuery.requestCapture(fcmToken))


});


class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: {member1: member1, member2: member2, member3: member3, member4: member4, member7: member7},
            context: ['context1', 'context 2', 'context3', 'context4'],

        }
    }


    membersMap = () => {
        return Object.keys(this.state.members).map(function (key, index) {
            return (
                <div key={index} className="member-container hvr-grow">
                    <div className={'member'}
                         style={{
                             backgroundImage: `url(${this.state.members[key]})`,

                             backgroundSize: 'cover',
                         }}
                    >
                    </div>
                </div>)
        }, this);
    };

    render() {
        return (
            <div className={'sidebar'}>
                <div className={"close"} onClick={() => this.props.setSidebarExpanded(!this.props.sidebarExpanded)}>
                    <Icon viewBox="0 0 40 40" size={18}>
                        <g>
                            <path
                                d="m34.7 30.2c0.2 0.3 0.3 0.5 0.3 0.8s-0.1 0.6-0.3 0.8l-3 2.9c-0.2 0.2-0.4 0.3-0.7 0.3s-0.5-0.1-0.8-0.3l-10.2-10.2-10.2 10.2c-0.3 0.2-0.4 0.3-0.7 0.3s-0.6-0.1-0.8-0.3l-3-2.9c-0.2-0.2-0.3-0.5-0.3-0.8s0.1-0.5 0.3-0.8l10.3-10.2-10.3-10.2c-0.4-0.3-0.4-1.1 0-1.5l2.9-3c0.2-0.1 0.5-0.3 0.8-0.3s0.5 0.1 0.8 0.3l10.2 10.2 10.2-10.2c0.3-0.1 0.5-0.3 0.8-0.3s0.6 0.1 0.8 0.3l2.9 3c0.4 0.4 0.4 1.1 0 1.5l-10.3 10.1z"/>
                        </g>

                    </Icon>
                </div>

                <div className={'sidebar-logo'}>

                    <img className={`logo-image`}
                         src={"https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/The_North_Face_logo.svg/1200px-The_North_Face_logo.svg.png"}/>

                    <div className={'title-block'}>

                        <div className={`title`}>
                            HYPOXIC
                        </div>


                        <div className={`context  `}>
                            /WOMEN OF ADVENTURE
                        </div>


                        <div className={`context  `}>
                            /ALWAYS EXPLORE
                        </div>


                        <div className={`context  `}>
                            /GARMENT ENGINEERING
                        </div>
                    </div>

                </div>


                <div className={'information'}>

                    <div className={'caption'}>
                        For more than 50 years, The North Face has empowered people to push their boundaries in the
                        outdoors. Today, we continue with that adage, having our athletes scale the North Face of
                        Everest without oxygen - in record time.
                    </div>

                    <div className={'scroll-members'}>
                        {this.membersMap()}
                        <div className={'place-holder-member'}>+7</div>
                    </div>

                    {this.props.user !== null ?

                    <div className={'main-info'}>

                        <div className={'statistic'}>
                            <Icon className={'icon'} viewBox="0 0 40 40" size={20}>
                                <g>
                                    <path
                                        d="m19.8 3.8c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m0 31.1c8.2 0 14.9-6.7 14.9-14.9s-6.7-14.9-14.9-14.9-15 6.7-15 14.9 6.7 14.9 15 14.9z m0.6-24.9v9.4h9.4v1.3h-9.4v9.3h-1.4v-9.3h-9.2v-1.3h9.2v-9.4h1.4z"/>
                                </g>
                            </Icon>
                            33 Interactions
                        </div>
                        <div className={'statistic'}>
                            <Icon className={'icon'} viewBox="0 0 40 40" size={20}>
                                <g>
                                    <path
                                        d="m25.7 17.8c1.6 0.8 2.8 2.4 2.8 4.3 0 1.3-0.2 1.7-1.2 1.7h-6.3l-0.9 13.7h-0.7l-0.9-13.7h-6.3c-1 0-1.2-0.4-1.2-1.7 0-1.9 1.3-3.5 2.8-4.3 0.1 0 0.2-0.1 0.3-0.1 0.6-0.4 1-0.9 1.1-1.5l1.4-9.2v-0.4c0-0.6-0.3-0.8-0.8-1.1 0 0 0 0-0.1 0-0.6-0.3-1-0.7-1-1.4 0-1.5 0.5-1.6 1.5-1.6h7.1c1 0 1.5 0.1 1.5 1.6 0 0.7-0.4 1.1-1 1.4-0.1 0-0.1 0-0.1 0-0.5 0.3-0.8 0.5-0.8 1.1v0.4l1.4 9.2c0.1 0.6 0.5 1.1 1.1 1.5 0.1 0 0.2 0.1 0.3 0.1z"/>
                                </g>
                            </Icon>
                            44 Pins
                        </div>

                        <div className={'statistic'}>
                            <Icon className={'icon'} viewBox="0 0 40 40" size={20}>
                                <g>
                                    <path
                                        d="m33.3 7.5c3.6 3.7 3.6 9.7 0 13.4l-13.5 14.1-13.6-14.1c-3.6-3.7-3.6-9.7 0-13.4 3.1-3.3 8.3-3.3 11.4 0l2.2 2.2 2.1-2.2c3.2-3.3 8.3-3.3 11.4 0z"/>
                                </g>
                            </Icon>
                            4400 likes
                        </div>


                    </div> : null}
                </div>

                {this.props.user !== null ? <AwesomeButton style={{marginTop: '30px'}}
                                                           action={() => this.props.remoteCapture(this.props.author.fcm_token)}>Take A Look</AwesomeButton> :
                    <div className={'live-prompt'}>
                        <strong> This User is Currently Live!<br/></strong>
                        <span style={{fontSize: '0.8rem',}}> Sign in to Request Live Updates and to Interact with this Journey</span>
                        <div className="facebook-login"
                             onClick={() => this.props.login()}>
                            <img className={'login-icon'} alt=""
                                 src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"/> Sign in
                            with
                            Facebook
                        </div>
                    </div>
                }


                <div className={'footer'}>
                        <span className={'social-text'}>
                        The North Face Social:
                        </span>
                    <div>
                        <Icon className={'social-icon'} viewBox="0 0 40 40"
                              size={this.props.windowWidth > 800 ? 25 : 18}>
                            <g>
                                <path
                                    d="m19.8 3.8c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m0.6 9.6v6h5.8c0-2.4-0.4-4.7-0.8-6.6-1.7 0.4-3.3 0.6-5 0.6z m0-1.2c1.5-0.1 3.2-0.2 4.7-0.6-1.1-3.6-3-6-4.7-6.4v7z m-1.3-7c-1.8 0.4-3.5 2.8-4.7 6.4 1.5 0.4 3.1 0.5 4.7 0.6v-7z m0 8.2c-1.7 0-3.4-0.2-5.1-0.6-0.4 1.9-0.7 4.2-0.8 6.6h5.9v-6z m-7.2 6c0.1-2.5 0.4-4.9 0.9-6.9-1.6-0.5-3.2-1.2-4.6-2-2 2.5-3.2 5.5-3.4 8.9h7.1z m0 1.2h-7.1c0.2 3.4 1.4 6.4 3.4 8.9 1.5-0.8 3-1.5 4.6-2-0.6-2-0.8-4.4-0.9-6.9z m1.3 0c0.1 2.4 0.4 4.7 0.8 6.6 1.7-0.4 3.4-0.6 5.1-0.7v-5.9h-5.9z m5.9 7.2c-1.6 0.1-3.2 0.2-4.7 0.6 1.2 3.6 2.9 6 4.7 6.4v-7z m1.3 7c1.7-0.4 3.6-2.8 4.7-6.4-1.5-0.4-3.2-0.5-4.7-0.6v7z m0-8.3c1.7 0.1 3.3 0.3 5 0.7 0.4-1.9 0.8-4.2 0.8-6.6h-5.8v5.9z m7.2-5.9c-0.1 2.5-0.4 4.9-1 6.9 1.7 0.5 3.2 1.2 4.7 2 2-2.5 3.2-5.5 3.4-8.9h-7.1z m0-1.2h7.1c-0.2-3.4-1.4-6.4-3.4-8.9-1.5 0.8-3 1.5-4.6 2 0.6 2 0.8 4.4 0.9 6.9z m2.8-9.9c-2-1.9-4.4-3.4-7.1-4 1.2 1.3 2.2 3.3 3 5.8 1.4-0.5 2.7-1.1 4.1-1.8z m-14.2-4c-2.7 0.6-5.2 2.1-7.1 4 1.3 0.7 2.7 1.2 4.1 1.7 0.8-2.4 1.8-4.4 3-5.7z m-7.1 25c2 1.9 4.4 3.4 7.1 4-1.2-1.3-2.3-3.3-3.1-5.7-1.4 0.4-2.7 1-4 1.7z m14.2 4c2.7-0.6 5.1-2.1 7.1-4-1.4-0.7-2.7-1.3-4.1-1.8-0.8 2.5-1.8 4.5-3 5.8z"/>
                            </g>
                        </Icon>
                        <Icon className={'social-icon'} viewBox="0 0 40 40"
                              size={this.props.windowWidth > 800 ? 25 : 18}>
                            <g>
                                <path
                                    d="m35 8.8v22.5c0 2.1-1.7 3.7-3.7 3.7h-22.5c-2.1 0-3.8-1.6-3.8-3.7v-22.5c0-2.1 1.7-3.8 3.8-3.8h22.5c2 0 3.7 1.7 3.7 3.8z m-15 5c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.3 6.2 6.3 6.3-2.9 6.3-6.3-2.9-6.2-6.3-6.2z m12.5-1.3v-3.7c0-0.8-0.5-1.3-1.2-1.3h-3.8c-0.7 0-1.2 0.5-1.2 1.3v3.7c0 0.7 0.5 1.3 1.2 1.3h3.8c0.7 0 1.2-0.6 1.2-1.3z m-1.2 20c0.7 0 1.2-0.5 1.2-1.2v-13.8h-4.1c0.3 0.8 0.4 1.6 0.4 2.5 0 2.3-0.9 4.5-2.5 6.2s-4 2.6-6.3 2.6-4.5-1-6.2-2.6-2.5-3.9-2.5-6.2c0-0.9 0.1-1.7 0.3-2.5h-4.1v13.8c0 0.7 0.6 1.2 1.3 1.2h22.5z"/>
                            </g>
                        </Icon>
                        <Icon className={'social-icon'} viewBox="0 0 40 40"
                              size={this.props.windowWidth > 800 ? 25 : 18}>
                            <g>
                                <path
                                    d="m22.5 15h5l-0.6 5h-4.4v15h-6.5v-15h-3.5v-5h3.5v-3.4c0-4.2 1.8-6.6 7.1-6.6h4.4v5h-2.7c-2.1 0-2.3 0.7-2.3 2v3z m3.3 3.8l0.3-2.5h-4.8v-4.3c0-0.7 0-1.6 0.7-2.3 0.7-0.9 1.9-1 2.8-1h1.5v-2.5h-3.2c-2.2 0-3.8 0.5-4.7 1.5-0.7 0.8-1.1 2.1-1.1 3.9v4.6h-3.5v2.5h3.5v15h4v-15h4.5z"/>
                            </g>
                        </Icon>
                        <Icon className={'social-icon'} viewBox="0 0 40 40"
                              size={this.props.windowWidth > 800 ? 25 : 18}>
                            <g>
                                <path
                                    d="m14.3 30h-4.3v-13.4h4.3v13.4z m-2-15.4c-1.4 0-2.3-1-2.3-2.3 0-1.3 0.9-2.3 2.3-2.3s2.3 1 2.3 2.3c0 1.3-0.9 2.3-2.3 2.3z m12.8 1.7c2.8 0 4.9 1.9 4.9 5.9v7.8h-4.3v-7.3c0-1.8-0.6-2.9-2.2-2.9-1.2 0-1.9 0.7-2.2 1.5-0.1 0.3-0.1 0.7-0.1 1.1v7.6h-4.3v-13.4h4.3v1.9c0.6-0.8 1.6-2.2 3.9-2.2z m7.5-11.3c1.4 0 2.4 1 2.4 2.3v25.1c0 1.4-1 2.6-2.4 2.6h-25c-1.4 0-2.6-1.2-2.6-2.6v-25.1c0-1.3 1.2-2.3 2.6-2.3h25z m-0.3 27.5c0.1 0 0.2-0.1 0.2-0.2v-24.6c0-0.1-0.1-0.2-0.2-0.2h-24.6s-0.2 0.1-0.2 0.2v24.6s0.1 0.2 0.2 0.2h24.6z"/>
                            </g>
                        </Icon>
                        <Icon className={'social-icon'} viewBox="0 0 40 40"
                              size={this.props.windowWidth > 800 ? 25 : 18}>
                            <g>
                                <path
                                    d="m20.7 7.5h-1.4c-5.1 0-9.2 0.2-13.1 0.3h-0.2c-1.8 0-3.3 1.7-3.3 3.8v0.2c-0.1 2.7-0.2 5.5-0.2 8.2 0 2.7 0.1 5.5 0.2 8.1v0.3c0 1.1 0.4 2 1.1 2.8 0.7 0.7 1.4 1 2.2 1h0.2c4 0.1 8.4 0.3 12.9 0.3h1.8c4.5 0 8.8-0.2 12.9-0.3h0.2c0.8 0 1.5-0.3 2.2-1 0.7-0.8 1.1-1.7 1.1-2.8v-0.3c0.1-2.6 0.2-5.3 0.2-8.1 0-2.8-0.1-5.5-0.2-8.2v-0.2c0-2.1-1.5-3.9-3.3-3.9h-0.2c-3.8-0.1-8-0.2-13.1-0.2z m0-2.5c4.5 0 9 0 13.3 0.2 3.2 0 5.8 2.8 5.8 6.4 0.1 2.8 0.2 5.6 0.2 8.4s-0.1 5.5-0.2 8.4c0 3.5-2.6 6.3-5.8 6.3-4.3 0.2-8.7 0.3-13.1 0.3h-1.8c-4.4 0-8.8-0.1-13.1-0.3-3.2 0-5.8-2.8-5.8-6.3-0.1-2.9-0.2-5.6-0.2-8.4s0.2-5.5 0.3-8.4c0-3.5 2.5-6.4 5.7-6.4 4.3-0.1 8.8-0.2 13.3-0.2h1.4z m-4.5 22.7v-15.4l11.3 7.7z"/>
                            </g>
                        </Icon>
                    </div>
                </div>
            </div>

        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));

/*     <div className={'interactions'}>
                    <div className={'action'}>
                        <Icon className={'icon'} viewBox="0 0 40 40" size={20}>
                            <g>
                                <path
                                    d="m33.3 7.5c3.6 3.7 3.6 9.7 0 13.4l-13.5 14.1-13.6-14.1c-3.6-3.7-3.6-9.7 0-13.4 3.1-3.3 8.3-3.3 11.4 0l2.2 2.2 2.1-2.2c3.2-3.3 8.3-3.3 11.4 0z"/>
                            </g>
                        </Icon>
                        <div>
                            Poll
                        </div>
                    </div>
                    <div className={'action'}>
                        <Icon className={'icon'} viewBox="0 0 40 40" size={20}>
                            <g>
                                <path
                                    d="m33.3 7.5c3.6 3.7 3.6 9.7 0 13.4l-13.5 14.1-13.6-14.1c-3.6-3.7-3.6-9.7 0-13.4 3.1-3.3 8.3-3.3 11.4 0l2.2 2.2 2.1-2.2c3.2-3.3 8.3-3.3 11.4 0z"/>
                            </g>
                        </Icon>
                        <div>
                            Contribute
                        </div>
                    </div>
                    <div className={'action'}>
                        <Icon className={'icon'} viewBox="0 0 40 40" size={20}>
                            <g>
                                <path
                                    d="m25.7 17.8c1.6 0.8 2.8 2.4 2.8 4.3 0 1.3-0.2 1.7-1.2 1.7h-6.3l-0.9 13.7h-0.7l-0.9-13.7h-6.3c-1 0-1.2-0.4-1.2-1.7 0-1.9 1.3-3.5 2.8-4.3 0.1 0 0.2-0.1 0.3-0.1 0.6-0.4 1-0.9 1.1-1.5l1.4-9.2v-0.4c0-0.6-0.3-0.8-0.8-1.1 0 0 0 0-0.1 0-0.6-0.3-1-0.7-1-1.4 0-1.5 0.5-1.6 1.5-1.6h7.1c1 0 1.5 0.1 1.5 1.6 0 0.7-0.4 1.1-1 1.4-0.1 0-0.1 0-0.1 0-0.5 0.3-0.8 0.5-0.8 1.1v0.4l1.4 9.2c0.1 0.6 0.5 1.1 1.1 1.5 0.1 0 0.2 0.1 0.3 0.1z"/>
                            </g>
                        </Icon>
                        <div>
                            Pin
                        </div>
                    </div>
                </div>*/


/*

                <div className={'sidebar-header'}>
                    INTERACTIONS
                </div>
                <div className={'sponsored-contributions'}>
                    <div className={'pinned'}>
                        <Icon viewBox="0 0 40 40" size={15}>
                            <g>
                                <path
                                    d="m25.7 17.8c1.6 0.8 2.8 2.4 2.8 4.3 0 1.3-0.2 1.7-1.2 1.7h-6.3l-0.9 13.7h-0.7l-0.9-13.7h-6.3c-1 0-1.2-0.4-1.2-1.7 0-1.9 1.3-3.5 2.8-4.3 0.1 0 0.2-0.1 0.3-0.1 0.6-0.4 1-0.9 1.1-1.5l1.4-9.2v-0.4c0-0.6-0.3-0.8-0.8-1.1 0 0 0 0-0.1 0-0.6-0.3-1-0.7-1-1.4 0-1.5 0.5-1.6 1.5-1.6h7.1c1 0 1.5 0.1 1.5 1.6 0 0.7-0.4 1.1-1 1.4-0.1 0-0.1 0-0.1 0-0.5 0.3-0.8 0.5-0.8 1.1v0.4l1.4 9.2c0.1 0.6 0.5 1.1 1.1 1.5 0.1 0 0.2 0.1 0.3 0.1z"/>
                            </g>
                        </Icon>
                        Pinned by The North Face
                    </div>
                    <SponsoredContribution
                        imageUrl={'https://goodlogo.com/images/logos/nike_classic_logo_2355.gif'}
                        name={'Nike'}
                        description={'We told them to "Just Do It"'}
                        type={"other"}
                    />
                    <SponsoredContribution
                        imageUrl={'https://content.backcountry.com/promo_upload/bcs/brand-pages/mountain-hardwear/2017/MHW_logo.png'}
                        name={'Mountain Hardwear'}
                        description={'18 Days Food and Tent Equipment'}
                        type={"money"}
                        amount={"500"}
                        productUrl={'https://www.mountainhardwear.ca/en/space-station-%7C-842-%7C-none-887487428431.html?mid=paidsearch&eid=Google+PLA+CA&s_kwcid=AL!3937!3!237302709337!!!g!390683910683!&ef_id=WdWVeQAAAXh5NMu7:20180404031234:s'}
                    />
                    <div className={'pointer'} style={{color: 'white', textAlign: 'right'}}>See All Contributions</div>
                </div>

 */