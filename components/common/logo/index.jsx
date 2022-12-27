import petemoonLogo from "../../../assets/common/petemoonLogo.png";
export default function PetemoonLogo({ size = "responsive" }) {
  return (
    <div className="flex flex-col items-center text-primary">
      <div className="avatar">
        <div
          className={
            size === "sm"
              ? "w-[61px]"
              : size === "md"
              ? "w-[124px]"
              : size === "responsive"
              ? "w-[61px] md:w-[124px]"
              : ""
          }
        >
          <img src={petemoonLogo.src} />
        </div>
      </div>
      <p
        className={`font-bold ${
          size === "sm"
            ? "text-[20px]"
            : size === "md"
            ? "text-[40px]"
            : size === "responsive"
            ? "text-[20px] md:text-[40px]"
            : ""
        }`}
      >
        petemoon
      </p>
    </div>
  );
}
