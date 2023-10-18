import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { selectAllCards } from "../../redux/cards/selectors";
import { CardListStyled, Li } from "./CardList.styled";

export const CardList = () => {
  const cards = useSelector(selectAllCards);

  return (
    <CardListStyled>
      {cards.map(({ id, name, price, ticket, yieldd, days, sold }) => (
        <Li key={id}>
          <Card
            id={id}
            name={name}
            price={price}
            ticket={ticket}
            yield={yieldd}
            days={days}
            sold={sold}
          />
        </Li>
      ))}
    </CardListStyled>
  );
};
