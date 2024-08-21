import { Clientele } from "../Main/Patner";

function Clienteles(params) {
  return (
    <div className="p-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold capitalize tracking-tight lg:text-5xl text-center"></h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-center"></p>

      <div className="p-5">
        <Clientele />
      </div>
    </div>
  );
}

export default Clienteles;
