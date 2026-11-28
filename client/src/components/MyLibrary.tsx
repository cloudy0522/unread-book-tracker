import {
  AspectRatio,
  Button,
  Card,
  Group,
  Image,
  NativeSelect,
  Progress,
  Rating,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router";
import type { Book } from "../types";
import { useState } from "react";
import defaultImage from "../assets/c.png";

const readingStatusFilter = (book: Book, filter: string) => {
  if (filter === "reading")
    return book.currentPage > 0 && book.currentPage < book.totalPages;
  if (filter === "unread") return book.currentPage === 0;
  if (filter === "abandoned") return book.readingStatus === "abandoned";
  if (filter === "finished") return book.currentPage === book.totalPages;
  return true;
};

export default function MyLibrary({ books }: { books: Book[] }) {
  const [filter, setFilter] = useState<string>("all"); //필터링
  const [sortKey, setSortKey] = useState<string>("dueDate"); //정렬
  const filteredBooks = books.filter((book) =>
    readingStatusFilter(book, filter),
  );
  return (
    <Stack p={"xl"}>
      <Group justify="space-between" px={"sm"}>
        <Title order={3}>내 서재</Title>
        <Group gap={"sm"}>
          <NativeSelect
            value={filter}
            onChange={(event) => setFilter(event.currentTarget.value)}
            data={[
              { label: "전체", value: "all" },
              { label: "읽고 있는 책", value: "reading" },
              { label: "쌓아둔 책", value: "unread" },
              { label: "포기한 책", value: "abandoned" },
              { label: "다 읽은 책", value: "finished" },
            ]}
          />
          <Button component={Link} to={`/books/new`}>
            + 책 등록하기
          </Button>
        </Group>
      </Group>
      <div style={{ justifyContent: "center", alignContent: "center" }}>
        {books.length === 0 ? (
          <Text c="dimmed" ta={"center"}>
            아직 등록된 책이 없어요.
          </Text>
        ) : filteredBooks.length === 0 ? (
          <Text c="dimmed" ta={"center"}>
            조건에 해당하는 책이 없어요.
          </Text>
        ) : (
          <SimpleGrid
            cols={{ base: 1, xs: 2, sm: 3, lg: 4, xl: 5 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            {filteredBooks.map((book) => {
              return (
                <Card
                  key={book.id}
                  component={Link}
                  to={`/books/${book.id}`}
                  padding="lg"
                  withBorder
                >
                  <Card.Section>
                    <AspectRatio ratio={5 / 4}>
                      {book.coverUrl ? (
                        <Image
                          h={480}
                          fit="cover"
                          src={book.coverUrl}
                          alt={`${book.title} cover`}
                          fallbackSrc={defaultImage}
                        />
                      ) : (
                        <Image src={defaultImage} />
                      )}
                    </AspectRatio>
                  </Card.Section>
                  <Stack gap="8" mt="xs">
                    <div>
                      <Text ta="left" fw={500} size="lg" truncate="end">
                        {book.title}
                      </Text>
                      <Text ta="left" c="dimmed" truncate="end">
                        {book.author}
                      </Text>
                    </div>
                    <Progress
                      size="lg"
                      color="cyan"
                      value={
                        (book.totalPages
                          ? book.currentPage / book.totalPages
                          : 0) * 100
                      }
                    />
                    <Rating
                      value={book.rate ? book.rate / 2 : 0}
                      fractions={2}
                      readOnly
                    />
                  </Stack>
                </Card>
              );
            })}
          </SimpleGrid>
        )}
      </div>
    </Stack>
  );
}
