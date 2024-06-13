import React, { useState } from 'react';
import Users from './auth/UserAPI';
import Login from './auth/Login';
import ProductDisplay from './components/ProductDisplay';


const Controller = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    userPwd: ''
});
const [userData, setUserData] = useState(null);
const [errorMsg, setErrorMsg] = useState('');

const handleInputChange = (e) => {
  const {name, value} = e.target;
  setFormData({...formData, [name]:value});
};


const handleSubmit = (e) => {
  e.preventDefault();
 
  setUserData(Users.find((user) =>
    user.userEmail===formData.userEmail && user.userPwd===formData.userPwd
  ));


  if(!userData){
    setErrorMsg("Username and Password do not match")
  }else{
    setErrorMsg('');
    setFormData({
      userEmail:'',
      userPwd:''
    });
  }
 
};


const logout = () => {
  setUserData('');
  setErrorMsg('');
  setFormData({
    userEmail:'',
    userPwd:''
  });
}


  return (
  <>{!userData ?
  <Login  formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} errorMsg={errorMsg} />:
    <ProductDisplay userData={userData} logout={logout} />
}
    </>
  )
}


export default Controller;
