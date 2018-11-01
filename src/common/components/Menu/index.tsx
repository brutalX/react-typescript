import { connect } from 'react-redux';
import { NavOperations } from 'common/ducks/navigation';

import * as React from 'react';

import styled from 'styled-components';

interface NavProps {
	open: boolean;
}

const Nav =
	styled.nav <
	NavProps >
	`
	left: 0;
	top: 0;
	bottom: 0;
	position: fixed;
	width: 200px;
	height: 100%;
	background-color: #cecece;
	padding: 20px 0px;
	text-align: center;
	opacity: ${(props) => (props.open ? 1 : 0.5)};
`;

interface Props {
	children?: JSX.Element[];
	open: boolean;
	closeNavigation: () => void;
	openNavigation: () => void;
}
interface State {
	open: boolean;
}
class AndyMenu extends React.Component<Props, State> {
	public render() {
		const { children, open } = this.props;

		return (
			<div>
				{open ? <h1>true</h1> : <h1>false</h1>}
				<Nav open={open} onClick={this.props.closeNavigation}>
					{children}
				</Nav>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
	open: state.open
});

const matchDispatchToProps = {
	closeNavigation: NavOperations.closeNavigation,
	openNavigation: NavOperations.openNavigation
};

export default connect(mapStateToProps, matchDispatchToProps)(AndyMenu);
