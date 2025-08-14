import { describe, test } from "vitest"
import { render } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./configs/router/Router";
import TestEnvRenderer from "./TestEnvRenderer";


describe("App.tsx file testing", () => {
    test("render component", () => {
        render(
            <TestEnvRenderer>
                <RouterProvider router={router} />
            </TestEnvRenderer>
        );
    })
})