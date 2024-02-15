import { StaticImageData } from "next/image";
import { ReactNode as _ReactNode, FC, SVGProps, SVGSVGElement } from "react";

declare global {
  type ReactNode = _ReactNode;

  module "*.svg" {
    const component: FC<SVGProps<SVGSVGElement>>;
    export default component;
  }

  module "*.png" {
    const content: StaticImageData;

    export default content;
  }

  module "*.jpg" {
    const content: StaticImageData;

    export default content;
  }

  module "*.jpeg" {
    const content: StaticImageData;

    export default content;
  }

  module "*.gif" {
    const content: StaticImageData;

    export default content;
  }

  module "*.webp" {
    const content: StaticImageData;

    export default content;
  }

  module "*.avif" {
    const content: StaticImageData;

    export default content;
  }

  module "*.ico" {
    const content: StaticImageData;

    export default content;
  }

  module "*.bmp" {
    const content: StaticImageData;

    export default content;
  }
}
