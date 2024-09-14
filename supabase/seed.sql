SET
	session_replication_role = replica;

--
-- PostgreSQL database dump
--
-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)
SET
	statement_timeout = 0;

SET
	lock_timeout = 0;

SET
	idle_in_transaction_session_timeout = 0;

SET
	client_encoding = 'UTF8';

SET
	standard_conforming_strings = on;

SELECT
	pg_catalog.set_config('search_path', '', false);

SET
	check_function_bodies = false;

SET
	xmloption = content;

SET
	client_min_messages = warning;

SET
	row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
INSERT INTO
	"auth"."audit_log_entries" (
		"instance_id",
		"id",
		"payload",
		"created_at",
		"ip_address"
	)
VALUES
	(
		'00000000-0000-0000-0000-000000000000',
		'956672dc-8828-494b-ad4c-3ccd7f12abec',
		'{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user01@example.com","user_id":"71bc2eea-f598-4e80-98a9-67e7fe0462d7","user_phone":""}}',
		'2024-09-14 01:44:58.760107+00',
		''
	),
	(
		'00000000-0000-0000-0000-000000000000',
		'6cf49b57-3c36-4554-96cf-e1bed5d81861',
		'{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user02@example.com","user_id":"52dee3ee-2800-47f1-bf97-90ee67e59af3","user_phone":""}}',
		'2024-09-14 01:45:17.573092+00',
		''
	),
	(
		'00000000-0000-0000-0000-000000000000',
		'af3813eb-60da-46b3-a5e3-ee6354ba32ea',
		'{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user03@example.com","user_id":"55e03f57-72be-49af-8bf6-29dd4ad98cbd","user_phone":""}}',
		'2024-09-14 01:45:38.832128+00',
		''
	),
	(
		'00000000-0000-0000-0000-000000000000',
		'c9bcb773-c5fd-4dec-a843-b28b61f28f18',
		'{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user04@example.net","user_id":"100e8cbb-4a43-4db8-b33f-95af8c7da82e","user_phone":""}}',
		'2024-09-14 01:45:53.376792+00',
		''
	),
	(
		'00000000-0000-0000-0000-000000000000',
		'2565ca62-d004-4a5f-abd9-9dd4a0e90e2d',
		'{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user05@example.net","user_id":"41b728b9-bac4-4789-813c-e689d467f2e2","user_phone":""}}',
		'2024-09-14 01:46:06.889561+00',
		''
	),
	(
		'00000000-0000-0000-0000-000000000000',
		'd4904f12-3d44-498e-8b30-c4f32152c82a',
		'{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user06@example.net","user_id":"261dfd76-6990-4b24-b3f4-a53f4fc3a687","user_phone":""}}',
		'2024-09-14 01:46:18.381526+00',
		''
	);

--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
INSERT INTO
	"auth"."users" (
		"instance_id",
		"id",
		"aud",
		"role",
		"email",
		"encrypted_password",
		"email_confirmed_at",
		"invited_at",
		"confirmation_token",
		"confirmation_sent_at",
		"recovery_token",
		"recovery_sent_at",
		"email_change_token_new",
		"email_change",
		"email_change_sent_at",
		"last_sign_in_at",
		"raw_app_meta_data",
		"raw_user_meta_data",
		"is_super_admin",
		"created_at",
		"updated_at",
		"phone",
		"phone_confirmed_at",
		"phone_change",
		"phone_change_token",
		"phone_change_sent_at",
		"email_change_token_current",
		"email_change_confirm_status",
		"banned_until",
		"reauthentication_token",
		"reauthentication_sent_at",
		"is_sso_user",
		"deleted_at",
		"is_anonymous"
	)
