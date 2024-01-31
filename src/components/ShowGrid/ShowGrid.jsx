import "./showgrid.css";
import Card from "../Card";
import { useData } from "../../hooks/useData";

const ShowGrid = () => {
  const { data } = useData();

  return (
    <div className="container mt-3 rounded-1">
      <div className="grid">
        {data &&
          data.map((film) => (
            <Card
              id={film.show.id}
              key={film.show.id}
              imageUrl={film.show.image?.original}
              title={film.show.name}
              type={film.show.type}
              lang={film.show.language}
              premeireDate={film.show.premiered}
              weight={film.show.weight}
            />
          ))}
      </div>
    </div>
  );
};

export default ShowGrid;
