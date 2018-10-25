import * as React from 'react';
import styled from 'styled-components';
// interface IProps{
//     name? : string;
// }

const TopHeader = styled.div`
    top:0;
    height:7vh;
    width:100%;
    background:#000000;
    color:#FFFFFF;
`;

const Header: React.SFC = () => (
    <TopHeader/>
);

export default Header;