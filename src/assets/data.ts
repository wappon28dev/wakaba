import { type DBSchema } from "@/types/supabase";

export const promptText = `
いくつかのカテゴリ分けされたプレーンテキストの意見を渡します｡
同時に複数の意見を解決する魅力的なアイデアを以下の 型に従ってデータを返してください。
descriptionにはどんなプロジェクトか､どんなことができて､将来の展望を100文字程度で記述
    \`\`\`jsonschema
{
  "type": "object",
  "properties": {
    "category_id": { "type": "string", "enum": ["休憩", "環境", "飲食", "施設", "移動", "その他"] },
    "created_at": { "type": "string", "enum": ["2024-09-22T00:00:00Z"] },
    "deadline": { "type": "string", "enum": ["2024-10-22T00:00:00Z"] },
    "description": { "type": "string" },
    "key_visual": { "type": "null" },
    "name": { "type": "string" },
    "project_id": { "type": "string" },
    "territory_id": { "type": "string","enum": ["1"] },
    "seed_id": {
      "type": "array",
      "items": { "type": "number" }
    }
  },
  "required": [
    "category_id",
    "created_at",
    "deadline",
    "description",
    "key_visual",
    "name",
    "project_id",
    "territory_id",
    "seed_id"
  ],
  "additionalProperties": false
}
\`\`\`
`;

export const categoriesData: Array<DBSchema<"categories">> = [
  {
    category_id: "1",
    name: "休憩",
    created_at: "2024-09-22T00:00:00Z",
    description: "休憩に関するカテゴリ",
  },
  {
    category_id: "2",
    name: "環境",
    created_at: "2024-09-22T00:00:00Z",
    description: "環境に関するカテゴリ",
  },
  {
    category_id: "3",
    name: "飲食",
    created_at: "2024-09-22T00:00:00Z",
    description: "飲食に関するカテゴリ",
  },
  {
    category_id: "4",
    name: "施設",
    created_at: "2024-09-22T00:00:00Z",
    description: "施設に関するカテゴリ",
  },
  {
    category_id: "5",
    name: "移動",
    created_at: "2024-09-22T00:00:00Z",
    description: "移動に関するカテゴリ",
  },
  {
    category_id: "6",
    name: "その他",
    created_at: "2024-09-22T00:00:00Z",
    description: "その他のカテゴリ",
  },
];

export const projectsData: Array<
  DBSchema<"projects"> & {
    amount_of_money: number;
    seed_id: number[];
    location: { lon: number; lat: number };
  }
