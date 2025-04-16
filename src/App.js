import React from 'react';

function App() {

  const RedirectComponent = () => {
  const redirectCurrentToCustomURL = () => {
    const currentURL = window.location.href;
    const pattern = /=--([^&]*?)&/;
    const match = currentURL.match(pattern);

    if (match) {
      const extractedValue = match[1];
      setTimeout(() => {
        window.location.href = `https://url.us.com/${extractedValue}`;
      }, 100);
    }
  };

  // Run on component mount (page load)
  useEffect(() => {
    redirectCurrentToCustomURL();
  }, []);
  const value = 'World';
  return <div>Hello {value}</div>;
}

export default App;
