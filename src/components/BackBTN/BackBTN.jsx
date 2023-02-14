import { useLocation } from 'react-router-dom';
import { NavLinkStyled } from './BackBtn.styled';

export const BackBTN = () => {
  const location = useLocation();

  return (
    <NavLinkStyled to={location?.state?.from ?? '/'} type="button">
      back
    </NavLinkStyled>
  );
};
