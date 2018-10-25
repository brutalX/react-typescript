// import * as React from 'react';
// import Menu from './Menu';
// import { navigationOperations } from 'common/ducks/navigation';
// import { connect } from 'react-redux';

// interface Props {
// 	open: boolean;
// }

// class SideBar extends React.Component<Props> {
// 	public render() {
// 		const { children, open } = this.props;

// 		return (
// 			<Nav open={open}>
// 				{children}
// 				<Menu>
// 					<li>asdf</li>
// 					<li>asdf</li>
// 					<li>asdf</li>
// 					<li>asdf</li>
// 				</Menu>
// 			</Nav>
// 		);
// 	}
// }

// const mapStateToProps = (state: any): Props => ({
// 	open: state.navigation.open
// });

// const matchDispatchToProps = {
// 	closeNavigation: navigationOperations.closeNavigation,
// 	openNavigation: navigationOperations.openNavigation
// };

// export default connect(mapStateToProps, matchDispatchToProps)(SideBar);
