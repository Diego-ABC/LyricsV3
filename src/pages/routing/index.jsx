import {
  Home,
  NotFound,
  SignUp,
  SignIn,
  ContactUs,
  Landing,
  Resources,
  Settings,
} from "..";
import { LayoutWithNavBar } from "../layouts";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="dashboard" element={<LayoutWithNavBar />}>
        <Route index element={<Home />} />
        <Route path="help" element={<Resources />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);
export default Router;
