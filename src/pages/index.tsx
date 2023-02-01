import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { AppShell, Box, Title } from "@mantine/core";

export default function Home() {
  return (
    <AppShell
      padding="md"
      header={<Header />}
      navbar={<Sidebar />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Box mx="auto" className="max-w-[32rem]">
        <Title order={2} mt={8} mb={16}>
          トップページ（工事中）
        </Title>
      </Box>
    </AppShell>
  );
}
