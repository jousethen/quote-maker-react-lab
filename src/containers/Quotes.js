import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  renderQuotes = () => this.props.quotes.map((quote) => <QuoteCard key={quote.id} quote={quote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} />)
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (quoteId) => {
      dispatch(removeQuote(quoteId));
    },

    upvoteQuote: (quoteId) => {
      dispatch(upvoteQuote(quoteId))
    },

    downvoteQuote: (quoteId) => {
      dispatch(downvoteQuote(quoteId))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