VALUES
	(
		'00000000-0000-0000-0000-000000000000',
		'71bc2eea-f598-4e80-98a9-67e7fe0462d7',
		'authenticated',
		'authenticated',
		'user01@example.com',
		'$2a$10$z4oAT8qQbHsb62koCTTgd.VUL6LpM/ots3MbaedlPSrI5KFnn4W9S',
		'2024-09-14 01:44:58.76296+00',
		NULL,
		'',
		NULL,
		'',
		NULL,
		'',
		'',
		NULL,
		NULL,
		'{"provider": "email", "providers": ["email"]}',
		'{}',
		NULL,
		'2024-09-14 01:44:58.745319+00',
		'2024-09-14 01:44:58.763158+00',
		NULL,
		NULL,
		'',
		'',
		NULL,
		'',
		0,
		NULL,
		'',
		NULL,
		false,
		NULL,
		false
	),
	(
		'00000000-0000-0000-0000-000000000000',
		'52dee3ee-2800-47f1-bf97-90ee67e59af3',
		'authenticated',
		'authenticated',
		'user02@example.com',
		'$2a$10$uh3fzSL1ocIxIMmy4UZ0SOBX6b01KQRTV9ewNgG6su/sZvwjW8R6a',
		'2024-09-14 01:45:17.574539+00',
		NULL,
		'',
		NULL,
		'',
		NULL,
		'',
		'',
		NULL,
		NULL,
		'{"provider": "email", "providers": ["email"]}',
		'{}',
		NULL,
		'2024-09-14 01:45:17.569513+00',
		'2024-09-14 01:45:17.574797+00',
		NULL,
		NULL,
		'',
		'',
		NULL,
		'',
		0,
		NULL,
		'',
		NULL,
		false,
		NULL,
		false
	),
	(
		'00000000-0000-0000-0000-000000000000',
		'55e03f57-72be-49af-8bf6-29dd4ad98cbd',
		'authenticated',
		'authenticated',
		'user03@example.com',
		'$2a$10$JlGXDppKeM1e0De2ba7xrOE/ee4TTWSTeteDgou8iX.K5FqyA4Dq6',
		'2024-09-14 01:45:38.833577+00',
		NULL,
		'',
		NULL,
		'',
		NULL,
		'',
		'',
		NULL,
		NULL,
		'{"provider": "email", "providers": ["email"]}',
		'{}',
		NULL,
		'2024-09-14 01:45:38.823115+00',
		'2024-09-14 01:45:38.833739+00',
		NULL,
		NULL,
		'',
		'',
		NULL,
		'',
		0,
		NULL,
		'',
		NULL,
		false,
		NULL,
		false
	),
	(
		'00000000-0000-0000-0000-000000000000',
		'100e8cbb-4a43-4db8-b33f-95af8c7da82e',
		'authenticated',
		'authenticated',
		'user04@example.net',
		'$2a$10$JPOIy4.xilhY.DfW/rMRHu77/4bHjFHChJjN6zypDlQ0xXMuNHoC.',
		'2024-09-14 01:45:53.378279+00',
		NULL,
		'',
		NULL,
		'',
		NULL,
		'',
		'',
		NULL,
		NULL,
		'{"provider": "email", "providers": ["email"]}',
		'{}',
		NULL,
		'2024-09-14 01:45:53.374328+00',
		'2024-09-14 01:45:53.37857+00',
		NULL,
		NULL,
		'',
		'',
		NULL,
		'',
		0,
		NULL,
		'',
		NULL,
		false,
		NULL,
		false
	),
	(
		'00000000-0000-0000-0000-000000000000',
		'41b728b9-bac4-4789-813c-e689d467f2e2',
		'authenticated',
		'authenticated',
		'user05@example.net',
		'$2a$10$7RPuJ9GwHI4L95yEBwwbsOZLhAtAq8k4qpTku9rQR8jEZEUMGwoSS',
		'2024-09-14 01:46:06.892856+00',
		NULL,
		'',
		NULL,
		'',
		NULL,
		'',
		'',
		NULL,
		NULL,
		'{"provider": "email", "providers": ["email"]}',
		'{}',
		NULL,
		'2024-09-14 01:46:06.887322+00',
		'2024-09-14 01:46:06.893003+00',
		NULL,
		NULL,
		'',
		'',
		NULL,
		'',
		0,
		NULL,
		'',
		NULL,
		false,
		NULL,
		false
	),
	(
		'00000000-0000-0000-0000-000000000000',
		'261dfd76-6990-4b24-b3f4-a53f4fc3a687',
		'authenticated',
		'authenticated',
		'user06@example.net',
		'$2a$10$zdVLxsrhuRpXTy4Mb8kiEuDAKuQYjYJXPU89OPcFkR.jKDhBt2.AS',
		'2024-09-14 01:46:18.38322+00',
		NULL,
		'',
		NULL,
		'',
		NULL,
		'',
		'',
		NULL,
		NULL,
		'{"provider": "email", "providers": ["email"]}',
		'{}',
		NULL,
		'2024-09-14 01:46:18.372781+00',
		'2024-09-14 01:46:18.383359+00',
		NULL,
		NULL,
		'',
		'',
		NULL,
		'',
		0,
		NULL,
		'',
		NULL,
		false,
		NULL,
		false
	);

