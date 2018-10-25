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
	backgroundColor: #cecece;
	padding: 20px 0px;
	text-align: center;
	opacity: ${(props) => (props.open ? 1 : 0)};
`;

interface Props {
	children: JSX.Element[];
}

interface State {
	open: boolean;
}

class AndyMenu extends React.Component<Props, State> {
	render() {
		const { children } = this.props;
		const { open } = this.state;
		return (
			<Nav open={open}>{children}</Nav>;
		)
	}
}

export default AndyMenu;
