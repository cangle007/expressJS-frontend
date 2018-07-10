import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomePage from '../../components/HomePage';
import getUserProcess from '../thunks/getUserProcess';

function mapStateToProps(state, ownProps) {
  return {
    pokemonObj: state.pokemonObj
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getUser: () => {
      dispatch(getUserProcess());
    }
  };
}

const withlifecycle = lifecycle({
  componentDidMount(prevProps, prevState) {}
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(HomePage));
