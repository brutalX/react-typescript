import * as React from 'react';

interface Props {
	countBy?: number;
}

interface State {
	count: number;
}
class Counter extends React.Component<Props, State> {
	public static defaultProps: Partial<Props> = {
		countBy: 1
	};

	public state: State = {
		count: 0
	};

	public increase = () => {
		const countBy: number = this.props.countBy!;
		const count = this.state.count + countBy;
		this.setState({ count });
	};

	public render() {
		return (
			<div>
				<button onClick={this.increase}>{this.state.count}</button>
			</div>
		);
	}
}

export default Counter;
