type img = {
  src: string;
  alt: string;
};

export default function Image({ src, alt }: img) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}
