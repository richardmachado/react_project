// data-ad-client="ca-pub-4426948628214076"
// data-ad-slot="1393325332"


import React, { useEffect, useState } from 'react';

const AdComponent = () => {
  const [adLoaded, setAdLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const adContainerRef = React.useRef(null);
  const client = "ca-pub-4426948628214076";  //  <== VERY IMPORTANT:  DOUBLE CHECK THIS!
  const slot = "6270608881";      //  <== VERY IMPORTANT:  DOUBLE CHECK THIS!

  useEffect(() => {
    const loadAdsenseScript = () => {
      if (!document.querySelector('#adsense-script')) {
        const script = document.createElement('script');
        script.id = 'adsense-script';
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`;
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.onload = () => {
          console.log("AdSense script loaded successfully.");
          setAdLoaded(true);
        };
        script.onerror = () => {
          setLoadError(true);
          console.error('Failed to load AdSense script.');
        };
        document.body.appendChild(script);
      } else {
        console.log("AdSense script was already loaded.");
        setAdLoaded(true);
      }
    };

    loadAdsenseScript();

    return () => {
      const script = document.querySelector('#adsense-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (adLoaded && adContainerRef.current) {
      try {
        if (window.adsbygoogle) {
          console.log("Attempting to push ad to adsbygoogle:", { client, slot }); // Debugging
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          console.log("Ad pushed successfully (hopefully).");
        } else {
          console.warn("adsbygoogle object is not defined. AdSense might not be initialized correctly.");
          setLoadError(true);
        }
      } catch (error) {
        console.error("Adsense push error:", error);
        setLoadError(true);
      }
    }
  }, [adLoaded, client, slot]); // Added client and slot to dependency array

  if (loadError) {
    return (
      <div>
        Failed to load AdSense.
        <p>
          Please check:
          <ul>
            <li>
              <b>VERY IMPORTANT:</b> Your AdSense account and ad unit setup.  Confirm
              that ads are actually configured to show for this slot.
            </li>
            <li>
              <b>VERY IMPORTANT:</b> Your browser's console for any JavaScript
              errors.  Pay close attention to any messages related to AdSense.
            </li>
            <li>Your ad blocker settings.  Temporarily disable them.</li>
            <li>
              <b>VERY IMPORTANT:</b> That the <code>client</code> and <code>slot</code> values
              are DEFINITELY correct.
            </li>
             <li>
              Check if your site is approved by adsense.
            </li>
          </ul>
        </p>
      </div>
    );
  }

  return (
    <div className="ad-unit-container" ref={adContainerRef}>
      {adLoaded && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={client} // Use the client variable
          data-ad-slot={slot} // Use the slot variable
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
      {!adLoaded && <div>Loading Ad...</div>}
    </div>
  );
};

function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
      <p>
        This is a component where I want to display an ad. The ad should appear
        below this paragraph.
      </p>
      <AdComponent />
      <p>
        And here is some more content after the ad.
      </p>
    </div>
  );
}

// Main App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React with Google AdSense</h1>
      </header>
      <main>
        <MyComponent />
        <AdComponent />
      </main>
    </div>
  );
}

export default App;
