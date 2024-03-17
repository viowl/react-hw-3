export default function Contact({ name, number }) {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button>Delete</button>
    </>
  );
}
