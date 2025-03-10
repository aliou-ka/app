import { Button } from "@components/Button";
import { Image, type ImageProps, images } from "@static/images";
import { type ReactElement } from "react";

export type ContentImageProps = {
    logo?: ImageProps["srcLocal"];
    label: string;
    title: string;
    description: string;
    button: {
        text: string;
        link: string;
        variant: "primary" | "secondary" | "tertiary";
    };
    image?: ImageProps["srcLocal"];
};

export const ContentImage = (props: ContentImageProps): ReactElement | null => {
    const { title, description, button, image, label, logo } = props;

    // Do not render if there are no elements
    if (!title && !description) {
        return null;
    }

    return (
        <section className="relative bg-primary w-full">
            <div className="w-full grid lg:grid-cols-2 grid-cols-1">
                <div className="py-4 px-4 sm:px-6 lg:py-8 lg:px-20 xl:py-12 xxl:py-16 xxl:px-40 flex items-center">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:-mt-20" data-animate>
                        {logo && (
                            <div className="w-full flex justify-center lg:justify-start lg:-ml-40">
                                <img
                                    src={images[logo].src}
                                    alt="logo"
                                    className="w-[300px] lg:max-w-60 mb-20 lg:mb-0 lg:-ml-40"
                                />
                            </div>
                        )}
                        <h1 className="mt-32 lg:mt-10 text-4xl font-bold tracking-tight text-secondary sm:text-6xl">
                            {title}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-secondary opacity-50">
                            {description}
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Button
                                variant={button.variant}
                                link={button.link}
                                className="inline-flex items-center justify-center border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out text-primary hover:text-white bg-tertiary hover:bg-opacity-50 font-medium p-2 px-3 lg:px-4 text-sm relative cursor-pointer"
                                type="button"
                            >
                                {button.text}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                    {image && (
                        <>
                            <img
                                src={images[image].src}
                                alt="hero image"
                                className="absolute inset-0 h-[400px] lg:h-[600px] w-full object-cover object-right"
                            />
                            {/* Auth Links Container */}
                            <div className="absolute top-6 right-4 lg:right-12 flex items-center gap-x-4 lg:gap-x-6 z-[100]" style={{ pointerEvents: 'auto' }}>
                                <a
                                    href="/signin"
                                    className="inline-flex items-center justify-center border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out text-secondary hover:text-white bg-primary hover:bg-secondary font-medium p-2 px-3 lg:px-4 text-sm relative cursor-pointer"
                                >
                                    Se connecter
                                </a>
                                <a
                                    href="/signup"
                                    className="inline-flex items-center justify-center border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out text-primary hover:text-white bg-tertiary hover:bg-opacity-50 font-medium p-2 px-3 lg:px-4 text-sm relative cursor-pointer"
                                >
                                    S'enregistrer
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};
