import { connect } from 'react-redux';
import Board from '../board';
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

const BOARD_W = connect(mapStateToProps("Board"), mapDispatchToProps("Board"))(Board);

export default BOARD_W;