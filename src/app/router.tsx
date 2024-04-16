import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {TheoryPage} from "../pages/ListTheoryPage";
import {TheoryItemPage} from "../pages/TheoryItemPage";
import {ErrorPage} from "../pages/ErrorPage";
import {AboutUsPage} from "../pages/AboutUsPage";
import {CalculatorPage} from "../pages/CalculatorPage";

export const router = createBrowserRouter([
    {
        path: "*",
        element: <ErrorPage />,
    },
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/all-theory",
        element: <TheoryPage />,
    },
    {
        path: "/theory",
        element: <TheoryPage />,
    },
    {
        path: "/theory/:name",
        element: <TheoryItemPage />,
    },
    {
        path: "/about",
        element: <AboutUsPage />,
    },
    {
        path: "/calculator",
        element: <CalculatorPage />,
    },
])