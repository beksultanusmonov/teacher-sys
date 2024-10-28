import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import { Main, Register } from "./components"

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Register />
        }
      ]
    }
  ])  
  return <RouterProvider router={routes} />
}

export default App
