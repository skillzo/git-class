import { useParams } from "react-router-dom";
import useApi from "./hooks/useApi";
import { Input } from "./hooks/useApi";

export const Params = () => {
  const { id } = useParams();

  const url = `http://localhost:3005/cars/${id}`;
  const { data: cars, isLoading, error, isError } = useApi(url);

  if (isLoading) return <h2 className="feedback">Loading...</h2>;
  if (isError) return <h2 className="feedback">{error.message}</h2>;

  const data = {
    data: "data",
    name: "prasie",
  };

  console.log("data", { ...data });
  return (
    <div>
      <div className="cars-item">
        <p>{cars?.data.id}</p>
        <p>{cars?.data.car}</p>
        <p>{cars?.data.model}</p>
        <p>{cars?.data.year}</p>
        <p>
          {cars?.data.currency} {cars?.data.price}
        </p>
      </div>
      <Input props={{ placeholder: "Enter a text" }} />
    </div>
  );
};
