import { PostHogProvider } from "posthog-js/react";
import "./App.css";
import { Home } from "./pages/Home";
import posthog from 'posthog-js';
posthog.init('phc_9vSJoF7o3FZqdF411cTDL1woRF35q30oYuw2cP6ETY6', {
  api_host: 'https://us.i.posthog.com' 
})


function App() {
  return (
    <><PostHogProvider client={posthog}>
    </PostHogProvider>
    <div className="App">
        <Home />
      </div></>
  );
};


export default App;
