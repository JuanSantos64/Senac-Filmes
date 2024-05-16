import { Button } from "@/app/components/button";
import { NavBar } from "@/app/components/navbar";
import { ArrowLeft, Link, Youtube } from "lucide-react";

export default function Sobre() {
  return (  // JSX - TSX
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <section className="flex p-12 gap-9 bg-[url('https://image.tmdb.org/t/p/original/8uVKfOJUhmybNsVh089EqLHUYEG.jpg')]">

        <div className="w-[275px] rounded overflow-hidden">
          <img className="w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/e8pI4XkYgUMuSJ8cEFbJE18wc4e.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-9 w-4/5">
          <h2 className="text-4xl font-bold">Titulo do filme</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda rem debitis quidem, alias ex. In soluta deleniti corporis totam, recusandae autem animi culpa officia voluptatum nam quasi tempore iure?</p>
        </div>
      </section>

      <section className="flex gap-6 m-4">
        <Button label="Voltar" href="/" icon={<ArrowLeft />}/>
        <Button label="Site" href="/" icon={<Link />}/>
        <Button label="Voltar" href="/" icon={<Youtube />}/>
      </section>
    </main>
  );
}
