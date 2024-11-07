import { Field } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/cva/Button";
import { svaContactField } from "@/components/sva/contactField";
import { toaster } from "@/lib/utils/toast";

export const Route = createFileRoute("/contact/")({
  component: () => {
    const contactField = svaContactField();
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<FormData>();

    type FormData = {
      mail: string;
      name: string;
      subject: string;
      content: string;
    };

    const onSubmit: SubmitHandler<FormData> = (data) => {
      // eslint-disable-next-line no-console
      console.log(data);
      reset();
      toaster.success({
        id: "お問い合わせを受け付けました",
        title: "お問い合わせを受け付けました",
      });
    };

    return (
      <p.div>
        <p.div py={24}>
          <p.h1 fontSize="4xl" fontWeight="bold" textAlign="center">
            Contact
          </p.h1>
        </p.div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(onSubmit)(e);
          }}
        >
          <p.div>
            <p.div display="flex" justifyContent="center">
              <p.div>
                <p.p fontSize="xl" fontWeight="bold" pb={2}>
                  メールアドレス*
                </p.p>
                <Field.Root className={contactField.root}>
                  <Field.Input
                    className={contactField.input}
                    type="email"
                    {...register("mail", { required: true })}
                  />
                  {errors.mail != null &&
                    toaster.error({
                      id: "必須項目です",
                      title: "メールアドレスが入力されていません",
                    })}
                </Field.Root>
              </p.div>
            </p.div>
            <p.div
              display="flex"
              justifyContent="center"
              pt={{ base: 12, md: 12, xl: 24 }}
            >
              <p.div>
                <p.p fontSize="xl" fontWeight="bold" pb={2}>
                  お名前*
                </p.p>
                <Field.Root className={contactField.root}>
                  <Field.Input
                    className={contactField.input}
                    type="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name != null &&
                    toaster.error({
                      id: "必須項目です",
                      title: "名前が入力されていません",
                    })}
                </Field.Root>
              </p.div>
            </p.div>
            <p.div
              display="flex"
              justifyContent="center"
              pt={{ base: 12, md: 12, xl: 24 }}
            >
              <p.div>
                <p.p fontSize="xl" fontWeight="bold" pb={2}>
                  件名*
                </p.p>
                <Field.Root className={contactField.root}>
                  <Field.Input
                    className={contactField.input}
                    {...register("subject", { required: true })}
                  />
                  {errors.subject != null &&
                    toaster.error({
                      id: "必須項目です",
                      title: "件名が入力されていません",
                    })}
                </Field.Root>
              </p.div>
            </p.div>
            <p.div
              display="flex"
              justifyContent="center"
              pt={{ base: 12, md: 12, xl: 24 }}
            >
              <p.div>
                <p.p fontSize="xl" fontWeight="bold" pb={2}>
                  本文*
                </p.p>
                <Field.Root className={contactField.root}>
                  <Field.Textarea
                    className={contactField.textarea}
                    {...register("content", { required: true })}
                  />
                  {errors.content != null &&
                    toaster.error({
                      id: "必須項目です",
                      title: "本文が入力されていません",
                    })}
                </Field.Root>
              </p.div>
            </p.div>
            <p.div alignContent="center" py={24}>
              <p.div display="flex" justifyContent="center">
                <Button fontSize="2xl" type="submit">
                  送信
                </Button>
              </p.div>
            </p.div>
          </p.div>
        </form>
      </p.div>
    );
  },
});