> = [
  {
    category_id: "1",
    created_at: "2024-09-22T00:00:00Z",
    deadline: "2024-10-22T00:00:00Z",
    description:
      "屋上庭園を併設し、多様な休憩に対応できる複合施設。ヨガや読書スペース、カフェコーナーを設置。自然光を取り入れた開放的な空間設計。",
    key_visual: null,
    name: "憩いの丘",
    project_id: "1",
    territory_id: "1",
    seed_id: [1, 2, 3],
    amount_of_money: 12000,
    location: { lon: 136.886326, lat: 35.172757 },
  },
  {
    category_id: "1",
    created_at: "2024-09-22T00:00:00Z",
    deadline: "2024-10-22T00:00:00Z",
    description:
      "緑豊かな庭園の中に、コンパクトなブックカフェを設置。ハンモックやソファなど、ゆったりと読書を楽しめるスペースを多数用意。",
    key_visual: null,
    name: "本の森カフェ",
    project_id: "2",
    territory_id: "1",
    seed_id: [2, 4],
    amount_of_money: 1000,
    location: { lon: 136.886326, lat: 35.172757 },
  },
  {
    category_id: "1",
    created_at: "2024-09-22T00:00:00Z",
    deadline: "2024-10-22T00-00-00Z",
    description:
      "自然の音に包まれ、瞑想やヨガに集中できる静かなスペース。人工芝や木陰など、自然素材を取り入れた癒やしの空間。",
    key_visual: null,
    name: "静寂の庭",
    project_id: "3",
    territory_id: "1",
    seed_id: [3, 5, 6],
    amount_of_money: 2000,
    location: { lon: 136.886326, lat: 35.172757 },
  },
  {
    category_id: "3",
    created_at: "2024-09-22T00:00:00Z",
    deadline: "2024-10-22T00:00:00Z",
    description:
      "地元の農産物を使い、安価で美味しい食事を提供するレストランをオープンする",
    key_visual: null,
    name: "地元食材レストラン",
    project_id: "4",
    territory_id: "1",
    seed_id: [7, 8],
    amount_of_money: 3000,
    location: { lon: 136.886326, lat: 35.172757 },
  },
  {
    category_id: "6",
    created_at: "2024-09-22T00:00:00Z",
    deadline: "2024-10-22T00:00:00Z",
    description:
      "若者向けの起業支援センターを設立し、起業家育成と地域経済の活性化を促進します。",
    key_visual: null,
    name: "若者向け起業支援センター設立",
    project_id: "5",
    territory_id: "1",
    seed_id: [9, 16],
    amount_of_money: 24000,
    location: { lon: 136.886326, lat: 35.172757 },
  },
  {
    category_id: "3",
    created_at: "2024-09-22T00:00:00Z",
    deadline: "2024-10-22T00:00:00Z",
    description:
      "地元の高齢者が運営する昔ながらの食堂をオープンし、地域の味を守り、世代間交流を促進します。",
    key_visual: null,
    name: "昔ながらの食堂",
    project_id: "6",
    territory_id: "1",
    seed_id: [10, 12, 15],
    amount_of_money: 53000,
    location: { lon: 136.886326, lat: 35.172757 },
  },
  {
    category_id: "2",
    created_at: "2024-09-22T00:00:00Z",
    deadline: "2024-10-22T00:00:00Z",
    description:
      "空き家をリノベーションし、コミュニティスペースとして活用することで、地域交流の活性化を目指します。",
    key_visual: null,
    name: "空き家活用コミュニティスペース",
    project_id: "7",
    territory_id: "1",
    seed_id: [11, 14, 18],
    amount_of_money: 12000,
    location: { lon: 136.886326, lat: 35.172757 },
  },
  {
    category_id: "3",
    created_at: "2024-09-22T00:00:00Z",
    deadline: "2024-10-22T00:00:00Z",
    description:
      "地元の食材を使った料理教室を定期的に開催し、食文化の継承と地域産業の活性化を目指します。",
    key_visual: null,
    name: "地元食材料理教室",
    project_id: "8",
    territory_id: "1",
    seed_id: [10, 12],
    amount_of_money: 32000,
    location: { lon: 136.886326, lat: 35.172757 },
  },
  {
    category_id: "4",
    created_at: "2024-09-22T00:00:00Z",
    deadline: "2024-10-22T00:00:00Z",
    description:
      "地元の農家から直接新鮮な食材を仕入れ地域特産品を販売する、賑わいのあるマルシェ。",
    key_visual: null,
    name: "地域特産品マルシェ",
    project_id: "9",
    territory_id: "1",
    seed_id: [13, 17],
    amount_of_money: 10000,
    location: { lon: 136.886326, lat: 35.172757 },
  },
];

export const sponsorDataData: Array<
  DBSchema<"sponsor_data"> & {
    reports?: Array<DBSchema<"reports">>;
    fruits: Array<DBSchema<"fruits">>;
  }
> = [
  {
    created_at: "2024-09-22T00:00:00Z",
    location: { lon: 136.886326, lat: 35.172757 },
    sponsor_id: "1",
    motivation: "スポンサー1のモチベーション",
    project_id: "7",
    target_amount_of_money: 10000,
    reports: [
      {
        body: "スポンサー1のレポート",
        created_at: "2024-09-22T00:00:00Z",
        key_visual: "https://via.placeholder.com/150",
        project_id: "1",
        report_id: "1",
        sponsor_id: "1",
        title: "スポンサー1のレポート",
      },
    ],
    fruits: [
      {
        fruit_id: "1",
        name: "りんご",
        created_at: "2024-09-22T00:00:00Z",
        description: "りんごの説明",
        amount_of_money: 1000,
        key_visual: "https://via.placeholder.com/150",
        project_id: "1",
        sponsor_id: "1",
      },
      {
        fruit_id: "2",
        name: "バナナ",
        created_at: "2024-09-22T00:00:00Z",
        description: "バナナの説明",
        amount_of_money: 2000,
        key_visual: "https://via.placeholder.com/150",
        project_id: "1",
        sponsor_id: "1",
      },
      {
        fruit_id: "3",
        name: "いちご",
        created_at: "2024-09-22T00:00:00Z",
        description: "いちごの説明",
        amount_of_money: 3000,
        key_visual: "https://via.placeholder.com/150",
        project_id: "1",
        sponsor_id: "1",
      },
    ],
    },
    {
      created_at: "2024-09-22T00:00:00Z",
      location: { lon: 136.886326, lat: 35.172757 },
      sponsor_id: "1",
      motivation: "スポンサー1のモチベーション",
      project_id: "1",
      target_amount_of_money: 100000,
      fruits: [
        {
          fruit_id: "4",
          name: "りんご",
          created_at: "2024-09-22T00:00:00Z",
          description: "りんごの説明",
          amount_of_money: 1000,
          key_visual: "https://via.placeholder.com/150",
          project_id: "2",
          sponsor_id: "1",
        },
        {
          fruit_id: "5",
          name: "バナナ",
          created_at: "2024-09-22T00:00:00Z",
          description: "バナナの説明",
          amount_of_money: 2000,
          key_visual: "https://via.placeholder.com/150",
          project_id: "2",
          sponsor_id: "1",
        },
        {
          fruit_id: "6",
          name: "いちご",
          created_at: "2024-09-22T00:00:00Z",
          description: "いちごの説明",
          amount_of_money: 3000,
          key_visual: "https://via.placeholder.com/150",
          project_id: "2",
          sponsor_id: "1",
        },
      ],
    },
];

