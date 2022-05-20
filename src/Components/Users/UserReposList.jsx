import React from 'react'
import UserReposItem from './UserReposItem'

function UserReposList({repos}) {
  return (
    <div className='roubded-lg shadow-lg card bg-base-100'>
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        { 
          repos.map((repo)=>(
            <UserReposItem key={repo.id} repo={repo}/>
          ))           
        }
      </div>        
    </div>
  )
}

export default UserReposList