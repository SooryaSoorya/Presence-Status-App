import React from 'react';
import './Presence-Status.css';

const PresenceStatus = (props) => {
    return (
        <div className="recomp-agentcontainer" 
             style={{ width: `${ props.containerWidth }px`}}>
            <div className="recomp-avatarimg"
                style={{
                    backgroundImage: `url('${props.labelData[0].avatarImg}')`
                }}>
                <div className="recomp-agentgrid">
                    <div className={props.labelData[0].presenceStatus ?
                        'recomp-agentonline' : 'recomp-agentoffline'} />
                    <div className="recomp-avatarname">{props.labelData[0].name}</div>
                    <div className="recomp-avataronline">{props.labelData[0].presenceStatus &&
                        props.labelData[0].presenceStatus ?
                        'Online' : 'Offline'}</div>
                    <div className="recomp-avatarhours">{props.labelData[0].lastPrsent}h</div>
                </div>
            </div>
        </div>
    )
}

export default PresenceStatus;

{/* <div imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" /> */ }