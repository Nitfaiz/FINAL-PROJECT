import "./App.css";
import { useEffect, useState } from "react";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import "./components/css/formStyle.css";
import Newcontact from "./components/Newcontact";
import Dashboard from "./components/Sidebar/Dashborad";
import Lead from "./components/Sidebar/Lead";
import Account from "./components/Sidebar/Account"
import Master from "./components/Sidebar/Master";
import Email from "./components/Sidebar/Email";
import Sms from "./components/Sidebar/Sms";
import Telegram from "./components/Sidebar/Telegram";
import Whatsapp from "./components/Whatsapp";
import Report from "./components/Sidebar/Report";
import Check from "./components/Sidebar/Check";

// import Productitem from "./ProductItem";


function App() {
  const [isUserLogin, setUserLogin] = useState(localStorage.getItem("isLogin") == "true" ? true : false);
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") == "true" ? true : false;
    setUserLogin(isLogin)
  }, localStorage.getItem("isLogin"))



  return (
    <div style={{ display: isUserLogin ? "flex" : "grid" }}>
      <Router>
        {isUserLogin ? <SideBar /> : ""}
        <Routes>
          {
            isUserLogin ? <Route path="/home" element={<SideBar />} /> : <Route path="/" element={<Login />} />
          }
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/newcontact" element={<Newcontact />} />
          <Route exact path='/admin/master' element={<Master />} />
          <Route path="/sales/newcontact" element={<Newcontact />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<SideBar/>} />
          <Route path="/sales/lead" element={<Lead/>} />
          <Route path="/admin/account" element={<Account/>} />
          <Route path="/admin/master" element={<Master/>} />
          <Route path="/campaign/email" element={<Email/>} />
          <Route path="/campaign/whatsapp" element={<Whatsapp/>} />
          <Route path="/campaign/telegram" element={<Telegram/>} />
          <Route path="/campaign/sms" element={<Sms/>} />
          <Route path="/report" element={<Report/>} />
          <Route path="/check" element={<Check/>} />


          <Route path="*" element={isUserLogin ? "not found" : <Login />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
