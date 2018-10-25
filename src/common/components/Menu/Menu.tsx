import * as React from 'react';

interface Props {
	children: JSX.Element[];
}

const MenuList: React.SFC<Props> = ({ children }) => {
	return <ul>{children}</ul>;
};

export default MenuList;
