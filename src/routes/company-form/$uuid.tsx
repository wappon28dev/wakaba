import { Dialog, Portal, Field } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { HStack, styled as p, VStack } from "panda/jsx";

import {
  projectsData,
  sponsorDataData,
  sponsorsData,
  seedsData,
} from "@/assets/data";
import { svaDialog } from "@/components/sva/dialog";
import { svaTextArea } from "@/components/sva/textArea";

type needs = {
  amount_of_money: number;
  created_at: string;
  deadline: string;
  key_visual: string;
  name: string;
  project_id: string;
  status: "wakaba" | "tsubomi" | "hana";
  sponsor_data_id: string;
  description: string;
  location: {
    lat: number;
    lon: number;
  };
  sponsor:
    | {
        created_at: string;
        description: string | null;
        icon: string;
        name: string;
        sponsor_id: string;
        user_id: string;
      }
    | undefined;
  sponsor_data:
    | {
        target_amount_of_money: number;
        location?: {
          lat: number;
          lon: number;
        };
        motivation: string | undefined;
        reports?:
          | Array<{
              body: string;
              key_visual: string | null;
              report_id: string;
              title: string;
              created_at: string;
            }>
          | undefined;
        fruits?:
          | Array<{
              description: string;
              key_visual: string | null;
              name: string;
            }>
          | undefined;
      }
    | undefined;
  seeds:
    | Array<{
        category_id: string;
        created_at: string;
        description: string | null;
        location: unknown;
        seed_id: string;
        sower_id: string;
      }>
    | undefined;
};
const textArea = svaTextArea();
function GridDetailInfo({ data }: { data: needs }): JSX.Element {
  return (
    <div>
      <p.img
        height={200}
        objectFit="cover"
        objectPosition="0 100%"
        src={data.key_visual}
        width="100%"
      />
      <p.h1 fontSize="4xl" fontWeight="bold" p={7}>
        {data.name}
      </p.h1>
      <p.div px={10}>
        <p.p fontSize="xl" pb={5}>
          プロジェクトの説明
        </p.p>
        <Field.Root className={textArea.root}>
          <Field.Textarea />
        </Field.Root>
      </p.div>
    </div>
  );
}

export const Route = createFileRoute("/company-form/$uuid")({
  component: () => {
    const { uuid } = Route.useParams();
    const dialog = svaDialog();
    const data2 = projectsData.find((_) => _.project_id === uuid);
    if (data2 === undefined) throw new Error("No data2 found");

    const data3 = sponsorDataData.find(
      (_) => _.project_id === data2.project_id,
    );

    const data4 = sponsorsData.find((_) => _.sponsor_id === data3?.sponsor_id);

    const data5 = data2.seed_id.map((s) => {
      const seed = seedsData.find((_) => _.seed_id === String(s));
      return seed;
    });
    if (data5 === undefined) throw new Error("No data5 found");
    const data: needs = {
      amount_of_money: data2.amount_of_money,
      created_at: data2.created_at,
      deadline: data2.deadline,
      key_visual: data2.key_visual ?? "",
      name: data2.name,
      project_id: data2.project_id,
      sponsor_data_id: "1",
      status:
        // eslint-disable-next-line no-nested-ternary
        data2.project_id === "1"
          ? "tsubomi"
          : data2.project_id === "7"
            ? "hana"
            : "wakaba",
      description: data2.description,
      location: data2.location,
      sponsor: data4,
      sponsor_data: {
        target_amount_of_money: data3?.target_amount_of_money ?? 0,
        location: data2.location,
        motivation: data3?.motivation ?? undefined,
        reports: data3?.reports ?? undefined,
        fruits: data3?.fruits ?? undefined,
      },
      seeds: data5.map((s) => ({
        category_id: s?.category_id ?? "",
        created_at: s?.created_at ?? "",
        description: s?.description ?? "",
        location: s?.location ?? {},
        seed_id: s?.seed_id ?? "",
        sower_id: s?.sower_id ?? "",
      })),
    };

    return (
      <p.div>
        <GridDetailInfo data={data} />
        <Dialog.Root>
          <Dialog.Trigger className={dialog.trigger}>
            <HStack
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.1s",
              }}
              alignContent="center"
              bg="wkb.primary"
              color="wkb-neutral.0"
              display="flex"
              justify="center"
              mb={4}
              p={2}
              rounded="md"
            >
              <VStack alignItems="start" gap={0}>
                <p.p fontWeight="bold">変更を適用</p.p>
              </VStack>
            </HStack>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop className={dialog.backdrop} />
            <Dialog.Positioner>
              <Dialog.Content className={dialog.content}>
                <HStack
                  alignContent="center"
                  display="flex"
                  justify="center"
                  maxH="70%"
                  maxW="70%"
                  minH={300}
                  minW={300}
                  rounded="md"
                >
                  <p.img rounded="full" w={50} />
                  <VStack alignItems="start" gap={0}>
                    <p.p fontWeight="bold">{data.sponsor?.name}</p.p>
                    <p.div px={2}>
                      <p.p fontSize="xs">{data.sponsor_data?.motivation}</p.p>
                    </p.div>
                  </VStack>
                </HStack>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </p.div>
    );
  },
});
