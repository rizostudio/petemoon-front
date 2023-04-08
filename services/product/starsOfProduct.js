import Image from "next/image";
//media

export const starsBoxHandler = (stars) => {
  const starsBox = [];
  for (let i = 0; i < stars; i++) {
    starsBox.push(
      <Image
        width={20}
        height={20}
        src={"/assets/common/startGold.svg"}
        alt="GoldenStarIcon"
      />
    );
  }
  for (let i = 0; i < 5 - stars; i++) {
    starsBox.push(
      <Image
        width={20}
        height={20}
        src={"/assets/common/starEmpty.svg"}
        alt="EmptyStarIcon"
      />
    );
  }
  return starsBox;
};
