import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <div className="container">
        <div className="row error_page">
          <div className="col-md-6 align-self-center">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 600">
              <g>
                <defs>
                  <clipPath id="GlassClip">
                    <path d="M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5
                      s-28.485-16.599-34.877-24.192c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13
                      c6.755-0.61,20.546-0.608,41.785,5.087s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z" />
                  </clipPath>
                  <clipPath id="cordClip">
                    <rect width="800" height="600" />
                  </clipPath>
                </defs>
                <g id="planet">
                  <circle fill="none" stroke="#0E0620" strokeWidth="3" strokeMiterlimit="10" cx="572.859" cy="108.803" r="90.788" />
                  <circle id="craterBig" fill="none" stroke="#0E0620" strokeWidth="3" strokeMiterlimit="10" cx="548.891" cy="62.319" r="13.074" />
                  <circle id="craterSmall" fill="none" stroke="#0E0620" strokeWidth="3" strokeMiterlimit="10" cx="591.743" cy="158.918" r="7.989" />
                  <path id="ring" fill="none" stroke="#0E0620" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" d="
                    M476.562,101.461c-30.404,2.164-49.691,4.221-49.691,8.007c0,6.853,63.166,12.408,141.085,12.408s141.085-5.555,141.085-12.408
                    c0-3.378-15.347-4.988-40.243-7.225" />
                  <path id="ringShadow" opacity="0.5" fill="none" stroke="#0E0620" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" d="
                    M483.985,127.43c23.462,1.531,52.515,2.436,83.972,2.436c36.069,0,68.978-1.19,93.922-3.149" />
                </g>
                <g id="spaceman" clipPath="url(cordClip)">
                  <path id="cord" fill="none" stroke="#0E0620" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                    M273.813,410.969c0,0-54.527,39.501-115.34,38.218c-2.28-0.048-4.926-0.241-7.841-0.548
                    c-68.038-7.178-134.288-43.963-167.33-103.87c-0.908-1.646-1.793-3.3-2.654-4.964c-18.395-35.511-37.259-83.385-32.075-118.817" />
                </g>
              </g>
            </svg>
          </div>
          <div className="col-md-6 align-self-center">
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>The page you are looking for does not exist. But you can click the button below to go back to the homepage.</p>
            <p><Link className="btn_1 mt-3" to="/">Back to home</Link></p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;