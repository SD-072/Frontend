import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

import ErrorPage from "./components/Error";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/userContext";
import MainLayout from "./layout/MainLayout";
import ProtectedLayout from "./layout/ProtectedLayout";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";
import EventDetails from "./pages/EventDetails";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="event/:eventID" element={<EventDetails />} />

      <Route element={<ProtectedLayout />}>
        <Route path="create" element={<CreateEvent />} />
        <Route path="event/:eventID/edit" element={<EditEvent />} />
      </Route>

      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/*" element={<ErrorPage />} />
    </Route>,
  ),
);

const App = () => (
  <ThemeProvider>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </ThemeProvider>
);

export default App;
