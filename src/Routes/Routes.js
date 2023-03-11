import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/course',
        element: <div>Course</div>
      }
    ]
  }
]);