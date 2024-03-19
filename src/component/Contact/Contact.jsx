export default function Contact({ name, number, id, onDelete }) {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>

        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </>
  );
}
