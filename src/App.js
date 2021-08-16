import './App.css';
import MainTitle from "./components/MainTitle"
import MainForm from './components/MainForm';
import MainHint from './components/MainHint';

import {gql} from 'apollo-boost';
import {useLazyQuery} from '@apollo/react-hooks';
import UsersList from './components/UsersList';
import React, {  useState } from 'react';


function App() {
  const[SName,SetSName] =useState("");
  const USER_SEARCH = gql`
  {  
      search(type:USER,query:"fullname:${SName}",first: 100) {
          userCount
            nodes {
            ... on User {
                name
                followers {
                  totalCount
                  }
                company
                bio
                url
                avatarUrl
                id
              }
            }

      }
      
  }`
  ;
  //execute query and store json response
  /*
  const {loading,data,fetchMore} = useQuery(USER_SEARCH, {refetchWOnWindowFocus:false, enabled:false}
    , {
      variables: {
        offset: 0,
        limit: 10
      },
    }
    ) ;
    */
  const [userSearch, { loading, data}] = useLazyQuery(USER_SEARCH, {
    variables: {
      offset: 0,
      limit: 100
    },
  }
    
    );
  let users = [];
  let usersNumber = 0;

  if(!loading && data !== undefined){
      usersNumber= data.search.userCount; 
      users = data.search.nodes;   
      console.log(usersNumber)
      console.log(users)
  }
  function handleClick (message){
    SetSName(message); 
    userSearch();
  }



    return(
      <div className="container"> 
          <MainTitle/>
          <MainForm onCall={handleClick}/>
          <MainHint/>
          <div>      
            {users.length === 0 && <div>{}</div>}
            <UsersList profiles ={users} totalUsers = {usersNumber}/> 
          </div>      
      </div>    
  );
}

export default App;
