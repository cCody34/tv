import { PersonInfo } from "../types";

interface IPersonCard {
  person: PersonInfo;
}

export const PersonCard = ({ person }: IPersonCard) => {
  return (
    <>
      <h3>{person.name}</h3>
      {person.image ? <img src={person.image.medium}></img> : <></>}
    </>
  );
};
