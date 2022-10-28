import styled from 'styled-components';
export const AppSection = styled.section`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  /* height: 336px; */
  box-shadow: -7px 7px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%);

  /* outline: 2px solid black; */
  @media screen and (min-width: 1200px) {
    margin-right: ${p => p.theme.space[5]}px;
  }
`;
export const MainAppHeader = styled.h1`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.l};

  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const AppHeader = styled.h2`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.l};

  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const AppImgLeft = styled.img`
  @media screen and (max-width: 950px) {
    display: none;
  }
  display: block;
  height: 600px;
  /* max-width: 365px; */
  /* height: auto; */
  margin-right: ${p => p.theme.space[5]}px;
`;
export const AppImgRigth = styled.img`
  @media screen and (max-width: 1200px) {
    display: none;
  }
  display: block;
  height: 600px;
  /* max-width: 365px; */
  /* height: auto; */
`;
