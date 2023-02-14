import { useLocation } from 'react-router-dom';
import { NavLinkStyled } from './BackBtn.styled';

export const BackBtn = () => {
  const location = useLocation();

  return (
    <NavLinkStyled to={location?.state?.from ?? '/'} type="button">
      back
    </NavLinkStyled>
  );
};
