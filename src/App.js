import About from 'pages/about';
import Root from './pages/Root'
import Home from './pages/home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Error404 from 'pages/Error404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Error404 />} />
      {/* ... etc. */}
    </Route>
  )
);
function App() {
  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
