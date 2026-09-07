import pic from "../images/idcard.jpg";

function Card({data}) {
  return (
    <div
      style={{
        border: "5px solid black",
        height: "600px",
        width: "800px",
      }}
    >
      <img src={pic} height={50} width={50} />
      <h1 style={{ color: "green"}}> {data.name}</h1>
      <h1 style={{ color: "blue" }}>{data.roll}</h1>
      <h1 style={{ color: "maroon" }}>: {data.branch}</h1>
      <h1 style={{ color: "gray" }}>{data.college}</h1>
    </div>
  );
}
export default Card;