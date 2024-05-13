import Image from "next/image";

export default function Card({ name, img, quote }) {
  return (
    <div>
      <div className="card">
        <Image src={img} alt={img} className="card-img  " />
        <h5>{name}</h5>

        <p className="gray">{quote}</p>
      </div>
    </div>
  );
}
