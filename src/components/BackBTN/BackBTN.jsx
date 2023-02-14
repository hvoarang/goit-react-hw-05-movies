import { useLocation } from 'react-router-dom';
import { NavLinkStyled } from './BackBTN.styled';

export const BackBTN = () => {
  const location = useLocation();

  return (
    <NavLinkStyled to={location?.state?.from ?? '/'} type="button">
      back
    </NavLinkStyled>
  );
};
