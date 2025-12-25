type propT = {
  title: string;
};

export default function PrimaryButton({ title }: propT) {
  const colors = ["blue", "green", "purple", "brown", "red"];
  return (
    <button
      className={`capitalize  font-bold  rounded-lg p-2 w-fit`}
      style={{
        background: colors[Math.floor(Math.random() * colors.length)],
      }}
    >
      {title}
    </button>
  );
}
