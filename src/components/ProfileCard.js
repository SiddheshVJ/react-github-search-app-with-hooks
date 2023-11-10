import React from "react";



export let ProfileCard = (props) => {

    return (
        <>
            <div className="card">
                <img src={props.gitHubProfile.avatar_url} alt="img" className="card-img-top img-fluid" />
                <div className="card-body">
                    <p className="h4">{props.gitHubProfile.name}</p>
                    <small>{props.gitHubProfile.bio}</small>
                    <a href={props.gitHubProfile.html_url} target="#blank" className="btn btn-success btn-sm">Profile</a>
                </div>
            </div>
        </>
    )

}