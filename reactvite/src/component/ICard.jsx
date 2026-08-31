
import pic from '../images/idcard.jpg'
function ICard() {
  const b = "Divyam";
  const c = 2400320100437;
  const d = "CSE";

  return (
    <>
     
      <div 
        style={{
          border: "25px solid black",
          height: "400px",
          width: "850px"
        }}
      >
      <img src={pic} height={100} width={100}></img>
        <h1 style={{ color: "green" }}>
          Name: {b}
        </h1>
        <h1 style={{ color: "blue" }}>
          Roll no: {c}
        </h1>
        <h1 style={{ color: "maroon" }}>
          Branch: {d}
        </h1>
        <h1 style={{ color: "gray" }}>
          College: ABESEC
        </h1>
      </div>
    </>
  );
}

export default ICard;