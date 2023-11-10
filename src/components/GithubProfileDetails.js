import React from "react";



export let GithubProfileDetails = (props) => {


    return (
        <>
            <div className="card">
                <div className="card-header bg-dark">
                    <span className="badge badge-success  mx-2">{props.gitHubProfile.followers}Followers</span>
                    <span className="badge badge-warning  mx-2">{props.gitHubProfile.repos}Repos</span>
                    <span className="badge badge-secondary  mx-2">{props.gitHubProfile.gists}Gists</span>
                    <span className="badge badge-danger  mx-2">{props.gitHubProfile.following}Following</span>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            Name : <span className="">{props.gitHubProfile.name}</span>
                        </li>
                        <li className="list-group-item">
                            Location : <span className="">{props.gitHubProfile.location}</span>
                        </li>
                        <li className="list-group-item">
                            Email : <span className="">{props.gitHubProfile.email}</span>
                        </li>
                        <li className="list-group-item">
                            Company : <span className="">{props.gitHubProfile.company}</span>
                        </li>
                        <li className="list-group-item">
                            twitter_username : <span className="">{props.gitHubProfile.twitter_username}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}