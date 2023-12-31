import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Pages/SignUp";
import Welcome from "./components/Pages/Welcome";
import { useSelector } from "react-redux";
import ForgotPassword from "./components/Pages/ForgotPassword";
import Send from "./components/Email/Send";
import ReadMsg from "./components/Email/ReadMsg";
import Inbox from "./components/Email/Inbox";
import SentBox from "./components/Email/SentBox";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenicate);

  console.log(isAuth);

  return (
    <Fragment>
      {/* {isAuth && <Welcome />}
      <Routes>
        <Route path="/" element={!isAuth ? <SignUp /> : <Send />}></Route>
        <Route
          path="/forgotPassword"
          element={!isAuth ? <ForgotPassword /> : <Welcome />}
        />
        <Route path="/send" element={isAuth ? <Send /> : <SignUp />} />
        <Route path="/inbox" element={isAuth ? <Inbox /> : <SignUp />} />
        <Route path="/sentbox" element={isAuth ? <SentBox /> : <SignUp />} />
        <Route
          path="/message/:id"
          element={isAuth ? <ReadMsg /> : <SignUp />}
        />
      </Routes> */}

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="/send" element={<Send />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="sentbox" element={<SentBox />} />
        <Route path="/message/:id" element={<ReadMsg />} />
      </Routes>
    </Fragment>
  );
}

export default App;
