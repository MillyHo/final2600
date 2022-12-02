import axios from "axios";
import { useEffect, useState } from "react";


function Profile() {

  const [appState, setAppState] = useState({
    loading: false,
    userName: null,
    email: null
  });

  useEffect(() => {
    async function fetchData() {
      setAppState({ loading: true });
      const apiUrl = "http://localhost:5000/api/members/johnson@gmail.com";
      const res = await axios.get(apiUrl);
      //console.log(JSON.stringify(res.data));
      setAppState({ loading: false, userName: res.data.userName, email: res.data.email });
      console.log(res);
    }
    fetchData();
  }, [setAppState]);


  return (
    <div>
      <h2>My Profile </h2>
  
     {/* <p key={appState.userName}  onLoad={()=>setAppState(email) }>Please see console</p> */}
    </div>
  );
}

export default Profile;
