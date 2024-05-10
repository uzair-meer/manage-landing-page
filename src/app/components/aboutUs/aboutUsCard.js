export default function AboutUsCard({ id, title, description }) {
  return (
    <div className="flex ">
      <span className="circle">0{id}</span>
      <div className="space-x-6 flex-col gap-1">
        <h3 className="line-175 f-18">{title}</h3>
        <p className="gray line-15">{description}</p>
      </div>
    </div>
  );
}
