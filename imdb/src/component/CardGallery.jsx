function CardGallery()
{
  const series = [
    {
      8.0,
     Reacher,
     S4 E5,
     Wed,Aug 26
    
    {
      name: "Akhil",
      roll: "130",
      branch: "CSE",
      college: "ABESEC",
    },
    {
      name: "Akshay",
      roll: "139",
      branch: "CSE",
      college: "ABESEC",
    },
  ];

  return (
    <div
      style={{
        border: "2px solid black",
        margin:"50px",
        padding:"50px",
        display: "flex",
        gap: "10px",
      }}
    >
      {series.map((ele) => (
        <Card data={ele} />
      ))}
    </div>
  );
}

export default CardGallery;