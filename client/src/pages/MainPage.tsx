import { useState } from "react";
import { Container, Stack, Title } from "@mantine/core";
import TodaysGoals from "../components/TodaysGoals";
import type { Book, Goal } from "../types";
import MyLibrary from "../components/MyLibrary";

// 백엔드(Express) API가 준비되면 이 파일 대신 fetch로 교체합니다.
export const mockBooks: Book[] = [
  {
    id: "1",
    title: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    author: "aaaaaaaaaaaaaaaaaaaa",
    totalPages: 584,
    currentPage: 120,
    coverUrl: "",
    readingStatus: "",
    dueDate: new Date("2026-12-31"),
  },
  {
    id: "2",
    title: "bbbbbbbbbbbbbbbbbbbbㄱㄱㄱㄱㄱㄱㄱ",
    author: "bbbbㅎㅎㅎㅎㅎㅎㅎ",
    totalPages: 248,
    currentPage: 140,
    coverUrl: "",
    readingStatus: "",
    acquiredDate: undefined,
  },
  {
    id: "3",
    title: "cccc",
    author: "cccc",
    totalPages: 632,
    currentPage: 0,
    coverUrl: "",
    readingStatus: "",
    acquiredDate: undefined,
  },
  {
    id: "4",
    title: "dddd",
    author: "dddd",
    totalPages: 720,
    currentPage: 720,
    coverUrl: "",
    readingStatus: "",
    acquiredDate: undefined,
    rate: 10,
  },
];

export const mockGoals: Goal[] = [
  {
    id: "1",
    book: mockBooks[1],
    fromPage: 100,
    toPage: 200,
    done: false,
  },
];

export default function MainPage() {
  return (
    <>
      <Stack gap={40} align="center">
        <Title order={1} size="h3" py={"xl"}>
          책을 읽읍시다
        </Title>
        <Container w="100%" px="xl">
          <TodaysGoals />
          <MyLibrary books={mockBooks} />
        </Container>
      </Stack>
    </>
  );
}
