import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardList } from "../../components/CardList/CardList";
import { fetchCards } from "../../redux/cards/operations";
import { selectLoading } from "../../redux/cards/selectors";

export default function Cards() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <>
      <div>{isLoading && "Request in progress..."}</div>
      <CardList />
    </>
  );
}
