import styled from "styled-components";

export const MySection = styled.section`

text-align: center;
padding-top: ${props => props.theme.space[5]}px;
padding-bottom: ${props => props.theme.space[5]}px;

font-size: ${props => props.theme.fontSizes.l};
`;

export const Title = styled.h2`
margin-bottom: ${props => props.theme.space[5]}px;
color: ${props => props.theme.accentColor};
`;

