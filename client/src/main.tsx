import { StrictMode } from "react";
import "@mantine/core/styles.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
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

const myTheme = createTheme({
  white: "#FCFCFC",
  black: "#0C0C0C",
  primaryColor: 'orange',
  defaultRadius: 0,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="auto" theme={myTheme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
