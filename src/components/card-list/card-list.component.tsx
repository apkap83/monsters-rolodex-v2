import Card from "../card/card.component";
import { Monster } from "../../App";

import "./card-list.styles.css";

type Props = {
  monsters: Monster[];
};

const CardList = ({ monsters }: Props) => (
  <div className="card-list">
    {monsters.map((monster: Monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
