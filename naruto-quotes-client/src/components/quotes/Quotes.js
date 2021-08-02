export const Quotes = ({ quote, speaker }) => {
  return (
    <>
      <p>{quote}</p>
      <p> - {speaker}</p>
      <button>Quote No Jutsu</button>
    </>
  )
}