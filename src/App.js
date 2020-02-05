import React, { useState, useEffect } from 'react';
import Pages from './components/pages';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/timmparsons')
    .then(res => res.json())
    .then(user => {
      setUser(user);
    })
  }, [])

  if(!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;
