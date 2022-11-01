interface HomeProps {
    count: number;
}
export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Contagem: {props.count}</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const count = await fetch("http://localhost:3333/pools/count")
  const data = await count.json()

  console.log(data)

  return {
    props: {
      count: data.count,
    },
  }
}
