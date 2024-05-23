import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import ReadBooks from './components/ReadBooks/ReadBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
         path: '/listed-books',
         element: <ListedBooks></ListedBooks>,
         loader: () =>fetch(`/books.json`),
         children:[
          {
            path: '/listed-books/read-books',
            element: <ReadBooks></ReadBooks>,
    
          },
          {
            path: '/listed-books/wishlist-books',
            element: <ReadBooks></ReadBooks>,
    
          },
         ]
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>,
        loader: () =>fetch('/public/books.json'),

      },
   
      {
        path: '/book/:id',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('/public/books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
