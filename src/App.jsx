import React from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";
import Job, {jobLoader} from "./pages/Job";
import AddJob from "./pages/AddJob";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/add-job" element={<AddJob />} />
      <Route path="/jobs/:id" element={<Job />} loader={jobLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
