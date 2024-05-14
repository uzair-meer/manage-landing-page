export default function AboutUsCard({ id, title, description }) {
  return (
    <div className="flex-col about-card">
      <div className="title-circle">
        <span className="circle">0{id}</span>
        <h3 className="line-175 f-18">{title}</h3>
      </div>

      <div className="space-x-6 mt-15 flex-col gap-1">
        <p className="gray line-15">{description}</p>
      </div>
    </div>
  );
}
