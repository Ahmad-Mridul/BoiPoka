import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Home from './Components/Home/Home.jsx'
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx'
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'
import { ToastContainer} from 'react-toastify';
const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<ErrorPage></ErrorPage>,
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listed-books',
        loader: () => fetch("/booksData.json"),
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'pages-to-read',
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'book/:bookId',
        loader:()=>fetch('/booksData.json'),
        element:<BookDetails></BookDetails>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer/>
  </StrictMode>,
)
