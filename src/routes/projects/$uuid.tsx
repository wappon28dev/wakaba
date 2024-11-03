import { createFileRoute } from "@tanstack/react-router";
import { ResultAsync } from "neverthrow";
import { ProjectDetail } from "./-components/ProjectDetail";
import { ErrorScreen } from "@/components/ErrorScreen";
import { Loading } from "@/components/Loading";
import { Expanded } from "@/components/cva/Expanded";
import { Project } from "@/lib/classes/project";
import {
  type TableBrandedId,
  type TableError,
  type TableSchemaReferencedOf,
  type TableSchemaRelationOf,
} from "@/types/table";

type ProjectData<T = Project> = {
  project: T;
  relation: TableSchemaRelationOf<T>;
  referenced: TableSchemaReferencedOf<T>;
};

export const Route = createFileRoute("/projects/$uuid")({
  loader: async ({ params }): Promise<ProjectData> => {
    const { uuid } = params;
    const projectId = uuid as TableBrandedId<Project>;

    const project = Project.factories.from(projectId);
    return (
      await project.andThen((pj) =>
        ResultAsync.combine([pj.resolveRelation(), pj.resolveReferenced()]).map(
          ([relation, referenced]) => ({
            project: pj,
            relation,
            referenced,
          }),
        ),
      )
    ).match(
      (d) => d,
      (e) => {
        throw new Error(e.message, { cause: e });
      },
    );
  },
  errorComponent: ({ error }) => {
    const { cause } = error as Error & { cause: TableError };
    // eslint-disable-next-line no-console
    console.error(cause);

    return (
      <Expanded items="center">
        <ErrorScreen error={error} title="プロジェクトの読み込み" />
      </Expanded>
    );
  },
  pendingComponent: () => (
    <Expanded items="center">
      <Loading>プロジェクトを読み込み中…</Loading>
    </Expanded>
  ),
  component: () => {
    const params = Route.useParams();
    return (
      <Expanded>
        <ProjectDetail params={params} />
      </Expanded>
    );
  },
});
