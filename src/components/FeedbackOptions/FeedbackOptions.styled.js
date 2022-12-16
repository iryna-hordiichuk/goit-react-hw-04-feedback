import styled from 'styled-components';

export const ListForOptions = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[5]}px;
`;


export const OptionsButton = styled.button`
  width: 150px;
  padding: ${props => props.theme.space[4]}px;
  border: none;
  cursor: pointer;

  background-color: ${props => props.theme.colors.accentColor};
  border-radius: ${props => props.theme.radii.normal};
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.secondaryText};
  transition: background-color 300ms linear, color 300ms linear;

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.secondaryText};
    color: ${props => props.theme.colors.accentColor};
    border: ${props => props.theme.colors.accentColor};
  }
`;
