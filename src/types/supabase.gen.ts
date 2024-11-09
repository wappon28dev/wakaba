export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      categories: {
        Row: {
          category_id: string;
          created_at: string;
          description: string | null;
          name: string;
        };
        Insert: {
          category_id?: string;
          created_at?: string;
          description?: string | null;
          name: string;
        };
        Update: {
          category_id?: string;
          created_at?: string;
          description?: string | null;
          name?: string;
        };
        Relationships: [];
      };
      comments: {
        Row: {
          body: string;
          comment_id: string;
          created_at: string;
          project_id: string;
          user_id: string;
        };
        Insert: {
          body: string;
          comment_id?: string;
          created_at?: string;
          project_id: string;
          user_id: string;
        };
        Update: {
          body?: string;
          comment_id?: string;
          created_at?: string;
          project_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "comments_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["project_id"];
          },
          {
            foreignKeyName: "comments_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      fruits: {
        Row: {
          amount_of_money: number;
          created_at: string;
          description: string;
          fruit_id: string;
          key_visual: string | null;
          name: string;
          project_id: string;
          sponsor_id: string;
        };
        Insert: {
          amount_of_money: number;
          created_at?: string;
          description: string;
          fruit_id?: string;
          key_visual?: string | null;
          name: string;
          project_id: string;
          sponsor_id: string;
        };
        Update: {
          amount_of_money?: number;
          created_at?: string;
          description?: string;
          fruit_id?: string;
          key_visual?: string | null;
          name?: string;
          project_id?: string;
          sponsor_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fruits_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["project_id"];
          },
          {
            foreignKeyName: "fruits_sponsor_id_fkey";
            columns: ["sponsor_id"];
            isOneToOne: false;
            referencedRelation: "sponsors";
            referencedColumns: ["sponsor_id"];
          },
        ];
      };
      pledges: {
        Row: {
          amount_of_money: number;
          created_at: string;
          pledges_id: string;
          project_id: string;
          sower_id: string;
        };
        Insert: {
          amount_of_money: number;
          created_at?: string;
          pledges_id?: string;
          project_id: string;
          sower_id: string;
        };
        Update: {
          amount_of_money?: number;
          created_at?: string;
          pledges_id?: string;
          project_id?: string;
          sower_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pledges_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["project_id"];
          },
          {
            foreignKeyName: "pledges_sower_id_fkey";
            columns: ["sower_id"];
            isOneToOne: false;
            referencedRelation: "sowers";
            referencedColumns: ["sower_id"];
          },
        ];
      };
      projects: {
        Row: {
          category_id: string;
          created_at: string;
          deadline: string;
          description: string;
          key_visual: string | null;
          name: string;
          project_id: string;
          territory_id: string;
        };
        Insert: {
          category_id: string;
          created_at?: string;
          deadline: string;
          description: string;
          key_visual?: string | null;
          name: string;
          project_id?: string;
          territory_id: string;
        };
        Update: {
          category_id?: string;
          created_at?: string;
          deadline?: string;
          description?: string;
          key_visual?: string | null;
          name?: string;
          project_id?: string;
          territory_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "projects_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["category_id"];
          },
          {
            foreignKeyName: "projects_territory_id_fkey";
            columns: ["territory_id"];
            isOneToOne: false;
            referencedRelation: "territories";
            referencedColumns: ["territory_id"];
          },
        ];
      };
      reports: {
        Row: {
          body: string;
          created_at: string;
          key_visual: string | null;
          project_id: string;
          report_id: string;
          sponsor_id: string;
          title: string;
        };
        Insert: {
          body: string;
          created_at?: string;
          key_visual?: string | null;
          project_id: string;
          report_id?: string;
          sponsor_id: string;
          title: string;
        };
        Update: {
          body?: string;
          created_at?: string;
          key_visual?: string | null;
          project_id?: string;
          report_id?: string;
          sponsor_id?: string;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "reports_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["project_id"];
          },
          {
            foreignKeyName: "reports_sponsor_id_fkey";
            columns: ["sponsor_id"];
            isOneToOne: false;
            referencedRelation: "sponsors";
            referencedColumns: ["sponsor_id"];
          },
        ];
      };
      seeds: {
        Row: {
          category_id: string;
          created_at: string;
          description: string | null;
          location: unknown;
          seed_id: string;
          sower_id: string;
        };
        Insert: {
          category_id: string;
          created_at?: string;
          description?: string | null;
          location: unknown;
          seed_id?: string;
          sower_id: string;
        };
        Update: {
          category_id?: string;
          created_at?: string;
          description?: string | null;
          location?: unknown;
          seed_id?: string;
          sower_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "seeds_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["category_id"];
          },
          {
            foreignKeyName: "seeds_sower_id_fkey";
            columns: ["sower_id"];
            isOneToOne: false;
            referencedRelation: "sowers";
            referencedColumns: ["sower_id"];
          },
        ];
      };
      sowers: {
        Row: {
          birthday: string;
          created_at: string;
          name: string;
          sower_id: string;
          user_id: string;
        };
        Insert: {
          birthday: string;
          created_at?: string;
          name: string;
          sower_id?: string;
          user_id: string;
        };
        Update: {
          birthday?: string;
          created_at?: string;
          name?: string;
          sower_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "users_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      sponsor_data: {
        Row: {
          created_at: string;
          location: unknown;
          motivation: string;
          project_id: string;
          sponsor_id: string;
          target_amount_of_money: number;
        };
        Insert: {
          created_at?: string;
          location: unknown;
          motivation: string;
          project_id: string;
          sponsor_id: string;
          target_amount_of_money: number;
        };
        Update: {
          created_at?: string;
          location?: unknown;
          motivation?: string;
          project_id?: string;
          sponsor_id?: string;
          target_amount_of_money?: number;
        };
        Relationships: [
          {
            foreignKeyName: "sponsor_data_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: true;
            referencedRelation: "projects";
            referencedColumns: ["project_id"];
          },
          {
            foreignKeyName: "sponsor_data_sponsor_id_fkey";
            columns: ["sponsor_id"];
            isOneToOne: false;
            referencedRelation: "sponsors";
            referencedColumns: ["sponsor_id"];
          },
        ];
      };
      sponsors: {
        Row: {
          created_at: string;
          description: string | null;
          icon: string;
          name: string;
          sponsor_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          icon: string;
          name: string;
          sponsor_id?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          icon?: string;
          name?: string;
          sponsor_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "sponsors_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      territories: {
        Row: {
          created_at: string;
          territory_id: string;
          zone: unknown;
        };
        Insert: {
          created_at?: string;
          territory_id?: string;
          zone: unknown;
        };
        Update: {
          created_at?: string;
          territory_id?: string;
          zone?: unknown;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_seeds_in_territory: {
        Args: {
          territory_id: string;
        };
        Returns: Array<{
          category_id: string;
          created_at: string;
          description: string | null;
          location: unknown;
          seed_id: string;
          sower_id: string;
        }>;
      };
      get_territories_within_seed: {
        Args: {
          seed_id: string;
        };
        Returns: Array<{
          created_at: string;
          territory_id: string;
          zone: unknown;
        }>;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
