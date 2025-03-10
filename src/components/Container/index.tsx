import { type ReactElement, type ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
};

/**
 *  Custom container based on the Bootstrap container.
 */
export const Container = (props: ContainerProps): ReactElement => {
    const { children, ...rest } = props;
    return (
        <div
            className="m-auto px-4 sm:px-5 w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-1320px"
            {...rest}
        >
            {children}
        </div>
    );
};
