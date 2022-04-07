import {connect} from 'react-redux';
import Home from '../components/Home';
import {addNewTeam, getTeamList} from '../store/actions/action';

const mapStateToProps = state => ({
    teamList : state.teamList,
});

// const mapDispatchToProps = dispatch => ({
//     addToTeamList : data => dispatch(addNewTeam(data)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Home); //old way


export default connect(mapStateToProps, {addNewTeam, getTeamList})(Home);
// export default Home;