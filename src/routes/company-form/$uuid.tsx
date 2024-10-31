import { Dialog, Portal, Field, DatePicker, NumberInput } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { HStack, styled as p } from "panda/jsx";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import {
  projectsData,
  sponsorDataData,
  sponsorsData,
  seedsData,
} from "@/assets/data";
import { Button } from "@/components/cva/Button";
import { svaDatePicker } from "@/components/sva/datePicker";
import { svaFormDialog } from "@/components/sva/formDialog";
import { svaNumberInput } from "@/components/sva/numberInput";
import { svaTextArea } from "@/components/sva/textArea";
import { toaster } from "@/lib/utils/toast";

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
const datePicker = svaDatePicker();
const numberInput = svaNumberInput();

export const Route = createFileRoute("/company-form/$uuid")({
  component: () => {
    const { uuid } = Route.useParams();
    const dialog = svaFormDialog();
    const data2 = projectsData.find((_) => _.project_id === uuid);
    if (data2 === undefined) throw new Error("No data found");

    const data3 = sponsorDataData.find(
      (_) => _.project_id === data2.project_id,
    );

    const data4 = sponsorsData.find((_) => _.sponsor_id === data3?.sponsor_id);

    const data5 = data2.seed_id.map((s) => {
      const seed = seedsData.find((_) => _.seed_id === String(s));
      return seed;
    });
    if (data5 === undefined) throw new Error("No seeds found");

    const data: needs = {
      amount_of_money: data2.amount_of_money,
      created_at: data2.created_at,
      deadline: data2.deadline,
      key_visual: data2.key_visual ?? "",
      name: data2.name,
      project_id: data2.project_id,
      sponsor_data_id: "1",
      status: (() => {
        if (data2.project_id === "1") return "tsubomi";
        if (data2.project_id === "7") return "hana";
        return "wakaba";
      })(),
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

    type CompanyForm = {
      description: string;
      description_1000: string;
      description_3000: string;
      description_5000: string;
      title_1000: string;
      title_3000: string;
      title_5000: string;
      deadline: string;
      location: string;
      motivation: string;
      amountOfMoney: number;
    };
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<CompanyForm>();

    const [formData, setFormData] = useState<CompanyForm>({
      description: "",
      deadline: "",
      location: "",
      motivation: "",
      amountOfMoney: 0,
      title_1000: "",
      title_3000: "",
      title_5000: "",
      description_1000: "",
      description_3000: "",
      description_5000: "",
    });

    let triggerDisable = true;
    if (
      formData.description !== "" &&
      formData.deadline !== "" &&
      formData.location !== "" &&
      formData.motivation !== "" &&
      formData.amountOfMoney !== 0 &&
      formData.title_1000 !== "" &&
      formData.title_3000 !== "" &&
      formData.title_5000 !== "" &&
      formData.description_1000 !== "" &&
      formData.description_3000 !== "" &&
      formData.description_5000 !== ""
    ) {
      triggerDisable = false;
      console.log(formData);
    }

    const errorMessages = {
      description: "プロジェクトの説明を入力してください",
      deadline: "募集終了時期を入力してください",
      location: "建築予定地を入力してください",
      motivation: "モチベーションを入力してください",
      title_1000: "タイトルを入力してください",
      title_3000: "タイトルを入力してください",
      title_5000: "タイトルを入力してください",
      description_1000: "説明を入力してください",
      description_3000: "説明を入力してください",
      description_5000: "説明を入力してください",
      amountOfMoney: "目標金額を入力してください",
    };
    Object.entries(errors).forEach(([key, value]) => {
      if (value != null || value !== undefined || value !== "" || value !== 0) {
        toaster.error({
          id: key,
          title: "エラー",
          description: errorMessages[key as keyof typeof errorMessages],
        });
        triggerDisable = true;
      }
    });

    const onSubmit: SubmitHandler<CompanyForm> = (temp: CompanyForm) => {
      setFormData(temp);

      // eslint-disable-next-line no-console
      console.log(temp);
      // eslint-disable-next-line no-console
      console.log(formData);
    };

    return (
      <p.div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(onSubmit)(e);
          }}
        >
          <p.div background="white">
            <p.img
              height={200}
              objectFit="cover"
              objectPosition="0 100%"
              src={data.key_visual}
              width="100%"
            />
            <p.div px={20}>
              <p.h1 fontSize="4xl" fontWeight="bold" py={5}>
                {data.name}
              </p.h1>

              <p.div px={5}>
                <p.div py={5}>
                  <p.p display="inline" fontSize="xl" fontWeight="bold">
                    プロジェクトの説明
                  </p.p>
                  <p.p
                    color="red.500"
                    display="inline"
                    fontSize="xl"
                    fontWeight="none"
                    pl={1}
                  >
                    ※
                  </p.p>
                  <Field.Root className={textArea.root}>
                    <Field.Textarea
                      className={textArea.textarea}
                      {...register("description", { required: true })}
                    />
                  </Field.Root>
                </p.div>
                <p.div
                  display="grid"
                  gap={5}
                  gridTemplateColumns={{
                    md: "repeat(1, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                >
                  <p.div py={5}>
                    <p.p
                      display="inline"
                      fontSize="xl"
                      fontWeight="bold"
                      pt={5}
                    >
                      募集終了時期
                    </p.p>
                    <p.p
                      color="red.500"
                      display="inline"
                      fontSize="xl"
                      fontWeight="none"
                      pl={1}
                    >
                      ※
                    </p.p>

                    <DatePicker.Root className={datePicker.root}>
                      <DatePicker.Control className={datePicker.control}>
                        <DatePicker.Input
                          className={datePicker.input}
                          {...register("deadline", {
                            required: true,
                          })}
                        />
                        <DatePicker.Trigger className={datePicker.trigger}>
                          📅
                        </DatePicker.Trigger>
                        <DatePicker.ClearTrigger
                          className={datePicker.clearTrigger}
                        >
                          Clear
                        </DatePicker.ClearTrigger>
                      </DatePicker.Control>
                      <Portal>
                        <DatePicker.Positioner
                          className={datePicker.positioner}
                        >
                          <DatePicker.Content className={datePicker.content}>
                            <DatePicker.YearSelect
                              className={datePicker.yearSelect}
                            />
                            <DatePicker.MonthSelect
                              className={datePicker.monthSelect}
                            />
                            <DatePicker.View
                              className={datePicker.view}
                              view="day"
                            >
                              <DatePicker.Context>
                                {(datePickers) => (
                                  <DatePicker.Table
                                    className={datePicker.table}
                                  >
                                    <DatePicker.TableHead
                                      className={datePicker.tableHead}
                                    >
                                      <DatePicker.TableRow
                                        className={datePicker.tableRow}
                                      >
                                        {datePickers.weekDays.map((weekDay) => (
                                          <DatePicker.TableHeader
                                            key={weekDay.short}
                                            className={datePicker.tableHeader}
                                          >
                                            {weekDay.short}
                                          </DatePicker.TableHeader>
                                        ))}
                                      </DatePicker.TableRow>
                                    </DatePicker.TableHead>
                                    <DatePicker.TableBody
                                      className={datePicker.tableBody}
                                    >
                                      {datePickers.weeks.map((week) => (
                                        <DatePicker.TableRow
                                          key={week[0]?.day ?? "unknown"}
                                          className={datePicker.tableRow}
                                        >
                                          {week.map((day) => (
                                            <DatePicker.TableCell
                                              key={day.day}
                                              className={datePicker.tableCell}
                                              value={day}
                                            >
                                              <DatePicker.TableCellTrigger
                                                className={
                                                  datePicker.tableCellTrigger
                                                }
                                              >
                                                {day.day}
                                              </DatePicker.TableCellTrigger>
                                            </DatePicker.TableCell>
                                          ))}
                                        </DatePicker.TableRow>
                                      ))}
                                    </DatePicker.TableBody>
                                  </DatePicker.Table>
                                )}
                              </DatePicker.Context>
                            </DatePicker.View>
                            <DatePicker.View view="month">
                              <DatePicker.Context>
                                {(datePickers) => (
                                  <DatePicker.Table
                                    className={datePicker.table}
                                  >
                                    <DatePicker.TableBody
                                      className={datePicker.tableBody}
                                    >
                                      {datePickers
                                        .getMonthsGrid({
                                          columns: 4,
                                          format: "short",
                                        })
                                        .map((months) => (
                                          <DatePicker.TableRow
                                            key={months[0]?.label ?? "unknown"}
                                            className={datePicker.tableRow}
                                          >
                                            {months.map((month) => (
                                              <DatePicker.TableCell
                                                key={month.value}
                                                className={datePicker.tableCell}
                                                value={month.value}
                                              >
                                                <DatePicker.TableCellTrigger
                                                  className={
                                                    datePicker.tableCellTrigger
                                                  }
                                                >
                                                  {month.label}
                                                </DatePicker.TableCellTrigger>
                                              </DatePicker.TableCell>
                                            ))}
                                          </DatePicker.TableRow>
                                        ))}
                                    </DatePicker.TableBody>
                                  </DatePicker.Table>
                                )}
                              </DatePicker.Context>
                            </DatePicker.View>
                            <DatePicker.View
                              className={datePicker.view}
                              view="year"
                            >
                              <DatePicker.Context>
                                {(datePickers) => (
                                  <DatePicker.Table
                                    className={datePicker.table}
                                  >
                                    <DatePicker.TableBody
                                      className={datePicker.tableBody}
                                    >
                                      {datePickers
                                        .getYearsGrid({ columns: 4 })
                                        .map((years) => (
                                          <DatePicker.TableRow
                                            key={years[0]?.label ?? "unknown"}
                                            className={datePicker.tableRow}
                                          >
                                            {years.map((year) => (
                                              <DatePicker.TableCell
                                                key={year.value}
                                                className={datePicker.tableCell}
                                                value={year.value}
                                              >
                                                <DatePicker.TableCellTrigger
                                                  className={
                                                    datePicker.tableCellTrigger
                                                  }
                                                >
                                                  {year.label}
                                                </DatePicker.TableCellTrigger>
                                              </DatePicker.TableCell>
                                            ))}
                                          </DatePicker.TableRow>
                                        ))}
                                    </DatePicker.TableBody>
                                  </DatePicker.Table>
                                )}
                              </DatePicker.Context>
                            </DatePicker.View>
                          </DatePicker.Content>
                        </DatePicker.Positioner>
                      </Portal>
                    </DatePicker.Root>
                  </p.div>
                  <p.div py={5}>
                    <p.p display="inline" fontSize="xl" fontWeight="bold">
                      建築予定地
                    </p.p>
                    <p.p
                      color="red.500"
                      display="inline"
                      fontSize="xl"
                      fontWeight="none"
                      pl={1}
                    >
                      ※
                    </p.p>
                    <Field.Root className={textArea.root}>
                      <Field.Input
                        className={textArea.input}
                        {...register("location", { required: true })}
                      />
                    </Field.Root>
                  </p.div>
                </p.div>
                <p.div py={5}>
                  <p.p display="inline" fontSize="xl" fontWeight="bold">
                    モチベーション
                  </p.p>
                  <p.p
                    color="red.500"
                    display="inline"
                    fontSize="xl"
                    fontWeight="none"
                    pl={1}
                  >
                    ※
                  </p.p>
                  <Field.Root className={textArea.root}>
                    <Field.Textarea
                      className={textArea.textarea}
                      {...register("motivation", { required: true })}
                    />
                  </Field.Root>
                </p.div>
              </p.div>
            </p.div>
            <p.div background="wkb-neutral.100" mt={50} p={10}>
              <p.h1 display="inline" fontSize="4xl" fontWeight="bold">
                返礼品
              </p.h1>
              <p.p
                color="red.500"
                display="inline"
                fontSize="xl"
                fontWeight="none"
                pl={1}
              >
                ※
              </p.p>
              <p.div
                display="grid"
                gap={5}
                gridTemplateColumns={{
                  base: "1fr",
                  sm: "repeat(1, 1fr)",
                  md: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                  xl: "repeat(3, 1fr)",
                }}
                p={5}
                px={16}
              >
                <p.div background="white" borderRadius="md" p={4} shadow="md">
                  <p.p
                    color="wkb.primary"
                    fontSize="2xl"
                    fontWeight="bold"
                    pb={10}
                    pt={3}
                  >
                    1000円プラン
                  </p.p>
                  <p.div>
                    <p.p fontSize="md">タイトル</p.p>
                    <Field.Root className={textArea.root}>
                      <Field.Input
                        className={textArea.input}
                        {...register(`title_1000`, { required: true })}
                      />
                    </Field.Root>
                    <p.p fontSize="md" pb={2} pt={10}>
                      説明
                    </p.p>
                    <Field.Root className={textArea.root}>
                      <Field.Textarea
                        className={textArea.textarea}
                        {...register(`description_1000`, {
                          required: true,
                        })}
                      />
                    </Field.Root>
                  </p.div>
                </p.div>
                <p.div background="white" borderRadius="md" p={4} shadow="md">
                  <p.p
                    color="wkb.primary"
                    fontSize="2xl"
                    fontWeight="bold"
                    pb={10}
                    pt={3}
                  >
                    3000円プラン
                  </p.p>
                  <p.div>
                    <p.p fontSize="md">タイトル</p.p>
                    <Field.Root className={textArea.root}>
                      <Field.Input
                        className={textArea.input}
                        {...register(`title_3000`, { required: true })}
                      />
                    </Field.Root>
                    <p.p fontSize="md" pb={2} pt={10}>
                      説明
                    </p.p>
                    <Field.Root className={textArea.root}>
                      <Field.Textarea
                        className={textArea.textarea}
                        {...register(`description_3000`, {
                          required: true,
                        })}
                      />
                    </Field.Root>
                  </p.div>
                </p.div>
                <p.div background="white" borderRadius="md" p={4} shadow="md">
                  <p.p
                    color="wkb.primary"
                    fontSize="2xl"
                    fontWeight="bold"
                    pb={10}
                    pt={3}
                  >
                    5000円プラン
                  </p.p>
                  <p.div>
                    <p.p fontSize="md">タイトル</p.p>
                    <Field.Root className={textArea.root}>
                      <Field.Input
                        className={textArea.input}
                        {...register(`title_5000`, { required: true })}
                      />
                    </Field.Root>
                    <p.p fontSize="md" pb={2} pt={10}>
                      説明
                    </p.p>
                    <Field.Root className={textArea.root}>
                      <Field.Textarea
                        className={textArea.textarea}
                        {...register(`description_5000`, {
                          required: true,
                        })}
                      />
                    </Field.Root>
                  </p.div>
                </p.div>
              </p.div>
            </p.div>
            <p.div background="wkb.primary">
              <p.div px={10}>
                <p.h1
                  color="wkb.bg"
                  fontSize="4xl"
                  fontWeight="bold"
                  pb={5}
                  pt={16}
                >
                  目標金額
                </p.h1>
                <p.div pb={20} pt={12} px={16}>
                  <NumberInput.Root className={numberInput.root}>
                    <NumberInput.Input
                      className={numberInput.input}
                      {...register("amountOfMoney", {
                        required: true,
                        pattern: /^[0-9]*$/,
                      })}
                    />
                    <p.p fontSize="4xl" fontWeight="bold" pl={3} pr={5}>
                      円
                    </p.p>
                  </NumberInput.Root>
                </p.div>
              </p.div>
            </p.div>
          </p.div>

          <p.div py={20}>
            <Dialog.Root>
              <p.div display="flex" justifyContent="center">
                <Dialog.Trigger
                  className={dialog.trigger}
                  disabled={triggerDisable}
                >
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
                    <Button color="wkb-bg" fontSize="2xl" type="submit">
                      <div role="button">変更を適用</div>
                    </Button>
                  </HStack>
                </Dialog.Trigger>
              </p.div>
              <Portal>
                <Dialog.Backdrop className={dialog.backdrop} />
                <Dialog.Positioner className={dialog.positioner}>
                  <Dialog.Content className={dialog.content}>
                    {Object.entries(formData).some(
                      ([, value]) =>
                        (typeof value === "string" && value === "") ||
                        (typeof value === "number" && value === 0),
                    ) ? null : (
                      <p.div>
                        <p.h1 fontSize="2xl">以下の内容が変更されます</p.h1>

                        <p.p fontSize="xl">{formData.description}</p.p>
                        <p.p fontSize="xl">{formData.title_1000}</p.p>
                        <p.p fontSize="xl">{formData.title_3000}</p.p>
                        <p.p fontSize="xl">{formData.title_5000}</p.p>
                        <p.p fontSize="xl">{formData.description_1000}</p.p>
                        <p.p fontSize="xl">{formData.description_3000}</p.p>
                        <p.p fontSize="xl">{formData.description_5000}</p.p>
                        <p.p fontSize="xl">{formData.deadline}</p.p>
                        <p.p fontSize="xl">{formData.location}</p.p>
                        <p.p fontSize="xl">{formData.motivation}</p.p>
                        <p.p fontSize="xl">{formData.amountOfMoney}</p.p>
                        <Dialog.Trigger
                          className={dialog.trigger}
                          disabled={triggerDisable}
                        >
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
                            <Button color="wkb-bg" fontSize="2xl" type="submit">
                              <div role="button">変更を適用</div>
                            </Button>
                          </HStack>
                        </Dialog.Trigger>
                      </p.div>
                    )}
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          </p.div>
        </form>
      </p.div>
    );
  },
});
