import { Field } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useForm } from "react-hook-form";
import { Button } from "@/components/cva/Button";
import { svaContactField } from "@/components/sva/contactField";

export const Route = createFileRoute("/contact/")({
  component: () => {
    const contactField = svaContactField();
    const { register } = useForm<FormData>();

    type FormData = {
      mail: string;
      name: string;
      subject: string;
      content: string;
    };

    return (
      <p.div>
        <p.div py={24}>
          <p.h1 fontSize="4xl" fontWeight="bold" textAlign="center">
            Contact
          </p.h1>
        </p.div>
        <form>
          <p.div>
            <p.div display="flex" justifyContent="center">
              <p.div>
                <p.p fontSize="xl" fontWeight="bold" pb={2}>
                  メールアドレス*
                </p.p>
                <Field.Root className={contactField.root}>
                  <Field.Input
                    className={contactField.input}
                    {...register("mail", { required: true })}
                  />
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
                    {...register("name", { required: true })}
                  />
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
                </Field.Root>
              </p.div>
            </p.div>
            <p.div alignContent="center" py={24}>
              <p.div display="flex" justifyContent="center">
                <Button type="submit">送信</Button>
              </p.div>
            </p.div>
          </p.div>
        </form>
      </p.div>
    );
  },
});
