function Home() {
  return (
    <div className="home">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of our website.</p>
        <button onClick={() => window.location.href = '/projects'}>See some of my projects</button>
    </div>
  );
}

export default Home;