import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Safa Tormane</h1>

        <br />

        <img src="/i93408-.jpeg" className="Photo" alt="myPhoto" />

        <br />

        <img src="/image.jpg" className="Photo" alt="myImage" />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
