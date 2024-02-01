import "./showgrid.css";
import Card from "../Card";
import { useData } from "../../hooks/useData";

const ShowGrid = () => {
  const { data, isLoading, isError } = useData();

  if (isLoading)
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );

  if (isError)
    return (
      <div className="container">
        <h2>Something went wrong...</h2>
      </div>
    );

  return (
    <div className="container">
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
