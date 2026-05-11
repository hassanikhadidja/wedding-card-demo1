import './App.css';

function App() {
  const src = `${process.env.PUBLIC_URL || ''}/page1.html`;
  return (
    <iframe
      title="Alex & Diane — Wedding invitation"
      className="site-iframe"
      src={src}
    />
  );
}

export default App;
