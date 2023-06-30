import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Dashboard, Product } from './components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
