import React from 'react';
import './sass/app.scss';
import { connect } from 'react-redux';
import fetchPics from './actions/fetchPics';
import fetchMorePics from './actions/fetchMorePics';

const mapStateToProps = (state) => ({
  pics: state.pics.pics,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPics: () => dispatch(fetchPics()),
  fetchMorePics: () => dispatch(fetchMorePics()),
});

const App = (props) => {
  const cats = props.pics.map((pic) => <img alt="cat pics" src={pic.url} />);
  return (
    <div className="app">
      <button onClick={props.fetchPics}>Get cat</button>
      <button onClick={props.fetchMorePics}>Get more cats</button>
      {cats}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
