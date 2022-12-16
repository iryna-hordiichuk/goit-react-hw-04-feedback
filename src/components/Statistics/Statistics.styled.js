import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]}px;
  width: 350px;
  margin: 0 auto;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.space[4]}px;
  border-bottom: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.accentColor};
  
  /* :nth-last-child(-n + 2) {
    font-weight: ${props => props.theme.fontWeights.bold};
  } */
`;