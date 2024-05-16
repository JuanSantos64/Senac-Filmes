import Link from "next/link";
import { NavBar } from "./components/navbar";
import { Title } from "./components/title";
import { Card } from "./components/card";

export default function Home() {

  const filmes = [
    {
      id: 1,
      title: "Dune 2",
      poster_path: "https://image.tmdb.org/t/p/w220_and_h330_face/e8pI4XkYgUMuSJ8cEFbJE18wc4e.jpg",
      vote_average: 9.0
    },{
    id: 2,
    title: "The Batman",
    poster_path: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg",
    vote_average: 9.0
  }
  ]
    

   
  return (  // JSX - TSX
    <main className="flex min-h-screen flex-col">
    <NavBar/>
        <Title>Filmes em Alta</Title>
      <section className="flex gap-10 m-4 flex-wrap">
        
        { filmes.map( filme => <Card filme = {filme}/>) }
        
      </section>
      <section>
        <Title>Series em Alta</Title>
      </section>
    </main>
  );
}
