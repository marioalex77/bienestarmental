import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./sections/MainLayout.jsx";
import Home from "./sections/Home.jsx";
import Blog from "./sections/Blog.jsx";
import ErrorPage from "./sections/ErrorPage.jsx";
import NotFound from "./sections/NotFound.jsx";
import Services from "./sections/Services.jsx";
import { useState } from "react";
import Modal from "./components/MainOffer/Modal.jsx";
import ChildrenOffer from "./components/MainOffer/ChildrenOffer.jsx";
import CustomerReviews from "./sections/CustomerReviews.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="services" element={<Services />} />
      <Route path="customerreview" element={<CustomerReviews />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <RouterProvider router={router} />
      {isOpen && (
        <Modal containerId="modal" handleClose={() => setIsOpen(!isOpen)}>
          <ChildrenOffer setIsOpen={setIsOpen} />
        </Modal>
      )}
    </>
  );
}

export default App;
