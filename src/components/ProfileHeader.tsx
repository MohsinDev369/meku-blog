import Image from "next/image";

export default function profileHeader() {
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <div className="flex flex-col justify-center items-center relative">
        <div className="w-[656px] h-[369px] inline-block rounded-xl overflow-hidden coverimg">
          <Image
            src={"/img/cover/cover.jpg"}
            height={500}
            width={500}
            alt="image_of_cover"
            className="w-full"
          />
        </div>
        <div
          id="profile-img-wrapper"
          className="w-32 h-32 inline-block rounded-xl overflow-hidden border-2 border-black shadow-btn absolute -bottom-12"
        >
          <Image
            src={"/img/mohsin.png"}
            height={500}
            width={500}
            alt="image_of_mohsin"
          />
        </div>
      </div>
      <h2 className="mt-16 font-extrabold">Mohsin Akram</h2>
    </div>
  );
}
