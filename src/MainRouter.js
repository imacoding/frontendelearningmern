import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './core/Home';
import Users from './user/Users';
import Signup from './user/Signup';
import Signin from './auth/Signin';
import EditProfile from './user/EditProfile';
import Profile from './user/Profile';
import PrivateRoute from './auth/PrivateRoute';
import Menu from './core/Menu';
import NewCourse from './course/NewCourse';
//import Courses from './course/Courses';
import Course from './course/Course';
import EditCourse from './course/EditCourse';
import MyCourses from './course/MyCourses';
import Enrollment from './enrollment/Enrollment';

const MainRouter = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/user/edit/:userId" element={<PrivateRoute />}>
          <Route path="/user/edit/:userId" element={<EditProfile  />} />
        </Route>

        <Route path="/user/:userId" element={<PrivateRoute />}>
          <Route path="/user/:userId" element={<Profile  />} />
        </Route>

        <Route path="/course/:courseId" element={<PrivateRoute />}>
          <Route path="/course/:courseId" element={<Course   />} />
        </Route>

         <Route path="/teach/courses" element={<PrivateRoute />}>
          <Route path="/teach/courses" element={<MyCourses   />} />
        </Route>

         <Route path="/teach/course/new" element={<PrivateRoute />}>
          <Route path="/teach/course/new" element={<NewCourse   />} />
        </Route>

         <Route path="/teach/course/edit/:courseId" element={<PrivateRoute />}>
          <Route path="/teach/course/edit/:courseId" element={<EditCourse   />} />
        </Route>

         <Route path="/teach/course/:courseId" element={<PrivateRoute />}>
          <Route path="/teach/course/:courseId" element={<Course   />} />
        </Route>

        <Route path="/learn/:enrollmentId" element={<PrivateRoute />}>
          <Route path="/learn/:enrollmentId" element={<Enrollment    />} />
        </Route>

      </Routes>
    </div>
  );
};

export default MainRouter;
