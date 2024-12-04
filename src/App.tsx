import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '29adf3ca-9429-4356-aee5-f486d7c99eca',
    clientToken: 'pub0228f15445e5955a7e45d35bc0f1e673',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'us5.datadoghq.com',
    service: 'mine',
    env: 'dev',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Solution />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;