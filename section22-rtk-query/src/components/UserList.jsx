import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import Button from './Button'
import Skeleton from "./Skeleton"
import { useThunk } from "../hooks/use-thunk"
import UserListItem  from './UserListItem'

const UserList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)
  const { data } = useSelector((state)=> {
    return state.users // {data: [], isLoading: false, error: null}
  });

  useEffect(() => {
    doFetchUsers()
  },[])
  
  const handleUserAdd = () => {
   doCreateUser();
  }

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="w-full h-10"/>
  } else if ( loadingUsersError) {
    content = <div>Error fetching data...</div>
  } else {
    content = data.map((user)=>{
      return <UserListItem key={user.id} user={user} />
      
      })
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">User</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && 'Error creating User...'}
      </div>
      {content}
    </div>
  )
}

export default UserList