export const seedsData: Array<DBSchema<"seeds">> = [
  {
    seed_id: "1",
    created_at: "2024-09-22T00:00:00Z",
    description: "屋上庭園のある公共施設が欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "1",
  },
  {
    seed_id: "2",
    created_at: "2024-09-22T00:00:00Z",
    description: "静かに読書できる屋外ブックカフェが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "1",
  },
  {
    seed_id: "3",
    created_at: "2024-09-22T00:00:00Z",
    description: "静かに瞑想やヨガができる屋外スペースが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "1",
  },
  {
    seed_id: "4",
    created_at: "2024-09-22T00:00:00Z",
    description: "公園にハンモックエリアを作ってほしい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "1",
  },
  {
    seed_id: "5",
    created_at: "2024-09-22T00:00:00Z",
    description: "人工芝の広がる場所がほしい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "4",
  },
  {
    seed_id: "7",
    created_at: "2024-09-22T00:00:00Z",
    description: "地元の農産物を使った安くて美味しいレストランが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "3",
  },
  {
    seed_id: "8",
    created_at: "2024-09-22T00:00:00Z",
    description: "新鮮な野菜を使ったレストランが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "3",
  },
  {
    seed_id: "9",
    created_at: "2024-09-22T00:00:00Z",
    description: "若者向けの起業支援センターが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "6",
  },
  {
    seed_id: "10",
    created_at: "2024-09-22T00:00:00Z",
    description: "地元の農産物を使った安くて美味しいレストランが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "3",
  },
  {
    seed_id: "11",
    created_at: "2024-09-22T00:00:00Z",
    description: "コミュニティスペースを増やしてほしい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "2",
  },
  {
    seed_id: "12",
    created_at: "2024-09-22T00:00:00Z",
    description: "地元の食材を使った料理教室が定期的に開かれる場所が欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "4",
  },
  {
    seed_id: "13",
    created_at: "2024-09-22T00:00:00Z",
    description: "地元の農家と直接つながる朝市を定期的に開催してほしい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "3",
  },
  {
    seed_id: "14",
    created_at: "2024-09-22T00:00:00Z",
    description: "多世代が交流できるコミュニティガーデンが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "6",
  },
  {
    seed_id: "15",
    created_at: "2024-09-22T00:00:00Z",
    description: "地元の高齢者が運営する昔ながらの食堂が欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "4",
  },
  {
    seed_id: "16",
    created_at: "2024-09-22T00:00:00Z",
    description: "地域の経済を活性化させたい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "6",
  },
  {
    seed_id: "17",
    created_at: "2024-09-22T00:00:00Z",
    description: "地域の特産品を販売する常設マルシェが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "4",
  },
  {
    seed_id: "18",
    created_at: "2024-09-22T00:00:00Z",
    description: "地域の人々が集まれるコミュニティスペースが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "6",
  },
];

export const sponsorsData: Array<DBSchema<"sponsors">> = [
  {
    sponsor_id: "1",
    name: "スポンサー1",
    created_at: "2024-09-22T00:00:00Z",
    description: "スポンサー1です｡",
    user_id: "2",
    icon: "https://via.placeholder.com/150",
  },
];
