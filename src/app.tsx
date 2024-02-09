import logo from './assets/logo-nlw-expert.svg';
import {NoteCard} from "./components/note-card.tsx";
import {NewNoteCard} from "./components/new-note-card.tsx";

export function App() {

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert"/>

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque as suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard note={{
          date: new Date(),
          content: "Aqui está o conteúdo da nota"
        }} />
      </div>
    </div>
  )
}
