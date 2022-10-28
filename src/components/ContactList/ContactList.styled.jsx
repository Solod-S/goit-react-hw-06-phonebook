import styled from 'styled-components';

export const ContactsList = styled.div`
  width: 70%;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
export const ListForContactsList = styled.ul`
  display: flex;
  flex-direction: column;
`;
// export const ItemsForContactsList = styled.li`
//   display: flex;
//   /* flex-direction: column; */
//   /* justify-content: space-between; */
//   align-items: center;
//   padding-bottom: ${p => p.theme.space[3]}px;
//   border-bottom: 1px solid black;
//   :not(:last-child) {
//     margin-bottom: ${p => p.theme.space[3]}px;
//   }
// `;
// export const NameForContactsList = styled.p`
//   font-family: ${p => p.theme.fontFamily.roboto};
//   font-size: ${p => p.theme.fontSizes.s};
// `;
// export const NamberForContactsList = styled.p`
//   font-family: ${p => p.theme.fontFamily.roboto};
//   font-size: ${p => p.theme.fontSizes.s};
//   margin-left: auto;
// `;
// export const ButtonForContactsList = styled.button`
//   display: block;
//   padding: 5px;
//   margin-left: ${p => p.theme.space[5]}px;
//   border-radius: ${p => p.theme.radii.normal};
//   outline: 1px solid black;
//   cursor: pointer;
//   color: ${p => p.theme.colors.primaryText};
//   font-family: ${p => p.theme.fontFamily.roboto};
//   font-size: ${p => p.theme.fontSizes.m};
//   transition: transform 250ms linear, outline 250ms linear;
//   :hover,
//   :focus {
//     color: ${p => p.theme.colors.hoverBtnColor};
//     outline: 1px solid ${p => p.theme.colors.hoverBtnColor};
//     transform: scale(1.1);
//   }
// `;
