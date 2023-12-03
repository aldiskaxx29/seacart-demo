export default function Videos() {
  return (
    <div>
      {" "}
      <div className="rounded-xl  object-cover shadow-2xl lg:w-[768px] h-[432px] overflow-hidden flex items-center justify-center">
        <iframe
          width="100%"
          height="700" // You can adjust the height based on your preference
          src="https://www.youtube.com/embed/LaEqJs0HIio?si=WVAzqnDFWedn0DFl"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
    </div>
  );
}
