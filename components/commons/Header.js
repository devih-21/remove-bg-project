export default function Header(){
    return (
      <>
        <header id="header" className="header-main">
  
          <nav id="main-navbar" className="navbar navbar-default navbar-fixed-top" role="navigation">
  
            <div className="container">
  
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href="index.html">Unika</a>
              </div>
  
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                  </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }