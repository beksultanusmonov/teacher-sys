import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import { Main, Register, Home, Profil } from "./components"

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
    },
    {
      path: 'main/',
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'profil',
          element: <Profil />
        }
      ]
    }
  ])  
  return <RouterProvider router={routes} />
}

export default App
