import styled from 'styled-components';
export const ContactFilter = styled.div`
  width: 70%;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
export const LabelForContactFilter = styled.label`
  display: block;
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.bolt};
  cursor: pointer;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const InputForContactFilter = styled.input`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.m};
  width: 100%;
  height: 20px;
  cursor: pointer;
  transition: outline 250ms linear, color 250ms linear;
  :hover,
  :focus {
    outline: 1px solid ${p => p.theme.colors.hoverBtnColor};
  }
`;
