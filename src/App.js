import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="center-left-block"></div>
        <div className="center-right-block"></div>

        <div className="top-block"></div>
        <div className="bottom-block"></div>
        <div className="right-block"></div>
        <div className="left-block"></div>

        <div className="top-left-triangle"></div>
        <div className="top-right-triangle"></div>
        <div className="bottom-left-triangle"></div>
        <div className="bottom-right-triangle"></div>

        <div className="center-left-stripe"></div>
        <div className="center-right-stripe"></div>
      </div>

      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="161.817"
          height="144"
          viewBox="0 0 161.817 144"
        >
          <g transform="translate(-50.164 -73)">
            <path
              className="a"
              d="M102.142,186h72.69l-52.6-112.791H118.1L50.164,217H69.007l14.459-30.537h.026l36.539-77.646-.084.582.156-.329,28.783,61.1H109.5"
            />
            <path
              className="a"
              d="M195.114,73v85.577q0,20.769-2.358,28a22.863,22.863,0,0,1-6.615,10.233c-.532.47-1.08.927-1.663,1.356a23.411,23.411,0,0,1-3.066,1.919l6.971,15.061a36.423,36.423,0,0,0,4.623-2.271c.435-.255.881-.494,1.3-.768a34.08,34.08,0,0,0,13.6-16.408q4.071-10.268,4.073-36.547V73Z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
