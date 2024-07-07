export function ServiceCard({ Services }) {
  const onClickNameHandler = () => {
    console.log(Services);
  };
  return (
    <div>
      <img src=""></img>
      <h2 onClick={onClickNameHandler}>Name :{Services.name}</h2>
      <p>Description: {Services.description}</p>
    </div>
  );
}
