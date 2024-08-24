import { Temperature } from "@/libs/physic/convert-temperature/model.types";

export default function Termometer({ top, bottom, unit }: Temperature) {
  return (
    <section className="relative flex h-32 w-32">
      <div className="top-0 ml-4 flex h-24 w-1/4 translate-y-3 flex-col items-end justify-around">
        <span className="relative flex h-1 w-3 items-center rounded-lg bg-white">
          <p className="absolue -translate-x-full px-1">{top}</p>
        </span>
        <span className="relative h-1 w-3 rounded-lg bg-white"></span>
        <span className="relative h-1 w-3 rounded-lg bg-white"></span>
        <span className="relative h-1 w-3 rounded-lg bg-white"></span>
        <span className="relative flex h-1 w-3 items-center rounded-lg bg-white">
          <p className="absolue -translate-x-full px-1">{bottom}</p>
        </span>
      </div>
      <section className="flex w-2/4 flex-col items-center">
        <div className="z-10 flex h-20 w-5 flex-col items-center rounded-t-full bg-white">
          <div className="h-1/2 w-3/5 translate-y-1 rounded-t-full bg-gray-300"></div>
          <div className="h-1/2 w-3/5 translate-y-1 bg-red-500"></div>
        </div>
        <div className="z-0 flex size-10 -translate-y-1 items-center justify-center rounded-full bg-white">
          <div className="size-4/5 rounded-full bg-red-500"></div>
        </div>
      </section>
      <span className="top-0 w-1/4 text-2xl font-bold text-white">
        {unit.match(/(°.)|K/)?.[0]}
      </span>
    </section>
  );
}
