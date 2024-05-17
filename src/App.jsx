import Dashboard from "./Pages/Dashboard/Dashboard";
import TranscationPage from "./Pages/Transcation/TranscationPage";
import SupportPage from "./Pages/Support/SupportPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transcations",
    element: <TranscationPage />,
  },
  {
    path: "/support",
    element: <SupportPage />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
