import { useState, useEffect } from "react";
import  axios  from "axios";
import GitHubProfileSearchForm from "./GitHubProfileSearchForm";

const githubURL = "https://api.github.com/users"

function GitHubProfileViewerWithSearch() {
    const [username, setUsername] = useState("colt"); 
    const [profile, setProfile] = useState({data: null, isLoading: true}); 

    // Fetch User Function: 
    async function fetchUser() {
        const userResult = await axios.get(`${githubURL}/${username}`);
        console.log(userResult)
        setProfile({data: userResult.data, isLoading: false}); 
    }

    //Add the fetch function to the useEffect: 
    useEffect(()=>{fetchUser()}, [username]); 

    //Search function
  const search =(username) => {
        setProfile({data: null, isLoading: true}); 
        setUsername(username)
    }

    if (profile.isLoading) {
        return <i>Loading...</i>
    }

    return(
        <div>
            <GitHubProfileSearchForm search={search}/>
            <b>{profile.data.name}</b>
            <img src={profile.data.avatar_url}/>
        </div>
    )
    
}

export default GitHubProfileViewerWithSearch; 