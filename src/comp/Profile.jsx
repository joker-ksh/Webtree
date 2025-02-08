import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
const Profile = () => {

    const [gender,setGender] = useState(null);
    const [fname,setFname] = useState(null);    
    const [lname,setLname] = useState(null);
    const [phone,setPhone] = useState(null);
    const [img,setImg] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            const res = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
            console.log(res.data.results[0]);
            setGender(res.data.results[0].gender);
            setFname(res.data.results[0].name.first);
            setLname(res.data.results[0].name.last);
            setPhone(res.data.results[0].phone);
            setImg(res.data.results[0].picture.large);
        }

        fetchData();
    },[])
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center space-y-8 md:space-x-8 md:space-y-0 w-96 md:w-[550px]">
        <div className="w-32 h-32 rounded-lg border-2 border-white/30 flex items-center justify-center bg-white/10">
          <span className="text-white/80 text-base">
            <img src={img} alt="Profile" className="w-24 h-24 rounded-lg" />
          </span>
        </div>
        <div className="text-white/80 space-y-3 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <p className="font-semibold text-xl">{fname}</p>
            <p className="font-semibold text-xl">{lname}</p>
          </div>
          <p className="text-lg opacity-80">{gender}</p>
          <p className="text-lg opacity-80">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
