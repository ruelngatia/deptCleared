import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./componets/Nav";
import IndexPage from "./pages/IndexPage";
import Footer from "./componets/Footer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UseNotice from "./pages/UseNotice";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import Accessibility from "./pages/Accessibility";
import PageError from "./pages/PageError";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Verication from "./pages/Verication";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import FormHelper from "./pages/FormHelper";
import Fab from "@mui/material/Fab";
import MessageIcon from '@mui/icons-material/Message';
import { useState } from "react";
import Chatbot from "./componets/Chatbot";
import CloseIcon from '@mui/icons-material/Close';

function App() {

  const [isChatBoxOpen, setIsChatBoxOpen] = useState<boolean>();


  return (
    <div className="App">
      <ToastContainer  position="bottom-center"/>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route index element={<IndexPage/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/usenotice" element={<UseNotice/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/cookiepolicy" element={<CookiePolicy/>}/>
          <Route path="/accessibility" element={<Accessibility/>}/>
          <Route path="/otp" element={<Verication/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/failure" element={<Cancel/>}/>
          <Route path="/fill-application" element={<FormHelper/>}/>
          <Route path="*" element={<PageError/>}/>
        </Routes>
      <div className="fixed z-20 bottom-8 right-5 flex justify-end flex-col">
        
        {isChatBoxOpen?<Chatbot/> : ''}
                 
        <Fab variant="extended" color="primary" onClick={() => setIsChatBoxOpen(!isChatBoxOpen)}>
          {!isChatBoxOpen ? <MessageIcon sx={{ mr: 1 }} /> : <CloseIcon/>}
          {isChatBoxOpen? 'Close' : "Need Help?"}
        </Fab>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
