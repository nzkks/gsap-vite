import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GsapFrom, GsapTo, GsapFromTo, GsapTimeline, GsapStagger, Home, GsapScrollTrigger, GsapText } from './pages';

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsapText" element={<GsapText />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
