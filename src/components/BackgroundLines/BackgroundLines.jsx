import './BackgroundLines.css'; // Import the CSS

const BackgroundLines = () => {
  return (
    <div className="background-lines">
      <div className="line-wrapper">
        <div className="line">
          <div className="diamond"></div>
        </div>
        <div className="line">
          <div className="diamond"></div>
        </div>
        <div className="line">
          <div className="diamond"></div>
        </div>
        <div className="line">
          <div className="diamond"></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundLines;
