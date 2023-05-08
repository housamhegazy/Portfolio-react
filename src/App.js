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
import MyWorks from 'pages/myWorks';
import Skills from 'pages/skills/Skills';
import Contact from 'pages/contact';
import ProjectDetails from 'pages/projectdetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/mywork' element={<MyWorks />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/mywork/productdetails/:id' element={<ProjectDetails />} />
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
