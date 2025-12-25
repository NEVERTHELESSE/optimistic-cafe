type propT = {
  minutes: number;
};

export default function Time({ minutes }: propT) {
  return (
    <div>
      <strong className="text-orange-500 text-2xl italic">
        ⌛ {minutes} Min
      </strong>
    </div>
  );
}
