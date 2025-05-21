import Dashboard from "./Dashboard";

type ContentProps = {
  user: any;
};

export function Content({ user }: ContentProps) {
  return (
    <div className="flex flex-col gap-6 bg-cor-fundo-content p-10 w-full">
      <h1 className="text-4xl font-bold font-poppins m-0 text-white">
        Esta é sua Carteira V.E. Real Estate
      </h1>

      <Dashboard user={user} />
    </div>
  );
}
