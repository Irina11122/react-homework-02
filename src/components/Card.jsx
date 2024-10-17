export default function Card({ name, img, url, alt }) {
  return (
    <div
      style={{
        fontFamily: "Chewy",
        fontWeight: "400",
        fontStyle: "normal",
      }}
    >
      <a style={{ padding: "0", margin: "0" }} href={url}>
        <img
          style={{
            height: "280px",
            width: "250px",

            borderRadius: "20px",
          }}
          src={img}
          className={`${name} logo`}
          alt={alt}
        />
        <h1> {name} </h1>
      </a>
    </div>
  );
}
