| public | categories | category_id | uuid | NO | gen_random_uuid() |
| public | categories | name | text | NO | |
| public | categories | description | text | YES | |
| public | categories | created_at | timestamp with time zone | NO | now() |
| public | comments | comment_id | bigint | NO | |
| public | comments | project_id | uuid | NO | |
| public | comments | user_id | uuid | NO | |
| public | comments | body | text | NO | |
| public | comments | created_at | timestamp with time zone | NO | now() |
| public | fruits | fruit_id | uuid | NO | gen_random_uuid() |
| public | fruits | project_id | uuid | NO | |
| public | fruits | sponsor_id | text | NO | |
| public | fruits | name | text | NO | |
| public | fruits | key_visual | text | YES | |
| public | fruits | description | text | NO | |
| public | fruits | created_at | timestamp with time zone | NO | now() |
| public | projects | project_id | uuid | NO | gen_random_uuid() |
| public | projects | name | text | NO | |
| public | projects | key_visual | text | YES | |
| public | projects | deadline | timestamp with time zone | NO | |
| public | projects | created_at | timestamp with time zone | NO | now() |
| public | projects | territory_id | uuid | NO | |
| public | projects | amount_of_money | integer | NO | |
| public | projects | sponsor_data_id | uuid | YES | |
| public | projects | comment_ids | ARRAY | NO | |
| public | reports | report_id | uuid | NO | gen_random_uuid() |
| public | reports | project_id | uuid | NO | |
| public | reports | sponsor_id | uuid | NO | |
| public | reports | title | text | NO | |
| public | reports | key_visual | text | YES | |
| public | reports | body | text | NO | |
| public | reports | created_at | timestamp with time zone | NO | now() |
| public | seeds | seed_id | uuid | NO | gen_random_uuid() |
| public | seeds | location | USER-DEFINED | NO | |
| public | seeds | user_id | uuid | NO | |
| public | seeds | created_at | timestamp with time zone | NO | now() |
| public | seeds | category_ids | ARRAY | NO | |
| public | seeds | description | text | YES | |
| public | sponsor_data | sponsor_data_id | uuid | NO | gen_random_uuid() |
| public | sponsor_data | project_id | uuid | NO | |
| public | sponsor_data | sponsor_id | uuid | NO | |
| public | sponsor_data | fruit_ids | ARRAY | NO | |
| public | sponsor_data | created_at | timestamp with time zone | NO | now() |
| public | sponsor_data | motivation | text | NO | |
| public | sponsor_data | location | USER-DEFINED | NO | |
| public | sponsor_data | target_amount_of_money | integer | NO | |
| public | sponsor_data | report_ids | ARRAY | NO | |
| public | territories | territory_id | uuid | NO | gen_random_uuid() |
| public | territories | zone | USER-DEFINED | NO | |
| public | territories | created_at | timestamp with time zone | NO | now() |
