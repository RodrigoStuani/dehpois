/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background};  
`;

export const TitleWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
`;
