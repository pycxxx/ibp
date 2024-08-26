import { PropsWithChildren } from "react";

export default function Slider({ children }: PropsWithChildren<object>) {
    return (
        <div className="flex gap-4">
            {children}
        </div>
    )
}