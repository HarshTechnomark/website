import React, { Fragment } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts";
import Overview from "./pages/Overview/Overview";
import Payments from "./pages/Payments/Payments";
import Loans from "./pages/Loans/Loans";
import Investments from "./pages/Investments/Investments";
import Contact from "./pages/Contact/Contact";
import Form1 from "./components/OnboardingComp/Forms/Form1/Form1";
import Form2 from "./components/OnboardingComp/Forms/Form2/Form2";
import Form10 from "./components/OnboardingComp/Forms/Form10/Form10";
import Form4 from "./components/OnboardingComp/Forms/Form4/Form4";
import Form3 from "./components/OnboardingComp/Forms/Form3/Form3";
import Form5 from "./components/OnboardingComp/Forms/Form5/Form5";
import Form11 from "./components/OnboardingComp/Forms/Form11/Form11";
import Form12 from "./components/OnboardingComp/Forms/Form12/Form12";
import Onboarding from "./pages/Onboarding/Onboarding";
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="onboarding" element={<Onboarding />} >
            <Route index element={<Navigate to={"/onboarding/Form1"}/>}/>
            <Route path="form1" element={<Form1/>}/>
            <Route path="form2" element={<Form2/>}/>
            <Route path="form3" element={<Form3/>}/>
            <Route path="form4" element={<Form4/>}/>
            <Route path="form5" element={<Form5/>}/>
            <Route path="form10" element={<Form10/>}/>
            <Route path="form11" element={<Form11/>}/>
            <Route path="form12" element={<Form12/>}/>

          </Route>
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path="navbar" element={<Navbar />}>
            <Route index element={ <Navigate to={"/navbar/overview"}/> } />
            <Route path="overview" element={<Overview />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="payments" element={<Payments />} />
            <Route path="loans" element={<Loans />} />
            <Route path="investment" element={<Investments />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
