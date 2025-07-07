import { useRouteError } from "react-router-dom"

const Error=()=>{
 const err = useRouteError();

  return (
    <div className="error-container">
      <div className="error-emoji">😵</div>
      <h1 className="error-title">Oops! Something went wrong.</h1>
      <p className="error-status">❌ {err.status} - {err.statusText || "Unknown Error"}</p>
      <p className="error-message">The page you're looking for doesn't exist or has moved.</p>
      <a href="/" className="error-back-btn">⬅ Back to Home</a>
    </div>
  );
};

export default Error