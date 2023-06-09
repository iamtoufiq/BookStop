import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-div m-up-3 has-acent p-up-2">
        <div className="textbox">
          <div className="text is-dark text-center">
            Made by <span className="is-blue">&lt;/&gt;</span> by
            <span style={{ fontWeight: "bold" }}> Toufiq Choudhari</span>
          </div>
          <div className="footer-icons text-center">
            <a href="https://www.linkedin.com/in/toufiq-choudhari-56208b203/">
              <button className="btn-icon nav-icons m-x-1">
                <i className="fab fa-linkedin is-4" />
              </button>
            </a>
            <a href="https://github.com/iamtoufiq">
              <button className="btn-icon nav-icons m-x-1">
                <i className="fab fa-github-square is-4" />
              </button>
            </a>
          </div>
          <div className="text text-center is-2">
            © {new Date().getFullYear()} Elegance Ui
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
