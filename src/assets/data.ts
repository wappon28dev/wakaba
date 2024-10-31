import { type Tables } from "@/types/supabase.gen";

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

export const categoriesData: Array<Tables<"categories">> = [
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
  Tables<"projects"> & {
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
    key_visual: "https://i.gyazo.com/9205914603b719a1933a1f422c09c70c.jpg",
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
    key_visual: "https://i.gyazo.com/0571d48414ff9a3558471f08481f4b96.jpg",
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
    key_visual: "https://i.gyazo.com/0fc7ef8bdbd73f6fb6ede2fe2e8acbd5.jpg",
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
    key_visual: "https://i.gyazo.com/a0f8e78fa4592e590c29130d3319bb92.jpg",
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
    key_visual: "https://i.gyazo.com/9d9c8aeb4a441f42f337c2076043accd.jpg",
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
    key_visual: "https://i.gyazo.com/0491476f854e0db58d69b6d16af50392.jpg",
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
    key_visual: "https://i.gyazo.com/b11d5cb6fe109293e59dd0eb045daf00.jpg",
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
    key_visual: "https://i.gyazo.com/58649dde4c670eab667bfafbefb3b69e.jpg",
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
    key_visual: "https://i.gyazo.com/3d6f6702e717cb4930770a096bdcdba3.jpg",
    name: "地域特産品マルシェ",
    project_id: "9",
    territory_id: "1",
    seed_id: [13, 17],
    amount_of_money: 10000,
    location: { lon: 136.886326, lat: 35.172757 },
  },
];

export const sponsorDataData: Array<
  Tables<"sponsor_data"> & {
    reports?: Array<Tables<"reports">>;
    fruits: Array<Tables<"fruits">>;
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
        body: `ご支援ありがとうございます!!
        本日､業者に発注致しました施工が始まりました｡
        今しばらく開店までお待ち下さい｡`,
        created_at: "2024-09-22T00:00:00Z",
        key_visual: "https://via.placeholder.com/150",
        project_id: "1",
        report_id: "1",
        sponsor_id: "1",
        title: "施工開始のお知らせ",
      },
    ],
    fruits: [
      {
        fruit_id: "1",
        name: "支援1",
        created_at: "2024-09-22T00:00:00Z",
        description: "支援1の説明",
        amount_of_money: 1000,
        key_visual: "https://via.placeholder.com/150",
        project_id: "1",
        sponsor_id: "1",
      },
      {
        fruit_id: "2",
        name: "支援2",
        created_at: "2024-09-22T00:00:00Z",
        description: "支援2の説明",
        amount_of_money: 3000,
        key_visual: "https://via.placeholder.com/150",
        project_id: "1",
        sponsor_id: "1",
      },
      {
        fruit_id: "3",
        name: "支援3",
        created_at: "2024-09-22T00:00:00Z",
        description: "支援3の説明",
        amount_of_money: 5000,
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
        name: "5% OFFクーポン",
        created_at: "2024-09-22T00:00:00Z",
        description: "開店後、入場料1回5%OFFでご利用いただけます",
        amount_of_money: 1000,
        key_visual: "https://via.placeholder.com/150",
        project_id: "2",
        sponsor_id: "1",
      },
      {
        fruit_id: "5",
        name: "10% OFFクーポン",
        created_at: "2024-09-22T00:00:00Z",
        description: "開店後、入場料1回10%OFFでご利用いただけます",
        amount_of_money: 3000,
        key_visual: "https://via.placeholder.com/150",
        project_id: "2",
        sponsor_id: "1",
      },
      {
        fruit_id: "6",
        name: "入場料一生10%OFF",
        created_at: "2024-09-22T00:00:00Z",
        description: "開店後、屋上庭園の入場料を一生10%OFFでご利用いただけます",
        amount_of_money: 3000,
        key_visual: "https://via.placeholder.com/150",
        project_id: "2",
        sponsor_id: "1",
      },
    ],
  },
];

export const seedsData: Array<Tables<"seeds">> = [
  {
    seed_id: "1",
    created_at: "2024-09-22T00:00:00Z",
    description: "大人も子どもも楽しめる屋上庭園のあるパーク施設が欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "1",
  },
  {
    seed_id: "2",
    created_at: "2024-09-22T00:00:00Z",
    description:
      "静かに読書ができて昼食も取れて一日中滞在できるような屋外ブックカフェが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "99d65bc7-e98d-4995-b204-afdb0a34c7d5",
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
    description: "ゆったりできる公園にハンモックエリアを作ってほしい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "1",
  },
  {
    seed_id: "5",
    created_at: "2024-09-22T00:00:00Z",
    description: "地面に寝っ転がれる人工芝の広がる場所がほしい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "4",
  },
  {
    seed_id: "7",
    created_at: "2024-09-22T00:00:00Z",
    description: "地元の農産物を使った安くて美味しいレストランが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "99d65bc7-e98d-4995-b204-afdb0a34c7d5",
    category_id: "3",
  },
  {
    seed_id: "8",
    created_at: "2024-09-22T00:00:00Z",
    description: "近くの新鮮な野菜を使ったレストランが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "3",
  },
  {
    seed_id: "9",
    created_at: "2024-09-22T00:00:00Z",
    description: "若者向けの起業支援センターが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "99d65bc7-e98d-4995-b204-afdb0a34c7d5",
    category_id: "6",
  },
  {
    seed_id: "10",
    created_at: "2024-09-22T00:00:00Z",
    description:
      "アットホームな雰囲気の地元の農産物を使った安くて美味しいレストランが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "3",
  },
  {
    seed_id: "11",
    created_at: "2024-09-22T00:00:00Z",
    description:
      "若者から高齢者まで幅広い世代がコミュニティスペースを増やしてほしい",
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
    description: "地元の伝統料理など高齢者が運営する昔ながらの食堂が欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "4",
  },
  {
    seed_id: "16",
    created_at: "2024-09-22T00:00:00Z",
    description: "地域の経済を学生の力で活性化させたい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "6",
  },
  {
    seed_id: "17",
    created_at: "2024-09-22T00:00:00Z",
    description:
      "地域の農家や漁師などの生産者と直接顔をあわせて､特産品を販売する常設マルシェが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "1",
    category_id: "4",
  },
  {
    seed_id: "18",
    created_at: "2024-09-22T00:00:00Z",
    description: "地域の人々が集まれるコミュニティスペースが欲しい",
    location: { lon: 136.886326, lat: 35.172757 },
    sower_id: "9bdf4bd2-2a0d-4cfc-90da-9c01104fddc6",
    category_id: "6",
  },
];

export const sponsorsData: Array<Tables<"sponsors">> = [
  {
    sponsor_id: "1",
    name: "スポンサー1",
    created_at: "2024-09-22T00:00:00Z",
    description: "スポンサー1です｡",
    user_id: "2",
    icon: "https://via.placeholder.com/150",
  },
];
