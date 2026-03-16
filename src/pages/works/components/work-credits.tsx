type WorkCreditsProps = {
  items: string[];
};

export function WorkCredits({ items }: WorkCreditsProps) {
  return (
    <ul
      style={{
        textAlign: "right",
        wordBreak: "keep-all",
        listStyle: "none",
        fontSize: "10px",
        color: "gainsboro",
        lineHeight: "1.4em",
      }}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
