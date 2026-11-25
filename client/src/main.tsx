import { StrictMode } from "react";
import "./index.css";
import "@mantine/core/styles.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import MainPage from "./pages/MainPage";
import BookPage from "./pages/BookPage";
import AddBookPage from "./pages/AddBookPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/books/:id", element: <BookPage /> },
  { path: "/books/new", element: <AddBookPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
