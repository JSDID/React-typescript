type ListProps<T> = {
  title: string;
  items: T[];
};

function List<T>({ title, items }: ListProps<T>) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </>
  );
}

export default List;