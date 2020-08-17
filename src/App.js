import React from 'react';
import './sass/app.scss';
import { connect } from 'react-redux';
import fetchPics from './actions/fetchPics';

const mapStateToProps = (state) => ({
  pics: state.pics.pics,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPics: () => dispatch(fetchPics()),
});

const App = (props) => {
  return (
    <div className="app">
      <button onClick={props.fetchPics}>Get cat</button>
      {props.pics.length > 0 && <img alt="cat pic!" src={props.pics} />}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
