import "./gitfooter.css";

const GitFooter = () => {
  return (
    <div className="container">
      <div className="git--footer">
        <p className="git--username">
          <a href="https://github.com/jatinrathore" target="_blank">
            2024 TvShowApp -- @jatinrathore
          </a>
        </p>
        <div className="logo">
          <a href="https://github.com/jatinrathore/tvshowapp" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitFooter;
