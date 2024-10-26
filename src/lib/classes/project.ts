import { ResultAsync } from "neverthrow";
import { Category } from "./category";
import { Fruit } from "./project/fruit";
import { Pledge } from "./project/pledge";
import { Report } from "./project/report";
import { SponsorData } from "./project/sponsor-data";
import { Territory } from "./territory";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type TableSchemaOf,
  type TableConfig,
  type Table2schema,
  type TableResult,
} from "@/types/table";
import { type Override } from "@/types/utils";

const config = {
  className: "Project",
  tableName: "projects",
  primaryKeyName: "project_id",
  displayName: "プロジェクト",
} as const satisfies TableConfig;

type Schema = Table2schema<typeof config>;
type SchemaResolvedData = Schema & {
  category: TableSchemaOf<Category>;
  territory: TableSchemaOf<Territory>;
};
type SchemaResolved = Override<
  SchemaResolvedData,
  {
    category: Category;
    territory: Territory;
  }
>;

type ProjectRelated = {
  sponsorData: SponsorData;
  reports: Report[];
  fruits: Fruit[];
  pledges: Pledge[];
  comments: Comment[];
};

type ProjectStatus = "seed" | "tsubomi" | "wakaba" | "tree" | "hana";

export class Project extends Table<typeof config, Schema, SchemaResolved> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = Table.getFactories(Project, config);

  public getStatus(): ProjectStatus {
    throw new Error(`Not implemented: ${this.config.className}.getStatus`);
  }

  public override resolveRelations(): TableResult<SchemaResolved> {
    return ResultAsync.fromSafePromise(
      supabase
        .from("projects")
        .select("*, category:categories(*), territory:territories(*)")
        .eq(config.primaryKeyName, this.data.project_id)
        .returns<SchemaResolvedData>()
        .single(),
    )
      .andThen(this.transform<SchemaResolvedData>)
      .map((data) => ({
        ...data,
        category: new Category(data.category),
        territory: new Territory(data.territory),
      }))
      .mapErr(this.transformError("resolveRelations"));
  }

  public resolveReferenced(): TableResult<ProjectRelated> {
    const sponsorData = ResultAsync.fromSafePromise(
      supabase
        .from("sponsor_data")
        .select("*")
        .eq("project_id", this.data.project_id)
        .single(),
    )
      .andThen(this.transform)
      .map((data) => new SponsorData(data as TableSchemaOf<SponsorData>))
      .mapErr(this.transformError("resolveReferenced"));

    const others = ResultAsync.fromSafePromise(
      supabase
        .from("projects")
        .select(
          `
          reports(*),
          fruits(*),
          pledges(*),
          comments(*)
        `,
        )
        .eq("project_id", this.data.project_id)
        .single(),
    )
      .andThen(this.transform)
      .map(({ reports, fruits, pledges, comments }) => ({
        reports: reports.map((r) => new Report(r as TableSchemaOf<Report>)),
        fruits: fruits.map((f) => new Fruit(f as TableSchemaOf<Fruit>)),
        pledges: pledges.map((p) => new Pledge(p as TableSchemaOf<Pledge>)),
        comments: comments.map((c) => new Comment(c as TableSchemaOf<Comment>)),
      }))
      .mapErr(this.transformError("resolveReferenced"));

    return ResultAsync.combine([sponsorData, others]).map(([s, o]) => ({
      sponsorData: s,
      ...o,
    }));
  }
}
