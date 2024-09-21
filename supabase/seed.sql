SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '956672dc-8828-494b-ad4c-3ccd7f12abec', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user01@example.com","user_id":"71bc2eea-f598-4e80-98a9-67e7fe0462d7","user_phone":""}}', '2024-09-14 01:44:58.760107+00', ''),
	('00000000-0000-0000-0000-000000000000', '6cf49b57-3c36-4554-96cf-e1bed5d81861', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user02@example.com","user_id":"52dee3ee-2800-47f1-bf97-90ee67e59af3","user_phone":""}}', '2024-09-14 01:45:17.573092+00', ''),
	('00000000-0000-0000-0000-000000000000', 'af3813eb-60da-46b3-a5e3-ee6354ba32ea', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user03@example.com","user_id":"55e03f57-72be-49af-8bf6-29dd4ad98cbd","user_phone":""}}', '2024-09-14 01:45:38.832128+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c9bcb773-c5fd-4dec-a843-b28b61f28f18', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user04@example.net","user_id":"100e8cbb-4a43-4db8-b33f-95af8c7da82e","user_phone":""}}', '2024-09-14 01:45:53.376792+00', ''),
	('00000000-0000-0000-0000-000000000000', '2565ca62-d004-4a5f-abd9-9dd4a0e90e2d', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user05@example.net","user_id":"41b728b9-bac4-4789-813c-e689d467f2e2","user_phone":""}}', '2024-09-14 01:46:06.889561+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd4904f12-3d44-498e-8b30-c4f32152c82a', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user06@example.net","user_id":"261dfd76-6990-4b24-b3f4-a53f4fc3a687","user_phone":""}}', '2024-09-14 01:46:18.381526+00', ''),
	('00000000-0000-0000-0000-000000000000', '0123c9e8-2ee0-43da-bdff-ec1c504984f0', '{"action":"user_signedup","actor_id":"50abb9ab-02fd-45ec-917d-78be0583132e","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"google"}}', '2024-09-18 13:05:33.68153+00', ''),
	('00000000-0000-0000-0000-000000000000', '5d7e4de8-f51e-41af-95af-43197e3adf0d', '{"action":"login","actor_id":"50abb9ab-02fd-45ec-917d-78be0583132e","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 13:06:45.939749+00', ''),
	('00000000-0000-0000-0000-000000000000', '2987a043-9228-4400-a2a9-239444572053', '{"action":"login","actor_id":"50abb9ab-02fd-45ec-917d-78be0583132e","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 13:09:19.906377+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eaf7bf49-85a9-44a3-8ad7-415ef1fcba3d', '{"action":"login","actor_id":"50abb9ab-02fd-45ec-917d-78be0583132e","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 13:21:46.916202+00', ''),
	('00000000-0000-0000-0000-000000000000', '11e78346-a131-4f59-82cf-23b8cf5ca1c2', '{"action":"login","actor_id":"50abb9ab-02fd-45ec-917d-78be0583132e","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 13:21:58.642312+00', ''),
	('00000000-0000-0000-0000-000000000000', '608fb51a-3153-4507-b302-d09a764450f2', '{"action":"login","actor_id":"50abb9ab-02fd-45ec-917d-78be0583132e","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 13:22:16.446342+00', ''),
	('00000000-0000-0000-0000-000000000000', '4c8b031b-68a5-4bc3-9e00-410d73754d4f', '{"action":"login","actor_id":"50abb9ab-02fd-45ec-917d-78be0583132e","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 13:22:59.913542+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ecdab1e9-edf8-4531-b54d-00a9aaa434be', '{"action":"user_signedup","actor_id":"477a526b-1027-4372-983a-8f1987009ae2","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"google"}}', '2024-09-18 14:01:06.919062+00', ''),
	('00000000-0000-0000-0000-000000000000', '5c2ba343-ddb1-49d5-a63d-db82dc667fd5', '{"action":"login","actor_id":"477a526b-1027-4372-983a-8f1987009ae2","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 14:02:41.72941+00', ''),
	('00000000-0000-0000-0000-000000000000', '54f8765a-fb1a-4e64-8306-ac807644d541', '{"action":"login","actor_id":"477a526b-1027-4372-983a-8f1987009ae2","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 14:03:27.881375+00', ''),
	('00000000-0000-0000-0000-000000000000', '543bba0a-52e7-4bf1-956d-516a74718b56', '{"action":"login","actor_id":"477a526b-1027-4372-983a-8f1987009ae2","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 14:03:36.168791+00', ''),
	('00000000-0000-0000-0000-000000000000', '6459f4ef-8586-49f9-bd70-88aaf8fe3e5a', '{"action":"login","actor_id":"477a526b-1027-4372-983a-8f1987009ae2","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 14:03:52.923827+00', ''),
	('00000000-0000-0000-0000-000000000000', '123f5461-4d17-4f5a-a676-225343d790bb', '{"action":"user_signedup","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"google"}}', '2024-09-18 14:08:37.505823+00', ''),
	('00000000-0000-0000-0000-000000000000', '447e8467-341c-45c2-baec-f4004ca0b5b3', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 14:11:18.359681+00', ''),
	('00000000-0000-0000-0000-000000000000', '9f049764-a344-454d-8666-05bdf0ea6caf', '{"action":"token_refreshed","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-09-18 15:11:23.728475+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ff68742e-e879-4cda-af1f-906baf8dbc13', '{"action":"token_revoked","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-09-18 15:11:23.732002+00', ''),
	('00000000-0000-0000-0000-000000000000', '5491b53f-6cb1-425b-9129-d9a9bbf78da2', '{"action":"token_refreshed","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-09-18 16:34:41.505957+00', ''),
	('00000000-0000-0000-0000-000000000000', 'af13f650-0db3-4a9c-a5b0-f94ccf20bd03', '{"action":"token_revoked","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-09-18 16:34:41.508934+00', ''),
	('00000000-0000-0000-0000-000000000000', '8e51270d-5752-4fdc-865c-41d73064f265', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 17:06:35.183816+00', ''),
	('00000000-0000-0000-0000-000000000000', '0066e106-50da-4a33-b492-87ccf0af74a6', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 17:24:15.936155+00', ''),
	('00000000-0000-0000-0000-000000000000', '26562f84-6dd7-4308-9f80-ece6b4a5c42f', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 17:25:14.584911+00', ''),
	('00000000-0000-0000-0000-000000000000', '4a06ba09-5548-4ef6-a212-0cd6fd09a1d8', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 17:33:33.956111+00', ''),
	('00000000-0000-0000-0000-000000000000', '09d5f9ea-2028-467c-87c0-521c96f5699b', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 17:33:40.888939+00', ''),
	('00000000-0000-0000-0000-000000000000', '13c8c799-6c7d-4e88-b979-a7fee2d8a2a6', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 17:46:07.786685+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ba13b132-2475-4c0b-b934-3440822393db', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 17:46:31.37644+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e822a61-05ff-4693-a478-9794c8e775c2', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 17:47:12.304487+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd0b0c27d-5df2-4285-893c-65578ec49117', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 17:47:17.337051+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b0dec29e-7261-446b-98ba-a8fb27b514b0', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 17:47:30.302996+00', ''),
	('00000000-0000-0000-0000-000000000000', 'df3645e9-6c15-4fdf-9ba5-759c2bf27772', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 17:47:32.425808+00', ''),
	('00000000-0000-0000-0000-000000000000', '25b668d4-5ba6-49b8-aa8d-540f8af0812f', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 17:47:48.325991+00', ''),
	('00000000-0000-0000-0000-000000000000', '634a6c71-6bf8-4428-8e1a-410d843441d5', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 17:47:54.140845+00', ''),
	('00000000-0000-0000-0000-000000000000', '2eb8f1e2-93a5-482c-a8e3-2bf6f04a40db', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 18:14:54.442052+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ef0dc330-da29-4985-8f48-731cd64b6057', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:40:49.086767+00', ''),
	('00000000-0000-0000-0000-000000000000', '0ce64d2e-c840-4d7f-97e3-ef7eadf11117', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 18:41:18.736577+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd2d9f8ff-2f55-40d5-ab01-3bb9d1418586', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:41:27.150884+00', ''),
	('00000000-0000-0000-0000-000000000000', '81388123-265d-453c-a0bb-b37c09b87283', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 18:42:02.637581+00', ''),
	('00000000-0000-0000-0000-000000000000', '5ce6dee0-6c8c-4220-842b-ad45e506753a', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:43:38.284929+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b684de61-ee55-4b33-ad97-779ad83d3714', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 18:45:58.723985+00', ''),
	('00000000-0000-0000-0000-000000000000', '6f044f88-ba4e-4e2b-9de3-2fafefa1e6a8', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:46:03.244621+00', ''),
	('00000000-0000-0000-0000-000000000000', '431d2c6e-8de7-4907-99e2-a49d75ce421c', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 18:47:15.063628+00', ''),
	('00000000-0000-0000-0000-000000000000', '7bac397b-ddba-4f30-906a-593776806bc6', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:47:40.255542+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c9c0cd59-fe71-4930-b4c8-c498f6f56774', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:48:03.613771+00', ''),
	('00000000-0000-0000-0000-000000000000', '431a5a7f-854a-4072-b349-03fce3514440', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:51:33.362839+00', ''),
	('00000000-0000-0000-0000-000000000000', '99449156-fcca-447e-a5d9-945054d1fca2', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:53:06.632907+00', ''),
	('00000000-0000-0000-0000-000000000000', '2f624a5c-19e5-48eb-8f4a-ade582100a5f', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:53:44.323157+00', ''),
	('00000000-0000-0000-0000-000000000000', '1c74f9d5-1042-4887-92e7-ba787a43a623', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:53:47.783286+00', ''),
	('00000000-0000-0000-0000-000000000000', '8abfbb1d-7853-46fe-a520-024646fb823c', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:54:25.950307+00', ''),
	('00000000-0000-0000-0000-000000000000', '782796b2-f32f-428d-9f6a-90e2ab18dcbe', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:55:21.945578+00', ''),
	('00000000-0000-0000-0000-000000000000', '6abdbd8c-06d8-4b01-b738-18c2117b1403', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 18:55:32.054498+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e8d78cf2-68f0-416d-a649-0d5f66878675', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:55:46.06893+00', ''),
	('00000000-0000-0000-0000-000000000000', '9a8cba8b-701d-4137-bf23-2e07944602c9', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 18:55:51.392503+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e2d6325-6618-47b6-a2b1-4c250cbb8b45', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 19:02:55.925927+00', ''),
	('00000000-0000-0000-0000-000000000000', '11185a8e-3e9e-4265-b95e-a57acfcd6b15', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 19:03:27.7951+00', ''),
	('00000000-0000-0000-0000-000000000000', '9b935dca-07e5-4ed1-a28a-a22e0c2e5edc', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 19:03:45.479315+00', ''),
	('00000000-0000-0000-0000-000000000000', '15fb4ee3-05c6-4c14-8bd8-c00b8aad2993', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 19:05:21.435848+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c29e79aa-1f88-47d3-bcc8-64c22ae84a8b', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 19:05:26.516406+00', ''),
	('00000000-0000-0000-0000-000000000000', '64e40f81-5686-4c57-9f9b-d9c814bcb927', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 19:05:35.713444+00', ''),
	('00000000-0000-0000-0000-000000000000', 'af156dd1-a59d-4fc8-b694-b06d4021b43a', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 19:07:35.997501+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f4d8067e-7341-40b9-af5c-0bf3e8ea3dda', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 19:07:46.551859+00', ''),
	('00000000-0000-0000-0000-000000000000', '796bc9ba-6f03-47cb-82b5-a16a88f97bf5', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 19:14:53.330767+00', ''),
	('00000000-0000-0000-0000-000000000000', '105c6eaf-079e-4a6d-9972-c90becb401db', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 19:14:58.905819+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd3321e77-6543-48e8-b98d-1ad05fabf010', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 19:15:58.962107+00', ''),
	('00000000-0000-0000-0000-000000000000', '6253ccea-ac70-4d37-8d79-e7553474851f', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 19:16:09.029819+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd79f6b85-b10b-4434-8f80-366646073b43', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 19:19:11.983745+00', ''),
	('00000000-0000-0000-0000-000000000000', '482dd9c8-cc19-4fbd-968e-e1fcacc1965b', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 19:19:19.38243+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f53a6214-78e0-438e-8870-fce1069df881', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 19:21:21.924799+00', ''),
	('00000000-0000-0000-0000-000000000000', '4780743d-030a-4c47-a612-098621573d3a', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 19:21:35.575811+00', ''),
	('00000000-0000-0000-0000-000000000000', '69c60dfa-0266-4378-b9d4-fc9cf01d0061', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-18 19:21:56.633399+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dfd26f4e-36fc-43db-928e-e3411ab04d24', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-18 19:25:25.012168+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eb7d7cf2-8669-4076-a59e-d497a227ce19', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-19 06:58:20.552758+00', ''),
	('00000000-0000-0000-0000-000000000000', '686c9a25-fb41-49eb-8bcd-e9e83843f187', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-19 06:58:41.57813+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf219cf5-e41d-4017-9314-bc48cd4924e2', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-19 06:58:47.076617+00', ''),
	('00000000-0000-0000-0000-000000000000', '29ba27c1-2c2f-41d8-921d-09161b4b4961', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-19 07:43:51.46968+00', ''),
	('00000000-0000-0000-0000-000000000000', '82e7dc38-8187-402e-bc30-8ba33f44efe7', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-19 07:44:16.837554+00', ''),
	('00000000-0000-0000-0000-000000000000', '03d318bd-2fbf-4d14-a4b1-5049e96709c8', '{"action":"token_refreshed","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-09-19 10:44:44.17947+00', ''),
	('00000000-0000-0000-0000-000000000000', '9387f4fa-194f-4b0f-8e38-52dd5af75ad4', '{"action":"token_revoked","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-09-19 10:44:44.182428+00', ''),
	('00000000-0000-0000-0000-000000000000', '7c46c00a-1286-4fc0-a563-dade2f2a626f', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-19 11:33:58.374087+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aa5dbb74-8ebe-4215-bac8-789fe22acf92', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-19 11:34:43.357723+00', ''),
	('00000000-0000-0000-0000-000000000000', '757b3b79-a390-4cbc-96ae-514a46cf1500', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-19 11:40:43.132938+00', ''),
	('00000000-0000-0000-0000-000000000000', '1911942d-09fc-4f74-925b-ff466ac644aa', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-19 11:40:47.517605+00', ''),
	('00000000-0000-0000-0000-000000000000', '94514f18-6693-4ade-afe0-69883347f4d4', '{"action":"logout","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-09-19 11:41:14.81785+00', ''),
	('00000000-0000-0000-0000-000000000000', '579ca7a5-42b1-4a03-93f3-96baa387ac02', '{"action":"login","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-09-19 11:41:18.397028+00', ''),
	('00000000-0000-0000-0000-000000000000', '53dbd7d9-c1ef-4f8b-8a1d-82dd23b2eea9', '{"action":"token_refreshed","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-09-19 13:11:28.392436+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c9e8f7a5-a789-4333-8b83-554e83a1d0a3', '{"action":"token_revoked","actor_id":"0c0d6ccc-9258-42b3-8988-16681c3fbeba","actor_name":"町田渉","actor_username":"wmachi0409@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-09-19 13:11:28.402229+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '71bc2eea-f598-4e80-98a9-67e7fe0462d7', 'authenticated', 'authenticated', 'user01@example.com', '$2a$10$z4oAT8qQbHsb62koCTTgd.VUL6LpM/ots3MbaedlPSrI5KFnn4W9S', '2024-09-14 01:44:58.76296+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-09-14 01:44:58.745319+00', '2024-09-14 01:44:58.763158+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '52dee3ee-2800-47f1-bf97-90ee67e59af3', 'authenticated', 'authenticated', 'user02@example.com', '$2a$10$uh3fzSL1ocIxIMmy4UZ0SOBX6b01KQRTV9ewNgG6su/sZvwjW8R6a', '2024-09-14 01:45:17.574539+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-09-14 01:45:17.569513+00', '2024-09-14 01:45:17.574797+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '55e03f57-72be-49af-8bf6-29dd4ad98cbd', 'authenticated', 'authenticated', 'user03@example.com', '$2a$10$JlGXDppKeM1e0De2ba7xrOE/ee4TTWSTeteDgou8iX.K5FqyA4Dq6', '2024-09-14 01:45:38.833577+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-09-14 01:45:38.823115+00', '2024-09-14 01:45:38.833739+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '100e8cbb-4a43-4db8-b33f-95af8c7da82e', 'authenticated', 'authenticated', 'user04@example.net', '$2a$10$JPOIy4.xilhY.DfW/rMRHu77/4bHjFHChJjN6zypDlQ0xXMuNHoC.', '2024-09-14 01:45:53.378279+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-09-14 01:45:53.374328+00', '2024-09-14 01:45:53.37857+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '41b728b9-bac4-4789-813c-e689d467f2e2', 'authenticated', 'authenticated', 'user05@example.net', '$2a$10$7RPuJ9GwHI4L95yEBwwbsOZLhAtAq8k4qpTku9rQR8jEZEUMGwoSS', '2024-09-14 01:46:06.892856+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-09-14 01:46:06.887322+00', '2024-09-14 01:46:06.893003+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '261dfd76-6990-4b24-b3f4-a53f4fc3a687', 'authenticated', 'authenticated', 'user06@example.net', '$2a$10$zdVLxsrhuRpXTy4Mb8kiEuDAKuQYjYJXPU89OPcFkR.jKDhBt2.AS', '2024-09-14 01:46:18.38322+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-09-14 01:46:18.372781+00', '2024-09-14 01:46:18.383359+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '0c0d6ccc-9258-42b3-8988-16681c3fbeba', 'authenticated', 'authenticated', 'wmachi0409@gmail.com', NULL, '2024-09-18 14:08:37.506685+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-09-19 11:41:18.398313+00', '{"provider": "google", "providers": ["google"]}', '{"iss": "https://accounts.google.com", "sub": "117407701842473852115", "name": "町田渉", "email": "wmachi0409@gmail.com", "picture": "https://lh3.googleusercontent.com/a/ACg8ocKP6ZHj0dvaOZfMvYiBSIymqoT7TRVsQpl9i1cvP06UF2TwqbkbcQ=s96-c", "full_name": "町田渉", "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocKP6ZHj0dvaOZfMvYiBSIymqoT7TRVsQpl9i1cvP06UF2TwqbkbcQ=s96-c", "provider_id": "117407701842473852115", "email_verified": true, "phone_verified": false}', NULL, '2024-09-18 14:08:37.498642+00', '2024-09-19 13:11:28.408781+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('71bc2eea-f598-4e80-98a9-67e7fe0462d7', '71bc2eea-f598-4e80-98a9-67e7fe0462d7', '{"sub": "71bc2eea-f598-4e80-98a9-67e7fe0462d7", "email": "user01@example.com", "email_verified": false, "phone_verified": false}', 'email', '2024-09-14 01:44:58.748473+00', '2024-09-14 01:44:58.748577+00', '2024-09-14 01:44:58.748577+00', '9608af19-a238-4d83-ab8e-a87699b2dc7c'),
	('52dee3ee-2800-47f1-bf97-90ee67e59af3', '52dee3ee-2800-47f1-bf97-90ee67e59af3', '{"sub": "52dee3ee-2800-47f1-bf97-90ee67e59af3", "email": "user02@example.com", "email_verified": false, "phone_verified": false}', 'email', '2024-09-14 01:45:17.571871+00', '2024-09-14 01:45:17.571916+00', '2024-09-14 01:45:17.571916+00', '0bfe38c9-cbba-4b56-b455-f20fa8ae6cda'),
	('55e03f57-72be-49af-8bf6-29dd4ad98cbd', '55e03f57-72be-49af-8bf6-29dd4ad98cbd', '{"sub": "55e03f57-72be-49af-8bf6-29dd4ad98cbd", "email": "user03@example.com", "email_verified": false, "phone_verified": false}', 'email', '2024-09-14 01:45:38.830819+00', '2024-09-14 01:45:38.830872+00', '2024-09-14 01:45:38.830872+00', '76978973-1beb-427d-97a4-96da800e5350'),
	('100e8cbb-4a43-4db8-b33f-95af8c7da82e', '100e8cbb-4a43-4db8-b33f-95af8c7da82e', '{"sub": "100e8cbb-4a43-4db8-b33f-95af8c7da82e", "email": "user04@example.net", "email_verified": false, "phone_verified": false}', 'email', '2024-09-14 01:45:53.375728+00', '2024-09-14 01:45:53.375766+00', '2024-09-14 01:45:53.375766+00', '8c352c11-693e-4486-98e4-5403f1937814'),
	('41b728b9-bac4-4789-813c-e689d467f2e2', '41b728b9-bac4-4789-813c-e689d467f2e2', '{"sub": "41b728b9-bac4-4789-813c-e689d467f2e2", "email": "user05@example.net", "email_verified": false, "phone_verified": false}', 'email', '2024-09-14 01:46:06.888491+00', '2024-09-14 01:46:06.888531+00', '2024-09-14 01:46:06.888531+00', '55a0f48a-af5d-4f3e-bd75-5a8f166b346a'),
	('261dfd76-6990-4b24-b3f4-a53f4fc3a687', '261dfd76-6990-4b24-b3f4-a53f4fc3a687', '{"sub": "261dfd76-6990-4b24-b3f4-a53f4fc3a687", "email": "user06@example.net", "email_verified": false, "phone_verified": false}', 'email', '2024-09-14 01:46:18.378711+00', '2024-09-14 01:46:18.378751+00', '2024-09-14 01:46:18.378751+00', 'c6caeb4e-a64d-40e5-b3b9-cf42b9500a7b'),
	('117407701842473852115', '0c0d6ccc-9258-42b3-8988-16681c3fbeba', '{"iss": "https://accounts.google.com", "sub": "117407701842473852115", "name": "町田渉", "email": "wmachi0409@gmail.com", "picture": "https://lh3.googleusercontent.com/a/ACg8ocKP6ZHj0dvaOZfMvYiBSIymqoT7TRVsQpl9i1cvP06UF2TwqbkbcQ=s96-c", "full_name": "町田渉", "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocKP6ZHj0dvaOZfMvYiBSIymqoT7TRVsQpl9i1cvP06UF2TwqbkbcQ=s96-c", "provider_id": "117407701842473852115", "email_verified": true, "phone_verified": false}', 'google', '2024-09-18 14:08:37.501987+00', '2024-09-18 14:08:37.502026+00', '2024-09-19 11:41:18.38809+00', '2b817cfd-dc13-4a02-8a56-82ad1b47a6fd');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('276cbab0-e2b5-4b76-ab16-f60059f315ec', '0c0d6ccc-9258-42b3-8988-16681c3fbeba', '2024-09-19 11:41:18.39837+00', '2024-09-19 13:11:28.412561+00', NULL, 'aal1', NULL, '2024-09-19 13:11:28.412443', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '172.19.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('276cbab0-e2b5-4b76-ab16-f60059f315ec', '2024-09-19 11:41:18.400855+00', '2024-09-19 11:41:18.400855+00', 'oauth', '0159ff26-ea54-4344-893a-042482c20352');


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

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 146, '7zqwHXdovGSX0d9xauV-Eg', '0c0d6ccc-9258-42b3-8988-16681c3fbeba', true, '2024-09-19 11:41:18.399391+00', '2024-09-19 13:11:28.403042+00', NULL, '276cbab0-e2b5-4b76-ab16-f60059f315ec'),
	('00000000-0000-0000-0000-000000000000', 147, 'xNW6StCFts8MJ9fTUc-IJQ', '0c0d6ccc-9258-42b3-8988-16681c3fbeba', false, '2024-09-19 13:11:28.406015+00', '2024-09-19 13:11:28.406015+00', '7zqwHXdovGSX0d9xauV-Eg', '276cbab0-e2b5-4b76-ab16-f60059f315ec');


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

INSERT INTO "public"."categories" ("category_id", "name", "description", "created_at") VALUES
	('028f6af1-aec0-4147-bb53-f08ef8970819', 'Technology', 'Everything related to technological advancements.', '2024-09-19 13:39:13.12144+00'),
	('98132643-8bdd-4500-9873-1d7ed7608cc5', 'Health', 'Health tips, medical advice, and wellness.', '2024-09-19 13:39:13.12144+00'),
	('aec8a694-230f-469e-a697-06913da0b1ac', 'Education', 'Learning resources and educational content.', '2024-09-19 13:39:13.12144+00'),
	('77340e0d-a702-43e6-9c4c-98f466b4c37c', 'Sports', 'News and updates about various sports.', '2024-09-19 13:39:13.12144+00'),
	('92b2567c-d97b-408a-98dd-1a93809899cb', 'Entertainment', 'Movies, music, and everything entertaining.', '2024-09-19 13:39:13.12144+00');


--
-- Data for Name: territories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."territories" ("territory_id", "zone", "created_at") VALUES
	('18a6e433-4e74-42e5-a6ba-54c4b8e7601b', '0103000020E6100000010000000500000095D4096822766140C74B378941D84140DC4603780B786140C74B378941D84140DC4603780B786140A3923A014DD4414095D4096822766140A3923A014DD4414095D4096822766140C74B378941D84140', '2024-09-19 14:39:13.402192+00'),
	('faef1cc3-a147-4e63-9db6-11727f9ae250', '0103000020E61000000100000005000000D881734694F860401A51DA1B7C814140D881734694F86040DC4603780B84414048BF7D1D38F96040DC4603780B84414048BF7D1D38F960401A51DA1B7C814140D881734694F860401A51DA1B7C814140', '2024-09-19 14:39:13.402192+00'),
	('712bf15c-5724-469b-a68e-064c401f2854', '0103000020E61000000100000005000000D34D621058AB6140728A8EE4F2874540448B6CE7FBAB6140728A8EE4F2874540448B6CE7FBAB6140AF94658863854540D34D621058AB6140AF94658863854540D34D621058AB6140728A8EE4F2874540', '2024-09-19 14:39:13.402192+00'),
	('b263fd89-d62d-4c06-9ca1-44005d3f0e76', '0103000020E61000000100000005000000B459F5B9DA4C60407AC7293A92CB40402497FF907E4D60407AC7293A92CB40402497FF907E4D6040B7D100DE02C94040B459F5B9DA4C6040B7D100DE02C94040B459F5B9DA4C60407AC7293A92CB4040', '2024-09-19 14:39:13.402192+00'),
	('f2689784-c20f-4995-9220-856dbf913d58', '0103000020E61000000100000005000000B7D100DE021D6140AC1C5A643B974140280F0BB5A61D6140AC1C5A643B974140280F0BB5A61D6140E9263108AC944140B7D100DE021D6140E9263108AC944140B7D100DE021D6140AC1C5A643B974140', '2024-09-19 14:39:13.402192+00');


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."projects" ("project_id", "name", "key_visual", "deadline", "created_at", "territory_id", "category_id", "description") VALUES
	('2211e5a6-42c6-4fdf-ab67-867ffad2e15a', 'Urban Garden Revamp', 'http://example.com/urban-garden.jpg', '2024-12-31 23:59:59+00', '2024-09-19 14:42:29.97925+00', '18a6e433-4e74-42e5-a6ba-54c4b8e7601b', '028f6af1-aec0-4147-bb53-f08ef8970819', 'Everything related to technological advancements.'),
	('8d7fc323-df5a-4843-8ceb-44d2f660323d', 'Historic Site Restoration', 'http://example.com/historic-site.jpg', '2025-06-30 23:59:59+00', '2024-09-19 14:42:29.97925+00', 'faef1cc3-a147-4e63-9db6-11727f9ae250', '98132643-8bdd-4500-9873-1d7ed7608cc5', 'Health tips, medical advice, and wellness.'),
	('f1f7ebf9-d294-40d6-8c09-f6b23bedac73', 'Community Center Upgrade', 'http://example.com/community-center.jpg', '2024-11-15 23:59:59+00', '2024-09-19 14:42:29.97925+00', '712bf15c-5724-469b-a68e-064c401f2854', 'aec8a694-230f-469e-a697-06913da0b1ac', 'Learning resources and educational content.'),
	('1e8208ab-fca5-48dd-8a73-ef88dc25686b', 'Riverfront Development', 'http://example.com/riverfront.jpg', '2025-03-31 23:59:59+00', '2024-09-19 14:42:29.97925+00', 'b263fd89-d62d-4c06-9ca1-44005d3f0e76', '77340e0d-a702-43e6-9c4c-98f466b4c37c', 'News and updates about various sports.'),
	('eb69da44-2e61-4cb5-afdb-992fd8800515', 'City Park Expansion', 'http://example.com/city-park.jpg', '2024-10-31 23:59:59+00', '2024-09-19 14:42:29.97925+00', 'f2689784-c20f-4995-9220-856dbf913d58', '92b2567c-d97b-408a-98dd-1a93809899cb', 'Movies, music, and everything entertaining.'),
	('469d3b32-333e-466a-8e50-ad57dfd6714e', 'Library Renovation', 'http://example.com/library-renovation.jpg', '2025-02-28 23:59:59+00', '2024-09-19 14:42:29.97925+00', '18a6e433-4e74-42e5-a6ba-54c4b8e7601b', '028f6af1-aec0-4147-bb53-f08ef8970819', 'Everything related to technological advancements.'),
	('9fa62295-5170-406f-9e90-f7f4945ce0b2', 'New Sports Complex', 'http://example.com/sports-complex.jpg', '2025-05-31 23:59:59+00', '2024-09-19 14:42:29.97925+00', 'faef1cc3-a147-4e63-9db6-11727f9ae250', '77340e0d-a702-43e6-9c4c-98f466b4c37c', 'News and updates about various sports.'),
	('31dc8b85-d629-4c5e-823d-0223ed87a6a9', 'Cultural Arts Center', 'http://example.com/arts-center.jpg', '2024-12-01 23:59:59+00', '2024-09-19 14:42:29.97925+00', '712bf15c-5724-469b-a68e-064c401f2854', '92b2567c-d97b-408a-98dd-1a93809899cb', 'Movies, music, and everything entertaining.'),
	('27e625e3-6937-4aec-8dfb-440607c7a742', 'Seaside Promenade', 'http://example.com/seaside.jpg', '2025-07-15 23:59:59+00', '2024-09-19 14:42:29.97925+00', 'b263fd89-d62d-4c06-9ca1-44005d3f0e76', '92b2567c-d97b-408a-98dd-1a93809899cb', 'Movies, music, and everything entertaining.'),
	('61701873-e8c5-4974-bdc4-121385dc9448', 'Tech Hub Construction', 'http://example.com/tech-hub.jpg', '2024-09-30 23:59:59+00', '2024-09-19 14:42:29.97925+00', 'f2689784-c20f-4995-9220-856dbf913d58', '028f6af1-aec0-4147-bb53-f08ef8970819', 'Everything related to technological advancements.');


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."comments" ("comment_id", "project_id", "user_id", "body", "created_at") VALUES
	('2f6a2283-ac73-40e2-9d31-5e077cdc5996', '2211e5a6-42c6-4fdf-ab67-867ffad2e15a', '71bc2eea-f598-4e80-98a9-67e7fe0462d7', 'Great progress on the urban garden project. Keep up the good work!', '2024-09-19 18:16:48.271736+00'),
	('44c12c00-dd16-4221-ab0b-40f02a4c6c25', '8d7fc323-df5a-4843-8ceb-44d2f660323d', '52dee3ee-2800-47f1-bf97-90ee67e59af3', 'Excited to see the historic building being restored.', '2024-09-19 18:16:48.271736+00'),
	('b43877cc-0be6-4c89-a559-69d6d4c943cc', 'f1f7ebf9-d294-40d6-8c09-f6b23bedac73', '55e03f57-72be-49af-8bf6-29dd4ad98cbd', 'The community center is looking fantastic! Can’t wait to visit.', '2024-09-19 18:16:48.271736+00'),
	('f741a8c9-be65-4c0d-b43d-e8e274faef8b', '1e8208ab-fca5-48dd-8a73-ef88dc25686b', '100e8cbb-4a43-4db8-b33f-95af8c7da82e', 'Is there any update on the riverfront project?', '2024-09-19 18:16:48.271736+00'),
	('3d63e7ee-007c-4ba2-a593-ea04d039ac53', 'eb69da44-2e61-4cb5-afdb-992fd8800515', '41b728b9-bac4-4789-813c-e689d467f2e2', 'Love the enhancements made to the city park!', '2024-09-19 18:16:48.271736+00'),
	('448f43d6-f867-418d-a2ec-677a23001a64', '469d3b32-333e-466a-8e50-ad57dfd6714e', '261dfd76-6990-4b24-b3f4-a53f4fc3a687', 'Library renovations are coming along nicely.', '2024-09-19 18:16:48.271736+00'),
	('ebc994a9-8c2c-40cd-81ac-573ca5025ff6', '9fa62295-5170-406f-9e90-f7f4945ce0b2', '71bc2eea-f598-4e80-98a9-67e7fe0462d7', 'The new sports complex will be a great addition to the community.', '2024-09-19 18:16:48.271736+00'),
	('1d6d80a8-719a-4490-96d3-fd75ba86f544', '31dc8b85-d629-4c5e-823d-0223ed87a6a9', '52dee3ee-2800-47f1-bf97-90ee67e59af3', 'Cultural arts center is shaping up well. Will there be more updates soon?', '2024-09-19 18:16:48.271736+00'),
	('94b3091b-ba25-458b-93e1-f5821c5c2b11', '27e625e3-6937-4aec-8dfb-440607c7a742', '55e03f57-72be-49af-8bf6-29dd4ad98cbd', 'Looking forward to the seaside promenade completion!', '2024-09-19 18:16:48.271736+00'),
	('37a8eb15-c8d0-49a5-aa0f-15d217053f76', '61701873-e8c5-4974-bdc4-121385dc9448', '100e8cbb-4a43-4db8-b33f-95af8c7da82e', 'Tech hub development is exciting! Any new partnerships announced?', '2024-09-19 18:16:48.271736+00');


--
-- Data for Name: sponsors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."sponsors" ("sponsor_id", "name", "icon", "description", "created_at", "user_id") VALUES
	('692a0913-e6d2-482f-9780-cdccee0e7c8d', 'user04', 'https://drive.google.com/uc?id=1N5SUCa8UlO3Tyz1NW1MGVOBs9nmaxURN', NULL, '2024-09-14 01:55:45.737095+00', '100e8cbb-4a43-4db8-b33f-95af8c7da82e'),
	('16315abb-4a72-4d54-bd9d-b38288591f10', 'user05', 'https://drive.google.com/uc?id=1N5SUCa8UlO3Tyz1NW1MGVOBs9nmaxURN', NULL, '2024-09-14 01:56:13.363321+00', '41b728b9-bac4-4789-813c-e689d467f2e2'),
	('7a8b06bf-0acb-40e0-89ec-5de2574ef460', 'user06', 'https://drive.google.com/uc?id=1N5SUCa8UlO3Tyz1NW1MGVOBs9nmaxURN', NULL, '2024-09-14 01:56:27.161393+00', '261dfd76-6990-4b24-b3f4-a53f4fc3a687');


--
-- Data for Name: fruits; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."fruits" ("fruit_id", "project_id", "sponsor_id", "name", "key_visual", "description", "created_at", "amount_of_money") VALUES
	('ec64dec1-2b43-456d-8fef-01b1bdc2dbaf', '2211e5a6-42c6-4fdf-ab67-867ffad2e15a', '692a0913-e6d2-482f-9780-cdccee0e7c8d', 'Urban Garden Planting', 'http://example.com/urban-garden-visual.jpg', 'Contribution to urban garden planting efforts.', '2024-09-19 14:53:45.490298+00', 20000),
	('c5b5893b-c77d-4abe-aa85-cc56f708153b', '8d7fc323-df5a-4843-8ceb-44d2f660323d', '16315abb-4a72-4d54-bd9d-b38288591f10', 'Historic Restoration Fund', 'http://example.com/historic-restoration.jpg', 'Funds for restoring historical landmarks.', '2024-09-19 14:53:45.490298+00', 50000),
	('310d0ff6-5d97-4ea0-b41f-b79eeee51ab8', 'f1f7ebf9-d294-40d6-8c09-f6b23bedac73', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', 'Community Center Support', 'http://example.com/community-center-support.jpg', 'Support for upgrading community centers.', '2024-09-19 14:53:45.490298+00', 30000),
	('4719fe9a-f730-4ec3-905f-7b8d73d6c28a', '1e8208ab-fca5-48dd-8a73-ef88dc25686b', '692a0913-e6d2-482f-9780-cdccee0e7c8d', 'Riverfront Beautification', 'http://example.com/riverfront-beautification.jpg', 'Investment in riverfront beautification projects.', '2024-09-19 14:53:45.490298+00', 40000),
	('4136ca2e-d63f-4ac8-b763-5ec3f8b3c0e9', 'eb69da44-2e61-4cb5-afdb-992fd8800515', '16315abb-4a72-4d54-bd9d-b38288591f10', 'City Park Enhancement', 'http://example.com/city-park-enhancement.jpg', 'Funding for enhancing city parks.', '2024-09-19 14:53:45.490298+00', 25000),
	('0ac13bab-5cb1-4913-b176-b8d66357c845', '469d3b32-333e-466a-8e50-ad57dfd6714e', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', 'Library Renovation Drive', 'http://example.com/library-renovation.jpg', 'Drive to renovate and upgrade local libraries.', '2024-09-19 14:53:45.490298+00', 35000),
	('4365ddb7-7689-4836-802f-724696c27541', '9fa62295-5170-406f-9e90-f7f4945ce0b2', '692a0913-e6d2-482f-9780-cdccee0e7c8d', 'Sports Complex Funding', 'http://example.com/sports-complex.jpg', 'Funding for constructing a new sports complex.', '2024-09-19 14:53:45.490298+00', 60000),
	('c982d05f-baf5-475f-9666-35fcaa061728', '31dc8b85-d629-4c5e-823d-0223ed87a6a9', '16315abb-4a72-4d54-bd9d-b38288591f10', 'Cultural Arts Center', 'http://example.com/cultural-arts-center.jpg', 'Support for building a cultural arts center.', '2024-09-19 14:53:45.490298+00', 55000),
	('b7c494d3-6833-46f5-90d5-570425fb67c2', '27e625e3-6937-4aec-8dfb-440607c7a742', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', 'Seaside Promenade Project', 'http://example.com/seaside-promenade.jpg', 'Contribution to the development of a seaside promenade.', '2024-09-19 14:53:45.490298+00', 70000),
	('ee3acb86-93f0-4fcb-9ee5-65eac6e36c3a', '61701873-e8c5-4974-bdc4-121385dc9448', '692a0913-e6d2-482f-9780-cdccee0e7c8d', 'Tech Hub Construction', 'http://example.com/tech-hub.jpg', 'Funding for the construction of a new tech hub.', '2024-09-19 14:53:45.490298+00', 80000);


--
-- Data for Name: sowers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."sowers" ("user_id", "name", "birthday", "created_at", "sower_id") VALUES
	('71bc2eea-f598-4e80-98a9-67e7fe0462d7', 'user01', '1995-01-01', '2024-09-14 01:51:09.626403+00', 'e263d5ab-09d6-4b61-9296-265df25f78df'),
	('52dee3ee-2800-47f1-bf97-90ee67e59af3', 'user02', '1980-01-01', '2024-09-14 01:51:44.101461+00', '7123cf6e-6b33-408f-890c-40fff0ccfb4d'),
	('55e03f57-72be-49af-8bf6-29dd4ad98cbd', 'user03', '2005-01-01', '2024-09-14 01:52:15.344378+00', '735749af-cdbe-4d6d-9e5c-24cbca33607f');


--
-- Data for Name: pledges; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."pledges" ("pledges_id", "sower_id", "project_id", "amount_of_money", "created_at") VALUES
	('8207b2b5-b5b4-4a75-8051-7414b3e02e13', 'e263d5ab-09d6-4b61-9296-265df25f78df', '2211e5a6-42c6-4fdf-ab67-867ffad2e15a', 5000, '2024-09-19 14:56:24.911673+00'),
	('7b7b2a02-bb53-4600-bd76-8a8de9f55ecd', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '8d7fc323-df5a-4843-8ceb-44d2f660323d', 10000, '2024-09-19 14:56:24.911673+00'),
	('e796ad84-0256-482a-adbb-241ca4f8f3da', '735749af-cdbe-4d6d-9e5c-24cbca33607f', 'f1f7ebf9-d294-40d6-8c09-f6b23bedac73', 7500, '2024-09-19 14:56:24.911673+00'),
	('318bd259-a7c6-4f46-8b99-6a5eb4a0e9df', 'e263d5ab-09d6-4b61-9296-265df25f78df', '1e8208ab-fca5-48dd-8a73-ef88dc25686b', 3000, '2024-09-19 14:56:24.911673+00'),
	('5e376c0f-5528-4bbe-8aed-755c0b7033c7', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', 'eb69da44-2e61-4cb5-afdb-992fd8800515', 15000, '2024-09-19 14:56:24.911673+00'),
	('e0a984d4-f439-460a-8280-25add30cb1e7', '735749af-cdbe-4d6d-9e5c-24cbca33607f', '469d3b32-333e-466a-8e50-ad57dfd6714e', 12000, '2024-09-19 14:56:24.911673+00'),
	('8d132808-0d9b-4d11-b6bf-50aff4d5f9ed', 'e263d5ab-09d6-4b61-9296-265df25f78df', '9fa62295-5170-406f-9e90-f7f4945ce0b2', 6000, '2024-09-19 14:56:24.911673+00'),
	('a49be745-c355-4c00-8c22-ec17fac74e5e', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '31dc8b85-d629-4c5e-823d-0223ed87a6a9', 8000, '2024-09-19 14:56:24.911673+00'),
	('a3528686-f10d-4fc2-83b7-1b38305a9dd0', '735749af-cdbe-4d6d-9e5c-24cbca33607f', '27e625e3-6937-4aec-8dfb-440607c7a742', 9000, '2024-09-19 14:56:24.911673+00'),
	('8764000f-27de-4f7c-9594-cbd152daf291', 'e263d5ab-09d6-4b61-9296-265df25f78df', '61701873-e8c5-4974-bdc4-121385dc9448', 5000, '2024-09-19 14:56:24.911673+00');


--
-- Data for Name: reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."reports" ("report_id", "project_id", "sponsor_id", "title", "key_visual", "body", "created_at") VALUES
	('3b27e5f1-9802-4633-a268-70673a70d4cb', '2211e5a6-42c6-4fdf-ab67-867ffad2e15a', '692a0913-e6d2-482f-9780-cdccee0e7c8d', 'Urban Garden Progress Report', 'http://example.com/urban-garden-report.jpg', 'This report details the progress of the urban garden project.', '2024-09-19 16:44:26.114429+00'),
	('ea67c377-4eb8-427c-b060-dacb7aa347db', '8d7fc323-df5a-4843-8ceb-44d2f660323d', '16315abb-4a72-4d54-bd9d-b38288591f10', 'Historic Restoration Update', 'http://example.com/historic-restoration-update.jpg', 'An update on the restoration work for historical landmarks.', '2024-09-19 16:44:26.114429+00'),
	('8741f737-1022-48ae-adbc-d497430b0e5e', 'f1f7ebf9-d294-40d6-8c09-f6b23bedac73', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', 'Community Center Milestones', 'http://example.com/community-center-milestones.jpg', 'Milestones achieved in the community center support project.', '2024-09-19 16:44:26.114429+00'),
	('3e4a4557-36a6-4b74-a963-7f3304d2b99f', '1e8208ab-fca5-48dd-8a73-ef88dc25686b', '692a0913-e6d2-482f-9780-cdccee0e7c8d', 'Riverfront Beautification Status', 'http://example.com/riverfront-status.jpg', 'Current status of the riverfront beautification project.', '2024-09-19 16:44:26.114429+00'),
	('de23c600-75df-4417-b024-2b2a1304ceda', 'eb69da44-2e61-4cb5-afdb-992fd8800515', '16315abb-4a72-4d54-bd9d-b38288591f10', 'City Park Enhancements Report', 'http://example.com/city-park-enhancements.jpg', 'Details of enhancements made to city parks.', '2024-09-19 16:44:26.114429+00'),
	('708955f5-a6ae-4770-b9a0-964b930ebe9f', '469d3b32-333e-466a-8e50-ad57dfd6714e', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', 'Library Renovation Progress', 'http://example.com/library-renovation-progress.jpg', 'Progress report on library renovations.', '2024-09-19 16:44:26.114429+00'),
	('fe2228da-3628-489a-b574-603213153a20', '9fa62295-5170-406f-9e90-f7f4945ce0b2', '692a0913-e6d2-482f-9780-cdccee0e7c8d', 'Sports Complex Development', 'http://example.com/sports-complex-development.jpg', 'Update on the construction of the new sports complex.', '2024-09-19 16:44:26.114429+00'),
	('5804b8b9-2328-41a9-8ee1-9793c48c580d', '31dc8b85-d629-4c5e-823d-0223ed87a6a9', '16315abb-4a72-4d54-bd9d-b38288591f10', 'Cultural Arts Center Progress', 'http://example.com/cultural-arts-center-progress.jpg', 'Report on the development of the cultural arts center.', '2024-09-19 16:44:26.114429+00'),
	('2c583848-6fb0-4aba-98c7-8665afe6e4d2', '27e625e3-6937-4aec-8dfb-440607c7a742', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', 'Seaside Promenade Update', 'http://example.com/seaside-promenade-update.jpg', 'Current update on the seaside promenade project.', '2024-09-19 16:44:26.114429+00'),
	('46d63967-2998-44f5-9b40-8605d99a34b2', '61701873-e8c5-4974-bdc4-121385dc9448', '692a0913-e6d2-482f-9780-cdccee0e7c8d', 'Tech Hub Construction Status', 'http://example.com/tech-hub-construction.jpg', 'Status of the construction of the tech hub.', '2024-09-19 16:44:26.114429+00');


--
-- Data for Name: seeds; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."seeds" ("seed_id", "location", "created_at", "description", "sower_id", "category_id") VALUES
	('618ed141-9b81-4014-b367-6cb35b2004c8', '0101000020E610000095D4096822766140C74B378941D84140', '2024-09-19 14:35:24.528222+00', 'Seed in Tokyo', 'e263d5ab-09d6-4b61-9296-265df25f78df', '028f6af1-aec0-4147-bb53-f08ef8970819'),
	('e101330d-278e-43f7-ac51-c9ff07528906', '0101000020E61000009A779CA223976140ADFA5C6DC52E4240', '2024-09-19 14:35:24.528222+00', 'Seed in Ibaraki', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', 'aec8a694-230f-469e-a697-06913da0b1ac'),
	('ab0b74cb-c2d1-4f5b-bc7e-67032b864af1', '0101000020E6100000D881734694F860401A51DA1B7C814140', '2024-09-19 14:35:24.528222+00', 'Seed in Kyoto', '735749af-cdbe-4d6d-9e5c-24cbca33607f', '77340e0d-a702-43e6-9c4c-98f466b4c37c'),
	('ca0e3eb6-f920-4366-8c6f-fc91f7db2b0d', '0101000020E6100000D34D621058AB6140728A8EE4F2874540', '2024-09-19 14:35:24.528222+00', 'Seed in Sapporo', 'e263d5ab-09d6-4b61-9296-265df25f78df', '028f6af1-aec0-4147-bb53-f08ef8970819'),
	('09a4cc5a-19b1-40ad-a22c-7289fba8f146', '0101000020E610000024287E8CB9776140A3923A014DD44140', '2024-09-19 14:35:24.528222+00', 'Seed near Tokyo Tower', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '98132643-8bdd-4500-9873-1d7ed7608cc5'),
	('e8d5c69b-2c95-48a7-8e65-fc68f3b5c151', '0101000020E6100000A301BC0512F060401B9E5E29CB584140', '2024-09-19 14:35:24.528222+00', 'Seed in Osaka', '735749af-cdbe-4d6d-9e5c-24cbca33607f', '77340e0d-a702-43e6-9c4c-98f466b4c37c'),
	('a28bc800-29d7-4283-bd42-8e237fa074ba', '0101000020E6100000B459F5B9DA4C60407AC7293A92CB4040', '2024-09-19 14:35:24.528222+00', 'Seed in Fukuoka', 'e263d5ab-09d6-4b61-9296-265df25f78df', '92b2567c-d97b-408a-98dd-1a93809899cb'),
	('0decd920-d137-482f-9a2e-85cfbd56a7d1', '0101000020E6100000F853E3A59B7861407B14AE47E1DA4140', '2024-09-19 14:35:24.528222+00', 'Seed near Tokyo Skytree', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '028f6af1-aec0-4147-bb53-f08ef8970819'),
	('703c31f5-f323-42d6-beae-ac1f1c308f54', '0101000020E6100000CD3B4ED1918E60400C93A98251314140', '2024-09-19 14:35:24.528222+00', 'Seed in Hiroshima', '735749af-cdbe-4d6d-9e5c-24cbca33607f', 'aec8a694-230f-469e-a697-06913da0b1ac'),
	('d91d7ae5-5eca-4022-980d-a053d1e46d21', '0101000020E6100000B7D100DE021D6140AC1C5A643B974140', '2024-09-19 14:35:24.528222+00', 'Seed in Nagoya', 'e263d5ab-09d6-4b61-9296-265df25f78df', '92b2567c-d97b-408a-98dd-1a93809899cb');


--
-- Data for Name: sponsor_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."sponsor_data" ("project_id", "sponsor_id", "created_at", "motivation", "location", "target_amount_of_money") VALUES
	('2211e5a6-42c6-4fdf-ab67-867ffad2e15a', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '2024-09-19 14:47:41.370719+00', 'Support urban green spaces', '0101000020E610000095D4096822766140C74B378941D84140', 500000),
	('8d7fc323-df5a-4843-8ceb-44d2f660323d', '16315abb-4a72-4d54-bd9d-b38288591f10', '2024-09-19 14:47:41.370719+00', 'Preserve historical landmarks', '0101000020E6100000D881734694F860401A51DA1B7C814140', 750000),
	('f1f7ebf9-d294-40d6-8c09-f6b23bedac73', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '2024-09-19 14:47:41.370719+00', 'Enhance community facilities', '0101000020E6100000D34D621058AB6140728A8EE4F2874540', 600000),
	('1e8208ab-fca5-48dd-8a73-ef88dc25686b', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '2024-09-19 14:47:41.370719+00', 'Support riverfront beautification', '0101000020E6100000B459F5B9DA4C60407AC7293A92CB4040', 800000),
	('eb69da44-2e61-4cb5-afdb-992fd8800515', '16315abb-4a72-4d54-bd9d-b38288591f10', '2024-09-19 14:47:41.370719+00', 'Expand city park areas', '0101000020E6100000B7D100DE021D6140AC1C5A643B974140', 550000),
	('469d3b32-333e-466a-8e50-ad57dfd6714e', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '2024-09-19 14:47:41.370719+00', 'Renovate the local library', '0101000020E6100000F853E3A59B7861407B14AE47E1DA4140', 450000),
	('9fa62295-5170-406f-9e90-f7f4945ce0b2', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '2024-09-19 14:47:41.370719+00', 'Build a new sports complex', '0101000020E6100000CD3B4ED1918E60400C93A98251314140', 700000),
	('31dc8b85-d629-4c5e-823d-0223ed87a6a9', '16315abb-4a72-4d54-bd9d-b38288591f10', '2024-09-19 14:47:41.370719+00', 'Construct a cultural arts center', '0101000020E6100000A301BC0512F060401B9E5E29CB584140', 650000),
	('27e625e3-6937-4aec-8dfb-440607c7a742', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '2024-09-19 14:47:41.370719+00', 'Develop a seaside promenade', '0101000020E6100000448B6CE7FBAB6140AF94658863854540', 900000),
	('61701873-e8c5-4974-bdc4-121385dc9448', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '2024-09-19 14:47:41.370719+00', 'Build a new tech hub', '0101000020E61000002497FF907E4D6040B7D100DE02C94040', 550000);


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 147, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
