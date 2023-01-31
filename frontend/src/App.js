import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/read/Users";
import Blogs from "./pages/read/Blogs";
import AddUser from "./pages/create/AddUser";
import EditUser from "./pages/update/EditUser";
import AddBlog from "./pages/create/AddBlog";
import EditBlog from "./pages/update/EditBlog";
import Partners from "./pages/read/Partners";
import AddPartner from "./pages/create/AddPartner";
import EditPartner from "./pages/update/EditPartner";
import Employees from "./pages/read/Employees";
import AddEmployee from "./pages/create/AddEmployee";
import EditEmployee from "./pages/update/EditEmployee";

//client
import Main from "./pages/website/Main"
import BlogPages from "./pages/website/BlogPages";
// import PublicNavbar from "./pages/PublicNavbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* client */}
          <Route path="/" element={<Main />} />
          <Route path="/blogpages" element={<BlogPages />} />
          {/* <Route path="/" element={<PublicNavbar />} /> */}


          {/* admin */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/blogs/edit/:id" element={<EditBlog />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/add" element={<AddPartner />} />
          <Route path="/partners/edit/:id" element={<EditPartner />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/add" element={<AddEmployee />} />
          <Route path="/employees/edit/:id" element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;