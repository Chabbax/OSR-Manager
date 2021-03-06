import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Context } from "./context/Context";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Copyright from "./components/Copyright";

import CreateGroup from "../src/pages/CreateGroup/CreateGroup";
import ViewGroup from "../src/pages/ViewGroup/ViewGroup";
import TemplateUpload from "./pages/templateUpload/templateUpload";
import TemplateView from "./pages/templateView/templateView";
import MarkingView from "./pages/MarkingView/MarkingView";
import MarkingUpload from "./pages/MarkingUpload/MarkingUpload";

const App = () => {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        {/*<Route path={"/"} element={<ToastMsg/>}/>*/}

        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/create_group" element={<CreateGroup />} />
        <Route path="/groups" element={<ViewGroup />} />
        <Route path="/template-upload" element={<TemplateUpload />} />
        <Route path="/marking-upload" element={<MarkingUpload />} />
        <Route path="/templates" element={<TemplateView />} />
        <Route path="/schemes" element={<MarkingView />} />
      </Routes>

      <ToastContainer style={{ width: "400px" }} />
      <Copyright />
    </BrowserRouter>
  );
};

export default App;
