import Me from "../assets/rachel-reilly.jpg";
import Image from "next/image";
export default function SelfPicture(){
    return (
        <div className="image-wrapper">
            <Image className="about-img" src={Me} priority={true} />
      </div>
    )
}