import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Accueil from './pages/accueil/Accueil';
import Connexion from './pages/connexion/Connexion';
import Inscription from './pages/inscription/Inscription';
import Header from "./components/header/Header"

const router = createBrowserRouter([
  {
  // Première page dès le chargement de la page
    path: "/",
    element:<Accueil />
  },
  {
    path:"/connexion",
    element:<Connexion />
  },
  {
    path:"/inscription",
    element:<Inscription />
  }
]);
// Toast permet d'avoir des message d'avertissement customize
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Toaster />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)