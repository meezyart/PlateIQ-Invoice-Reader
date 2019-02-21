import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import NavBar from '../../components/NavBar/'
import CollapsiblePanel from '../../components/Collapsible/'
import TitleBox from '../../components/TitleBox/'
import TopNavBar from '../../components/TopNavBar'
import { getCurrentInvoice, getCurrentClient, getCurrentClientItems } from '../../selectors'
import { fetchInvoices } from '../../actions/'
import Image from "../../assets/invoice_print.png";

import './invoices.css'

export const tabList = [
  {
    name: 'Line Items',
    snug: 'Line-Items',

    content: 'Stuff 1',
  },
  {
    name: 'History',
    content: 'Stuff 2',
  },
]

class Invoices extends Component {
  constructor() {
    super()

    this.state = {
      activeTab: 'Line Items',
      loading: true,
    }
  }
  componentWillMount() {
    this.props.fetchInvoices().then(() => {
      console.log('loaded', this.state.loading)
      this.setState({ loading: false })
    })
  }

  changeActiveTab = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }

    const {client,clientItems, data} = this.props;
    return (
      <main className="main invoices">
        <div className="container">
          <div className="columns is-variable">
            <div className="column is-6"><img src={Image} alt=""/></div>
            <div className="column is-8 has-background-white">
              <header className="hero">
                <div className="hero-head ">
                  <TopNavBar />
                </div>
                <div className="hero-body">
                  <CollapsiblePanel
                    trigger={
                      <div>
                        <h6 className="invoice-subtitle is-size-7 has-text-grey-light is-uppercase has-text-weight-semibold">
                          VENDOR
                        </h6>
                        <div className="level-left">
                          <h1 className="invoice-title is-size-3">{data.vendor.name}</h1>
                          <button className="button is-small is-rounded has-background-light">
                            <span className="icon is-small">
                              <i className="fas fa-angle-down" />
                            </span>
                          </button>
                        </div>
                        <small className="invoice-summary ">
                          <h5 className="is-size-6 has-text-black-bis">{data.invoice_no}</h5>
                          <h5 className="is-size-6 has-text-black-bis">{data.date}</h5>
                          <h5 className="is-size-6 has-text-black-bis">{client.name}</h5>
                          <TitleBox  className="total-box"  title="Total" content={data.total} />
                        </small>
                        <small className="vendor-notify has-text-success">
                          <span className="icon is-small">
                            <i className="far fa-check-circle" />
                          </span>
                          This Vendor is mapped
                        </small>
                      </div>
                    }
                  >
                    <div className="columns">
                      <div className="column">
                        <TitleBox title="Invoice no" content={data.invoice_no} />
                        <TitleBox title="Posting Date" content={data.fulfillment_date} />
                      </div>
                      <div className="column">
                        <TitleBox title="Invoice type" content={data.type} />
                        <TitleBox title="Invoice Date" content={data.date} />
                      </div>
                      <div className="column">
                        <TitleBox title="resturant" content={client.name} />
                        <TitleBox title="Due Date" content={data.due_date}  />
                      </div>
                      <div className="column">
                        <TitleBox className="total-box pb-1"  title="Subtotal" content={data.subtotal} >
                        <TitleBox  className="tax"  title="Tax" content={data.tax} />
                        </TitleBox>
                        <TitleBox  className="total-box"  title="Total" content={data.total} />
                      </div>
                    </div>
                  </CollapsiblePanel>
                </div>
                <div className="hero-foot">
                  <NavBar tabList={tabList} activeTab={this.state.activeTab} changeActiveTab={this.changeActiveTab} />
                </div>
              </header>
              <section className="section invoice-content">
                <div>
                  <table className="table is-fullwidth">
                    <thead>
                      <tr>
                        <th className="name-bar">Name</th>
                        <th className="has-text-centered">Qty</th>
                        <th className="has-text-centered">Unit Price</th>
                        <th className="has-text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clientItems.map((node,index) => (
                        <tr key={`${index + node.item_total}`}>
                        <td className="name-bar"><strong>{node.description} </strong><br/><small className="has-text-grey">{node.item_comment}</small></td>
                        <td className="has-text-centered">{node.qty}</td>
                        <td className="has-text-centered">{node.unit}</td>
                        <td className="has-text-right">{node.item_total}</td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

Invoices.propTypes = {
  fetchInvoices: PropTypes.func.isRequired,
  client: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.objectOf(PropTypes.string),
    ])
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.objectOf(PropTypes.string),
  ])).isRequired,
  clientItems: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.objectOf(PropTypes.string),
  ])).isRequired

}

const mapStateToProps = (state) => ({
    data: getCurrentInvoice(state),
    client: getCurrentClient(state),
    clientItems: getCurrentClientItems(state),
  })

const mapDispatchToProps = {
  fetchInvoices,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Invoices)
