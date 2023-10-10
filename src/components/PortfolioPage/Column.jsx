import "./Portfolio.scss";

const Column = ({ index, title, subtitle, setModal }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="columnContainer"
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Column;
