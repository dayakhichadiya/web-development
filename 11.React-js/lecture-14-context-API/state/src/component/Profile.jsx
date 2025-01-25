import { useContext } from "react"
import UserContext from "../context/UserContext"

const Profile = () => {

    const {user} = useContext(UserContext)

  return (
    <div className="container max-w-xl mx-auto ">
      <h2 className="heading2">This is Profile Page</h2>
      <span>ProfileName : {user.userName}</span>
    </div>
  )
}

export default Profile
