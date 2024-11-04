import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit' // Assure-toi d'importer correctement configureStore
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import User from './Pages/User'
import rootReducers from './Reducers/Index.js' // Import du root reducer
import { fetchUser } from './Actions/user.action.js'; // Avec accolades pour une exportation nommée


const store = configureStore({
  reducer: rootReducers,
  devTools: true,
})
store.dispatch(fetchUser())

// Création du routeur
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'user', element: <User /> },
    ],
  },
])

// Rendu de l'application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Fournit le store Redux */}
      <RouterProvider router={router} /> {/* Fournit le routeur */}
    </Provider>
  </StrictMode>
)