--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
INSERT INTO
	"auth"."identities" (
		"provider_id",
		"user_id",
		"identity_data",
		"provider",
		"last_sign_in_at",
		"created_at",
		"updated_at",
		"id"
	)
VALUES
	(
		'71bc2eea-f598-4e80-98a9-67e7fe0462d7',
		'71bc2eea-f598-4e80-98a9-67e7fe0462d7',
		'{"sub": "71bc2eea-f598-4e80-98a9-67e7fe0462d7", "email": "user01@example.com", "email_verified": false, "phone_verified": false}',
		'email',
		'2024-09-14 01:44:58.748473+00',
		'2024-09-14 01:44:58.748577+00',
		'2024-09-14 01:44:58.748577+00',
		'9608af19-a238-4d83-ab8e-a87699b2dc7c'
	),
	(
		'52dee3ee-2800-47f1-bf97-90ee67e59af3',
		'52dee3ee-2800-47f1-bf97-90ee67e59af3',
		'{"sub": "52dee3ee-2800-47f1-bf97-90ee67e59af3", "email": "user02@example.com", "email_verified": false, "phone_verified": false}',
		'email',
		'2024-09-14 01:45:17.571871+00',
		'2024-09-14 01:45:17.571916+00',
		'2024-09-14 01:45:17.571916+00',
		'0bfe38c9-cbba-4b56-b455-f20fa8ae6cda'
	),
	(
		'55e03f57-72be-49af-8bf6-29dd4ad98cbd',
		'55e03f57-72be-49af-8bf6-29dd4ad98cbd',
		'{"sub": "55e03f57-72be-49af-8bf6-29dd4ad98cbd", "email": "user03@example.com", "email_verified": false, "phone_verified": false}',
		'email',
		'2024-09-14 01:45:38.830819+00',
		'2024-09-14 01:45:38.830872+00',
		'2024-09-14 01:45:38.830872+00',
		'76978973-1beb-427d-97a4-96da800e5350'
	),
	(
		'100e8cbb-4a43-4db8-b33f-95af8c7da82e',
		'100e8cbb-4a43-4db8-b33f-95af8c7da82e',
		'{"sub": "100e8cbb-4a43-4db8-b33f-95af8c7da82e", "email": "user04@example.net", "email_verified": false, "phone_verified": false}',
		'email',
		'2024-09-14 01:45:53.375728+00',
		'2024-09-14 01:45:53.375766+00',
		'2024-09-14 01:45:53.375766+00',
		'8c352c11-693e-4486-98e4-5403f1937814'
	),
	(
		'41b728b9-bac4-4789-813c-e689d467f2e2',
		'41b728b9-bac4-4789-813c-e689d467f2e2',
		'{"sub": "41b728b9-bac4-4789-813c-e689d467f2e2", "email": "user05@example.net", "email_verified": false, "phone_verified": false}',
		'email',
		'2024-09-14 01:46:06.888491+00',
		'2024-09-14 01:46:06.888531+00',
		'2024-09-14 01:46:06.888531+00',
		'55a0f48a-af5d-4f3e-bd75-5a8f166b346a'
	),
	(
		'261dfd76-6990-4b24-b3f4-a53f4fc3a687',
		'261dfd76-6990-4b24-b3f4-a53f4fc3a687',
		'{"sub": "261dfd76-6990-4b24-b3f4-a53f4fc3a687", "email": "user06@example.net", "email_verified": false, "phone_verified": false}',
		'email',
		'2024-09-14 01:46:18.378711+00',
		'2024-09-14 01:46:18.378751+00',
		'2024-09-14 01:46:18.378751+00',
		'c6caeb4e-a64d-40e5-b3b9-cf42b9500a7b'
	);

