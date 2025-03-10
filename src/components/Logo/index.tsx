import { Icon } from "@static/icons";
import { images } from "@static/images";
import type { FC } from "react";

/**
 * Logo is a text but if there is need to use img, add two img from <Image component
 * @import
 * @example
 * import { Image } from "@static/images";
 * <Image src="logo-light" alt="logo" data-theme-el="light" />
 * when is light
 * <Image src="logo-dark" alt="logo" data-theme-el="dark" />
 */
export const Logo: FC = () => {
    return (
        <div className="shrink-0 mt-8 lg:mt-0">
            {/* Logo */}
            <a href="/" className="block" aria-label="logo">
                <div className="w-[1200px] mx-auto lg:pl-[-1000px]">
                    <img
                        src={images.assuclyLogo.src}
                        alt="ASSUCLY logo"
                        className="w-[300px] lg:max-w-60"
                    />
                </div>
            </a>
        </div>
    );
};
