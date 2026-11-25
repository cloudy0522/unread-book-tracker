import { useState } from "react";
import { Container, Stack, Title } from "@mantine/core";
import TodaysGoals from "../components/TodaysGoals";
import type { Book, Goal } from "../types";

// 백엔드(Express) API가 준비되면 이 파일 대신 fetch로 교체합니다.
export const mockBooks: Book[] = [
  {
    isbn: "1",
    title: "aaaa",
    author: "aaaa",
    totalPages: 584,
    currentPage: 120,
    coverUrl: "",
    readingStatus: "",
    acquiredDate: undefined,
  },
  {
    isbn: "2",
    title: "bbbb",
    author: "bbbb",
    totalPages: 248,
    currentPage: 70,
    coverUrl: "",
    readingStatus: "",
    acquiredDate: undefined,
  },
  {
    isbn: "3",
    title: "cccc",
    author: "cccc",
    totalPages: 632,
    currentPage: 0,
    coverUrl: "",
    readingStatus: "",
    acquiredDate: undefined,
  },
  {
    isbn: "4",
    title: "dddd",
    author: "dddd",
    totalPages: 720,
    currentPage: 720,
    coverUrl: "",
    readingStatus: "",
    acquiredDate: undefined,
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
      <Stack gap={40}>
        <Title order={1} size="h3">
          책을 읽읍시다
        </Title>
        <Container w="100%" px="xl">
          <TodaysGoals
            goals={mockGoals}
            onToggle={function (goalId: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Container>
      </Stack>
    </>
  );
}
