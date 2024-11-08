import React ,{ useEffect , useState}from 'react'
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContext'
import toast ,{ Toaster }from "react-hot-toast";
import { Link } from 'react-router-dom';

const Profile = () => {
  const {authUser, setAuthUser}=useAuthContext();
  console.log(authUser);
  const [userData, setUserData] = useState({
    fullName: '',
    username: '',
    profilePic: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/profile/${authUser._id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, [authUser]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submission
  const handleSave = async () => {
    try {
        const response = await axios.put(`/api/profile/${authUser._id}`, userData);
    // Update authUser state with the new data
      setAuthUser(response.data);

    // Update localStorage with the new user data
      localStorage.setItem("chat-user", JSON.stringify(response.data));
      toast('✅ Profile Updated');
      setIsEditing(false);
    } catch (error) {

      console.error('Error updating profile:', error);
    }
  };


  return (
	<div className='flex flex-col items-center justify-center mx-auto min-w-80'>
		<div className='flex flex-col items-center justify-center w-full gap-6 p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>
            <h1 className='text-3xl font-semibold text-center text-purple-200'>
					Profile
					<span className='text-purple-900'> Chatify</span>
			</h1>
            <div className='flex flex-col items-center justify-center gap-5'>
            <Link to="/"><img className="w-20 h-20" src={userData.profilePic} alt="Profile" /></Link>
            <div>
            <div>
            <label className='p-2 label'>
			    <span className='text-base label-text'>FullName</span>
			</label>
            <input type='text' name="fullName" value={userData.fullName} readOnly={!isEditing}
            className='w-full h-10 input input-bordered' 
            onChange={handleChange} placeholder='FullName'
            />
            </div>
            <div>
            <label className='p-2 label'>
			    <span className='text-base label-text'>User Name</span>
			</label>
            <input type='text' name='username' value={userData.username} readOnly 
            className='w-full h-10 input input-bordered'
            />
            </div>
            </div>
            {
                isEditing ? (
                    <Link to="/" className='w-full'><button onClick={handleSave} className='mt-2 btn btn-block btn-sm'>Save</button></Link>
                ):(
                    <button className='mt-2 btn btn-block btn-sm' onClick={() => setIsEditing(true)}>Edit Profile</button>
                )
            }
            </div>
        </div>
    </div>

  )
}

export default Profile