--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--
--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--
--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--
--
-- Data for Name: territories; Type: TABLE DATA; Schema: public; Owner: postgres
--
--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--
--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--
--
-- Data for Name: sponsors; Type: TABLE DATA; Schema: public; Owner: postgres
--
INSERT INTO
	"public"."sponsors" (
		"sponsor_id",
		"name",
		"icon",
		"description",
		"created_at",
		"user_id"
	)
VALUES
	(
		'692a0913-e6d2-482f-9780-cdccee0e7c8d',
		'user04',
		'https://drive.google.com/uc?id=1N5SUCa8UlO3Tyz1NW1MGVOBs9nmaxURN',
		NULL,
		'2024-09-14 01:55:45.737095+00',
		'100e8cbb-4a43-4db8-b33f-95af8c7da82e'
	),
	(
		'16315abb-4a72-4d54-bd9d-b38288591f10',
		'user05',
		'https://drive.google.com/uc?id=1N5SUCa8UlO3Tyz1NW1MGVOBs9nmaxURN',
		NULL,
		'2024-09-14 01:56:13.363321+00',
		'41b728b9-bac4-4789-813c-e689d467f2e2'
	),
	(
		'7a8b06bf-0acb-40e0-89ec-5de2574ef460',
		'user06',
		'https://drive.google.com/uc?id=1N5SUCa8UlO3Tyz1NW1MGVOBs9nmaxURN',
		NULL,
		'2024-09-14 01:56:27.161393+00',
		'261dfd76-6990-4b24-b3f4-a53f4fc3a687'
	);

--
-- Data for Name: fruits; Type: TABLE DATA; Schema: public; Owner: postgres
--
--
-- Data for Name: reports; Type: TABLE DATA; Schema: public; Owner: postgres
--
--
-- Data for Name: sowers; Type: TABLE DATA; Schema: public; Owner: postgres
--
INSERT INTO
	"public"."sowers" (
		"user_id",
		"name",
		"birthday",
		"created_at",
		"sower_id"
	)
VALUES
	(
		'71bc2eea-f598-4e80-98a9-67e7fe0462d7',
		'user01',
		'1995-01-01',
		'2024-09-14 01:51:09.626403+00',
		'e263d5ab-09d6-4b61-9296-265df25f78df'
	),
	(
		'52dee3ee-2800-47f1-bf97-90ee67e59af3',
		'user02',
		'1980-01-01',
		'2024-09-14 01:51:44.101461+00',
		'7123cf6e-6b33-408f-890c-40fff0ccfb4d'
	),
	(
		'55e03f57-72be-49af-8bf6-29dd4ad98cbd',
		'user03',
		'2005-01-01',
		'2024-09-14 01:52:15.344378+00',
		'735749af-cdbe-4d6d-9e5c-24cbca33607f'
	);

--
-- Data for Name: seeds; Type: TABLE DATA; Schema: public; Owner: postgres
--
--
-- Data for Name: sponsor_data; Type: TABLE DATA; Schema: public; Owner: postgres
--
--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--
--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--
--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--
--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--
--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--
--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--
--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--
SELECT
	pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);

--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--
SELECT
	pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);

--
-- Name: comments_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--
SELECT
	pg_catalog.setval('"public"."comments_comment_id_seq"', 1, false);

--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--
SELECT
	pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);

--
-- PostgreSQL database dump complete
--
RESET ALL;
