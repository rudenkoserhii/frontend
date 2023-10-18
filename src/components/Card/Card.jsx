import { CardStyled, DataBox, DataStyled, NameStyled } from "./Card.styled";
import PropTypes from "prop-types";

export const Card = ({ name, price, ticket, yieldd, days, sold }) => {
  return (
    <CardStyled>
      <NameStyled>{name}</NameStyled>
      <DataBox>
        <DataStyled>{price}</DataStyled>
        <DataStyled>{ticket}</DataStyled>
        <DataStyled>{yieldd}</DataStyled>
        <DataStyled>{days}</DataStyled>
        <DataStyled>{sold}</DataStyled>
      </DataBox>
    </CardStyled>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ticket: PropTypes.number.isRequired,
  yieldd: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
};
