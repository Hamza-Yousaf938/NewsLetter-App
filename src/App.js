// import React, { Component } from 'react'   //rce to import this
// import NavBar from './components/NavBar';
// import News from './components/News';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         <NavBar/>
       
//           <Routes>
//           <Route path="/">element={<News pageSize={5} country="us" category="general"/>}</Route>
//           <Route path="/business"><News pageSize={5} country="us" category="business"/></Route>
//           <Route path="/entertainment"><News pageSize={5} country="us" category="entertainment"/></Route>
//           <Route path="/general"><News pageSize={5} country="us" category="general"/></Route>
//           <Route path="/health"><News pageSize={5} country="us" category="health"/></Route>
//           <Route path="/science"><News pageSize={5} country="us" category="science"/></Route>
//           <Route path="/sports"><News pageSize={5} country="us" category="sports"/></Route>
//           <Route path="/technology"><News pageSize={5} country="us" category="technology"/></Route>
//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }

// export default App

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={5} country="us" category="general" />} />
            <Route exact path="/business" element={<News key="business"  pageSize={5} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" pageSize={5} country="us" category="general" />} />
            <Route exact path="/health" element={<News key="health"  pageSize={5} country="us" category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={5} country="us" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={5} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={5} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
