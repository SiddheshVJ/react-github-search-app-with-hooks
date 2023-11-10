import React, { useState } from "react";
import {GithubProfile} from "./GithubProfile";
import {GithubRepos} from "./GithubRepos";
import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET_KEY, PROFILE_URL } from "./GithubCredentials";



export let GithubSearchApp = () => {

    let [githubUserName, setGithubUserName] = useState('')
    let [githubProfile, setGithubProfile] = useState('')
    let [githubRepos, setGithubRepos] = useState([])
    let [errMsg, setErrMsg] = useState('')



    let setgithubUserName = (e) => {
        setGithubUserName(e.target.value)
    }

    let submitSearch = (e) => {
        e.preventDefault()
        searchProfile(githubUserName)
        searchRepos(githubUserName)
    }

    let searchProfile = (githubUserName) => {
        let url = PROFILE_URL + githubUserName + `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_KEY}`

        axios.get(url)
            .then((response) => {
                setGithubProfile(response.data)
            })
            .catch((err) => {
                setErrMsg(err)
            })
    }

    let searchRepos = (githubUserName) => {

        let url = PROFILE_URL + `${githubUserName}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_KEY}`

        axios.get(url)
            .then((response) => {
                setGithubRepos(response.data)
            })
            .catch((err) => {
                setErrMsg(err)
            })
    }


    return (
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Github Profile Search App</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitSearch} className="form-inline">
                                    <div className="form-group">
                                        <input value={githubUserName}
                                            onChange={setgithubUserName} size="45" className="form-control" type="text" name="" placeholder="Search profile here..." id="" />
                                    </div>
                                    <div >
                                        <input type="submit" className="btn btn-sm btn-dark-green" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        {
                            Object.keys(githubProfile).length > 0 ?
                                <>
                                    <GithubProfile gitHubProfile={githubProfile} />
                                </> : null
                        }
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        {
                            githubRepos.length > 0 ?
                                <>
                                    <GithubRepos gitHubProfileRepos={githubRepos} />
                                </> : null
                        }
                    </div>
                </div>
            </div>

        </>
    )

}
