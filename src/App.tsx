import { useGetPokemonByNameQuery } from "./redux-modules/api/pokemon";
import { useGetRistorantiQuery } from "./redux-modules/api/restaurant";

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const { data: data2, error: error2, isLoading: isLoading2 } = useGetRistorantiQuery({});
  console.log(data2);
  if (isLoading || isLoading2) return <div>Loading...</div>;
  if (error) return <div>Oh no, there was an error</div>;
  if (error2) return <div>Oh no, there was an error restaurant</div>;
  return (
    <div className="App">
      <h3>{data.species.name}</h3>
      <img src={data.sprites.front_shiny} alt={data.species.name} />

      <h3>Ristoranti</h3>
      {data2?.map((ristorante) => (
        <p key={ristorante.sys.id} className=" text-3xl text-primary">
          {ristorante.fields.name["en-US"]}
        </p>
      ))}
    </div>
  );
}

export default App;
