import {
  Button,
  Card,
  Group,
  Stack,
  Text,
  Title,
  Progress,
  Anchor,
} from "@mantine/core";
import type { Book, Goal } from "../types";

type Props = {
  goals: Goal[];
  onToggle: (goalId: string) => void;
};

export default function TodaysGoals({ goals, onToggle }: Props) {
  // todo: 숫자가 이상할 경우(책 전체 쪽수보다 많다던가... ) 처리
  const doneCount = goals.filter((g) => g.done).length;
  const totalPages = goals.reduce(
    (sum, goal) => sum + (goal.toPage - goal.fromPage + 1),
    0,
  );
  const readPages = goals.reduce(
    (sum, goal) => sum + (goal.book.currentPage - goal.fromPage + 1),
    0,
  );
  const head = (
    <Stack px="xl">
      <Group justify="space-between">
        <Title order={2} size="h3">
          오늘의 독서 목표
        </Title>
        {goals.length > 0 && <Text>총 {totalPages} 쪽 읽기</Text>}
      </Group>
      {goals.length > 0 && (
        <Progress.Root size="50">
          <Progress.Section value={(readPages / totalPages) * 100} color="cyan">
            <Progress.Label>
              {goals.length === doneCount ? "목표 달성!" : `${readPages} 쪽`}
            </Progress.Label>
          </Progress.Section>
        </Progress.Root>
      )}
    </Stack>
  );
  return (
    <Stack component="section" gap="md">
      {head}
      {goals.length === 0 ? (
        <Card withBorder padding="lg">
          <Text c="dimmed" ta="center">
            오늘은 목표가 없습니다. 책을 등록하고 계획을 세워 보세요.
          </Text>
        </Card>
      ) : (
        goals.map((goal) => {
          return (
            <Card key={goal.id} withBorder opacity={goal.done ? 0.6 : 1}>
              <Group justify="space-between" wrap="nowrap">
                <div style={{ minWidth: 0, justifyContent: "flex-start" }}>
                  <Anchor
                    href={`/books/${goal.book.isbn}`}
                    w="100%"
                    underline="never"
                    c="inherit"
                  >
                    <Group>
                      <Text fw={700} size="lg" truncate="end">
                        {goal.book.title}
                      </Text>
                      <Text size="sm">/ {goal.book.author}</Text>
                    </Group>
                  </Anchor>
                  <Text ta="left">
                    {goal.fromPage}~{goal.toPage}쪽
                  </Text>
                </div>
                <Button
                  color={goal.done ? "gray" : "cyan"}
                  onClick={() => onToggle(goal.id)}
                  aria-pressed={goal.done}
                >
                  {goal.done ? "완료됨 " : "완료"}
                </Button>
              </Group>
            </Card>
          );
        })
      )}
    </Stack>
  );
}
