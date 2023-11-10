import React from "react";
import {ProfileCard} from "./ProfileCard";
import {GithubProfileDetails} from "./GithubProfileDetails";



export let GithubProfile = (props) => {


    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <ProfileCard gitHubProfile={props.gitHubProfile} />
                </div>
                <div className="col-md-9">
                    <GithubProfileDetails gitHubProfile={props.gitHubProfile} />
                </div>
            </div>
        </>
    )
}