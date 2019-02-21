import React from 'react'

class TopNavBar extends React.Component {
  constructor() {
    super()

    this.state = {
      activeDrop: false,
      selected: 'More',
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.close)
  }
  close = (evt) => {
    if ((evt && evt.path.find(node => node === this.htmlElement))) {
      return;
    }
    this.setState({ activeDrop: false })
  }

  activateDropDown = (evt) => {
    if (evt) {
      evt.preventDefault();
    }
    this.setState(({ activeDrop }) => ({ activeDrop: !activeDrop }));
  }

  render() {
    const { activeDrop } = this.state
    return (
      <nav className="navbar  ">
        <div className="navbar-brand">
          <div className="navbar-item">
            <a className="button is-small is-rounded has-text-grey-light">
              <span className="icon is-small has-text-info">
                <i className="fas fa-envelope" />
              </span>
              <span>DIRECT</span>
            </a>
          </div>

          <div className="navbar-burger burger" data-target="invoice-navbar">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="navbar-menu">
          <div id="invoice-navbar" className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <div className="control">
                  <div className={`${activeDrop ? 'is-active' : ''} dropdown `}
                  ref={(node) => { this.htmlElement = node; }}
                  >
                    <div className="dropdown-trigger">
                      <button
                        className="button has-background-light"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        onClick={this.activateDropDown}
                      >
                        <span className="more-txt">More</span>
                        <span className="icon is-small">
                          <i className="fas fa-caret-down" aria-hidden="true" />
                        </span>
                      </button>
                    </div>

                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a className="dropdown-item">Export</a>
                        <a className="dropdown-item">Markas exported </a>
                        <hr className="dropdown-divider" />
                        <a className="dropdown-item is-active">Setup vendor</a>
                        <hr className="dropdown-divider" />
                        <a className="dropdown-item">Flag invoice</a>
                        <a className="dropdown-item">Archive invoice</a>
                        <a className="dropdown-item has-text-danger">Delete invoice</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control">
                  <a className="button is-info is-wide" >
                    <span>Approve</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default TopNavBar
