import * as React from 'react';
import styled from 'styled-components';
// let newHeight = window.innerHeight;
const BGOverlay = styled.div`
	background: rgba(0, 0, 0, 0.9);
	height: 1000px;
	width: 100%;
	z-index: 2;
	color: #ffffff;
`;

// interface IProps {
//     visibility:boolean;
// }
interface State {
	isVisible: boolean;
}
class Overlay extends React.Component<{}, State> {
	// public static defaultProps: Partial<IProps> = {
	//     visibility: true,
	// }

	public state: State = {
		isVisible: true
	};

	public handleShow = () => {
		// const visibility: boolean = this.props.visibility!;
		// const isVisible = this.state.isVisible;
		this.setState({ isVisible: !this.state.isVisible });
	};

	public render() {
		return <BGOverlay style={this.state.isVisible ? { opacity: 1 } : { opacity: 0 }} onClick={this.handleShow} />;
	}
}

export default Overlay;
