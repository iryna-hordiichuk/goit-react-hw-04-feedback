import styled from 'styled-components';

export const Message = styled.p`
font-size: ${props => props.theme.fontSizes.l};
color: ${props => props.theme.colors.accentColor};
font-weight: ${props => props.theme.fontWeights.bold};
`;