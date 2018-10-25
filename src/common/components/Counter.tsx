import * as React from 'react';

interface IProps {
    countBy?: number;
}

interface IState {
    count:number;
}
class Counter extends React.Component<IProps, IState> {

    public static defaultProps: Partial<IProps> = {
        countBy: 1,
    }

    public state: IState = {
        count: 0,
    }

    public increase = () => {
        const countBy: number = this.props.countBy!;
        const count = this.state.count + countBy;
        this.setState({count});

    }

    public render (){
        return(
            <div>
                <button onClick={this.increase}>{this.state.count}</button>
            </div>
        );
    }

}

export default Counter;