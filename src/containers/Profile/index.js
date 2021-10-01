import SearchAppBar from "../../components/Appbar/Appbar";
import BasicButtons from '../../components/button/button'
import IMAGE from '../../assets/images/profile.png'
import {signOut ,auth} from '../../config/firebase'
import {Link ,useHistory }from "react-router-dom"
import swal from 'sweetalert';
import './style.css'
import { doc, getDoc ,db } from "../../config/firebase"; 



function Profile (){
    const history = useHistory();
      const logOut = ()=>{
        signOut(auth).then(() => {
            swal("!", "You're SignOut", "Error");
            history.push('/login')

          }).catch((error) => {
            alert("Error")
          });

      }
      
    return (
            
        <div className="box">
            <SearchAppBar title="Profile" />
            <div className="img">
            <img width="200px" src={IMAGE}  alt="IMG" ></img>
            </div>
            <div className="text-center">
                <h1>Welcome Shariq Riaz</h1>
                <h2>Khan@gmail.com</h2>
                <h2>03102799207</h2>
                <h2>Khan@gmail.com</h2>
                <h2>03102799207</h2>
                <BasicButtons onClick={logOut} title="LOG OUT" />
            </div>
           
        </div>
  
    )
}

export default Profile;