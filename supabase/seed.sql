SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
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
	('55b46fee-ad75-4072-97b8-787ca0284c1d', '休憩', '休憩に関するカテゴリ', '2024-09-22 00:00:00+00'),
	('616055b7-21e8-40f5-8187-6491a26c00ba', '環境', '環境に関するカテゴリ', '2024-09-22 00:00:00+00'),
	('170569ca-f55d-4665-bdfc-676b176567cc', '飲食', '飲食に関するカテゴリ', '2024-09-22 00:00:00+00'),
	('9aa01bda-c0a8-4385-be5c-c1fed719b51b', '施設', '施設に関するカテゴリ', '2024-09-22 00:00:00+00'),
	('6ee4371e-7218-4cf5-9421-3d65e405af22', '移動', '移動に関するカテゴリ', '2024-09-22 00:00:00+00'),
	('ec2a86cd-19e2-41ba-b3d1-ea687582506a', 'その他', 'その他のカテゴリ', '2024-09-22 00:00:00+00');


--
-- Data for Name: territories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."territories" ("territory_id", "zone", "created_at") VALUES
	('dcc2053e-306d-4b2d-9704-47686925e626', '010300000001000000090000000ADEEBFFF78C6140257FE662C21E374000000000008363405F775F3A52423E40F3D71A00607D6340560C5707400F4640F6211400087C624047D73B92811148400000000000676140A50F02976C874640F3D71A0060536040FB00497DFE094840F3D71A00609E5F40F1FDC34C9167464000000000808D5F40D8B969334EA33E400ADEEBFFF78C6140257FE662C21E3740', '2024-10-30 02:38:28.179252+00');


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."projects" ("project_id", "name", "key_visual", "deadline", "created_at", "territory_id", "category_id", "description") VALUES
	('08a78db3-f61b-4aac-bf7c-cad2fc45ebad', '憩いの丘', 'https://i.gyazo.com/9205914603b719a1933a1f422c09c70c.jpg', '2025-02-28 23:59:59+00', '2024-10-30 16:22:50.279232+00', 'dcc2053e-306d-4b2d-9704-47686925e626', '55b46fee-ad75-4072-97b8-787ca0284c1d', '屋上庭園を併設し、多様な休憩に対応できる複合施設。ヨガや読書スペース、カフェコーナーを設置。自然光を取り入れた開放的な空間設計。'),
	('ad6d65e3-4299-4425-b724-192ebb253ebd', '本の森カフェ', 'https://i.gyazo.com/0571d48414ff9a3558471f08481f4b96.jpg', '2025-02-28 23:59:59+00', '2024-10-30 16:22:50.279232+00', 'dcc2053e-306d-4b2d-9704-47686925e626', '55b46fee-ad75-4072-97b8-787ca0284c1d', '緑豊かな庭園の中に、コンパクトなブックカフェを設置。ハンモックやソファなど、ゆったりと読書を楽しめるスペースを多数用意。'),
	('8d6bd040-6d4c-40d1-b674-807684596ff1', '静寂の庭', 'https://i.gyazo.com/0fc7ef8bdbd73f6fb6ede2fe2e8acbd5.jpg', '2025-02-28 23:59:59+00', '2024-10-30 16:22:50.279232+00', 'dcc2053e-306d-4b2d-9704-47686925e626', '55b46fee-ad75-4072-97b8-787ca0284c1d', '自然の音に包まれ、瞑想やヨガに集中できる静かなスペース。人工芝や木陰など、自然素材を取り入れた癒やしの空間。'),
	('3a0ac0d1-f241-4786-9109-e878cb25faa1', '地元食材レストラン', 'https://i.gyazo.com/a0f8e78fa4592e590c29130d3319bb92.jpg', '2025-02-28 23:59:59+00', '2024-10-30 16:22:50.279232+00', 'dcc2053e-306d-4b2d-9704-47686925e626', '170569ca-f55d-4665-bdfc-676b176567cc', '地元の農産物を使い、安価で美味しい食事を提供するレストランをオープンする'),
	('d86d0ecf-e218-4eff-9ca0-daa3d2c0a02c', '若者向け起業支援センター設立', 'https://i.gyazo.com/9d9c8aeb4a441f42f337c2076043accd.jpg', '2025-02-28 23:59:59+00', '2024-10-30 16:22:50.279232+00', 'dcc2053e-306d-4b2d-9704-47686925e626', 'ec2a86cd-19e2-41ba-b3d1-ea687582506a', '若者向けの起業支援センターを設立し、起業家育成と地域経済の活性化を促進します。'),
	('95cce956-dd32-4e19-9f24-b8ceed6535c8', '昔ながらの食堂', 'https://i.gyazo.com/0491476f854e0db58d69b6d16af50392.jpg', '2025-02-28 23:59:59+00', '2024-10-30 16:22:50.279232+00', 'dcc2053e-306d-4b2d-9704-47686925e626', '170569ca-f55d-4665-bdfc-676b176567cc', '地元の高齢者が運営する昔ながらの食堂をオープンし、地域の味を守り、世代間交流を促進します。'),
	('326385d2-9d5b-400b-804f-9fabec785679', '空き家活用コミュニティスペース', 'https://i.gyazo.com/b11d5cb6fe109293e59dd0eb045daf00.jpg', '2025-02-28 23:59:59+00', '2024-10-30 16:22:50.279232+00', 'dcc2053e-306d-4b2d-9704-47686925e626', '616055b7-21e8-40f5-8187-6491a26c00ba', '空き家をリノベーションし、コミュニティスペースとして活用することで、地域交流の活性化を目指します。'),
	('d43d73b1-0a2e-48d5-922c-9d0b8000ac06', '地元食材料理教室', 'https://i.gyazo.com/58649dde4c670eab667bfafbefb3b69e.jpg', '2025-02-28 23:59:59+00', '2024-10-30 16:22:50.279232+00', 'dcc2053e-306d-4b2d-9704-47686925e626', '170569ca-f55d-4665-bdfc-676b176567cc', '地元の食材を使った料理教室を定期的に開催し、食文化の継承と地域産業の活性化を目指します。'),
	('cfc6182b-27a0-48a8-88fc-3c37b6d2a05c', '地域特産品マルシェ', 'https://i.gyazo.com/3d6f6702e717cb4930770a096bdcdba3.jpg', '2025-02-28 23:59:59+00', '2024-10-30 16:22:50.279232+00', 'dcc2053e-306d-4b2d-9704-47686925e626', '9aa01bda-c0a8-4385-be5c-c1fed719b51b', '地元の農家から直接新鮮な食材を仕入れ地域特産品を販売する、賑わいのあるマルシェ。');


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--



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
	('7b97f30b-60f1-45bb-95cf-0551bc2f47c2', '08a78db3-f61b-4aac-bf7c-cad2fc45ebad', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '5% OFFクーポン"', 'https://via.placeholder.com/150', '開店後、入場料1回5%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 1000),
	('20037de8-06b9-43b6-a8a4-da0c1bfb7f82', '08a78db3-f61b-4aac-bf7c-cad2fc45ebad', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '10% OFFクーポン', 'https://via.placeholder.com/150', '開店後、入場料1回10%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 3000),
	('9add13ed-0e72-4b01-8a30-c6debec42d91', '08a78db3-f61b-4aac-bf7c-cad2fc45ebad', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '入場料一生10%OFF', 'https://via.placeholder.com/150', '開店後、屋上庭園の入場料を一生10%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 5000),
	('8b21b481-18c1-4738-afd3-224e32709ef1', 'ad6d65e3-4299-4425-b724-192ebb253ebd', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '5% OFFクーポン"', 'https://via.placeholder.com/150', '開店後、入場料1回5%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 1000),
	('8f6ea420-8a6c-44a3-82f1-ebab6a9e4dbb', 'ad6d65e3-4299-4425-b724-192ebb253ebd', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '10% OFFクーポン', 'https://via.placeholder.com/150', '開店後、入場料1回10%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 3000),
	('2154ee46-a342-432b-8a83-8e5c2cb05b56', 'ad6d65e3-4299-4425-b724-192ebb253ebd', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '入場料一生10%OFF', 'https://via.placeholder.com/150', '開店後、屋上庭園の入場料を一生10%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 5000),
	('8fc335a0-d022-4c63-bc5f-c8c72d365da8', '8d6bd040-6d4c-40d1-b674-807684596ff1', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '5% OFFクーポン"', 'https://via.placeholder.com/150', '開店後、入場料1回5%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 1000),
	('bef652d2-f543-4c7d-8b83-68a6d55686aa', '8d6bd040-6d4c-40d1-b674-807684596ff1', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '10% OFFクーポン', 'https://via.placeholder.com/150', '開店後、入場料1回10%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 3000),
	('c6654f3f-1848-48c0-8e99-97009a73bb4a', '8d6bd040-6d4c-40d1-b674-807684596ff1', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '入場料一生10%OFF', 'https://via.placeholder.com/150', '開店後、屋上庭園の入場料を一生10%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 5000),
	('28c20b86-e45d-4617-b559-3d881c07d9b5', '3a0ac0d1-f241-4786-9109-e878cb25faa1', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '5% OFFクーポン"', 'https://via.placeholder.com/150', '開店後、入場料1回5%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 1000),
	('1cbca837-7936-4712-a2e2-9fbf7cad098e', '3a0ac0d1-f241-4786-9109-e878cb25faa1', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '10% OFFクーポン', 'https://via.placeholder.com/150', '開店後、入場料1回10%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 3000),
	('ceae7b3d-2a74-4d97-974a-ecd8585499ec', '3a0ac0d1-f241-4786-9109-e878cb25faa1', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '入場料一生10%OFF', 'https://via.placeholder.com/150', '開店後、屋上庭園の入場料を一生10%OFFでご利用いただけます', '2024-10-30 16:53:46.045505+00', 5000);


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
	('73720029-0f67-4dca-b183-b54ad276f789', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '08a78db3-f61b-4aac-bf7c-cad2fc45ebad', 1000, '2024-10-30 17:10:03.866143+00'),
	('f58851a5-5f21-4771-8859-12b67491acbd', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '08a78db3-f61b-4aac-bf7c-cad2fc45ebad', 3000, '2024-10-30 17:10:03.866143+00'),
	('cdce420f-bfc5-4234-a21f-ad560197b333', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '08a78db3-f61b-4aac-bf7c-cad2fc45ebad', 5000, '2024-10-30 17:10:03.866143+00'),
	('d86e027f-060a-42ca-88e4-5a580149d488', 'e263d5ab-09d6-4b61-9296-265df25f78df', 'ad6d65e3-4299-4425-b724-192ebb253ebd', 1000, '2024-10-30 17:10:03.866143+00'),
	('730edf43-6a85-4461-90b7-90324760bbb1', 'e263d5ab-09d6-4b61-9296-265df25f78df', 'ad6d65e3-4299-4425-b724-192ebb253ebd', 3000, '2024-10-30 17:10:03.866143+00'),
	('488106d0-7d98-4b5d-92ac-ed43f09c7b67', 'e263d5ab-09d6-4b61-9296-265df25f78df', 'ad6d65e3-4299-4425-b724-192ebb253ebd', 5000, '2024-10-30 17:10:03.866143+00'),
	('d5cccb2b-3307-4b67-a4a8-c7279ec867bf', 'e263d5ab-09d6-4b61-9296-265df25f78df', '8d6bd040-6d4c-40d1-b674-807684596ff1', 1000, '2024-10-30 17:10:03.866143+00'),
	('792417d7-a35f-48be-b661-ca9f079cd1b6', 'e263d5ab-09d6-4b61-9296-265df25f78df', '8d6bd040-6d4c-40d1-b674-807684596ff1', 3000, '2024-10-30 17:10:03.866143+00'),
	('2123261e-1e57-4f69-9998-7df4f92acec8', 'e263d5ab-09d6-4b61-9296-265df25f78df', '8d6bd040-6d4c-40d1-b674-807684596ff1', 5000, '2024-10-30 17:10:03.866143+00'),
	('6d8df58a-f515-44e1-badf-ecabb9fc1862', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '3a0ac0d1-f241-4786-9109-e878cb25faa1', 1000, '2024-10-30 17:10:03.866143+00'),
	('b53f748e-0886-4d79-bd4a-71426d69f427', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '3a0ac0d1-f241-4786-9109-e878cb25faa1', 3000, '2024-10-30 17:10:03.866143+00'),
	('c85ced95-7e9b-40db-8fd2-4fb00078b4f1', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '3a0ac0d1-f241-4786-9109-e878cb25faa1', 5000, '2024-10-30 17:10:03.866143+00');


--
-- Data for Name: reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."reports" ("report_id", "project_id", "sponsor_id", "title", "key_visual", "body", "created_at") VALUES
	('03d5efa2-6263-4e59-ab2b-99889a77ee3d', '08a78db3-f61b-4aac-bf7c-cad2fc45ebad', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '施工開始のお知らせ1', 'https://via.placeholder.com/150', 'ご支援ありがとうございます!!本日､業者に発注致しました施工が始まりました｡今しばらく開店までお待ち下さい｡', '2024-10-30 16:45:59.584087+00'),
	('d9fc9530-fae2-4884-ba69-cabf4f3b9071', 'ad6d65e3-4299-4425-b724-192ebb253ebd', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '施工開始のお知らせ2', 'https://via.placeholder.com/150', 'ご支援ありがとうございます!!本日､業者に発注致しました施工が始まりました｡今しばらく開店までお待ち下さい｡', '2024-10-30 16:45:59.584087+00'),
	('00950ed4-915e-41c9-b966-a282aede4930', '8d6bd040-6d4c-40d1-b674-807684596ff1', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '施工開始のお知らせ3', 'https://via.placeholder.com/150', 'ご支援ありがとうございます!!本日､業者に発注致しました施工が始まりました｡今しばらく開店までお待ち下さい｡', '2024-10-30 16:45:59.584087+00'),
	('7a7e5985-5d9c-4cee-b6cb-829da68cf941', '3a0ac0d1-f241-4786-9109-e878cb25faa1', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '施工開始のお知らせ4', 'https://via.placeholder.com/150', 'ご支援ありがとうございます!!本日､業者に発注致しました施工が始まりました｡今しばらく開店までお待ち下さい｡', '2024-10-30 16:45:59.584087+00');


--
-- Data for Name: seeds; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."seeds" ("seed_id", "location", "created_at", "description", "sower_id", "category_id") VALUES
	('2eeebad4-b11b-40e8-a9f0-0291f53a04b7', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '大人も子どもも楽しめる屋上庭園のあるパーク施設が欲しい', 'e263d5ab-09d6-4b61-9296-265df25f78df', '55b46fee-ad75-4072-97b8-787ca0284c1d'),
	('4b10d290-9060-48e0-84bc-647ea7a476b3', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '静かに読書ができて昼食も取れて一日中滞在できるような屋外ブックカフェが欲しい', 'e263d5ab-09d6-4b61-9296-265df25f78df', '55b46fee-ad75-4072-97b8-787ca0284c1d'),
	('ede2e7ae-9393-4b99-9672-69934e1b838e', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '静かに瞑想やヨガができる屋外スペースが欲しい', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '55b46fee-ad75-4072-97b8-787ca0284c1d'),
	('05f08e17-27c3-427b-ab1d-595004eb757a', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', 'ゆったりできる公園にハンモックエリアを作ってほしい', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '55b46fee-ad75-4072-97b8-787ca0284c1d'),
	('063e9c4f-ba5b-4c05-882f-954d4b6630f3', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '地面に寝っ転がれる人工芝の広がる場所がほしい', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '9aa01bda-c0a8-4385-be5c-c1fed719b51b'),
	('8aa2e8b2-3341-4cf4-a262-dca64f36477f', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '地元の農産物を使った安くて美味しいレストランが欲しい', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '170569ca-f55d-4665-bdfc-676b176567cc'),
	('55ffb9fe-d8be-41e7-b1a9-eb486cc2054e', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '近くの新鮮な野菜を使ったレストランが欲しい', '735749af-cdbe-4d6d-9e5c-24cbca33607f', '170569ca-f55d-4665-bdfc-676b176567cc'),
	('2ff15abf-f1a2-4ec4-9773-ac322c797492', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '若者向けの起業支援センターが欲しい', '735749af-cdbe-4d6d-9e5c-24cbca33607f', 'ec2a86cd-19e2-41ba-b3d1-ea687582506a'),
	('16632ed8-e4bf-4a7c-9b9c-991f7abcdebb', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', 'アットホームな雰囲気の地元の農産物を使った安くて美味しいレストランが欲しい', '735749af-cdbe-4d6d-9e5c-24cbca33607f', '170569ca-f55d-4665-bdfc-676b176567cc'),
	('86fe9e0f-1429-4457-be15-6d3a5d4b4262', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '若者から高齢者まで幅広い世代がコミュニティスペースを増やしてほしい', '735749af-cdbe-4d6d-9e5c-24cbca33607f', '616055b7-21e8-40f5-8187-6491a26c00ba'),
	('4f2e5d8a-d27c-4ce0-b1c4-d839052a6998', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '地元の食材を使った料理教室が定期的に開かれる場所が欲しい', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '9aa01bda-c0a8-4385-be5c-c1fed719b51b'),
	('940c5bf6-6d62-401c-b794-d1be104138c8', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '地元の農家と直接つながる朝市を定期的に開催してほしい', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', '170569ca-f55d-4665-bdfc-676b176567cc'),
	('24fc487c-8bfc-41e3-b646-588d8ed76c2d', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '多世代が交流できるコミュニティガーデンが欲しい', '7123cf6e-6b33-408f-890c-40fff0ccfb4d', 'ec2a86cd-19e2-41ba-b3d1-ea687582506a'),
	('afceb4a0-0611-48d3-97af-c9cac9e4e393', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '地元の伝統料理など高齢者が運営する昔ながらの食堂が欲しい', 'e263d5ab-09d6-4b61-9296-265df25f78df', '9aa01bda-c0a8-4385-be5c-c1fed719b51b'),
	('2c0ca6f9-7cd1-4a38-8996-60ab44d9295f', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '地域の経済を学生の力で活性化させたい', 'e263d5ab-09d6-4b61-9296-265df25f78df', 'ec2a86cd-19e2-41ba-b3d1-ea687582506a'),
	('f33f365b-c166-464d-8cd1-acfe80eaf224', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '地域の農家や漁師などの生産者と直接顔をあわせて､特産品を販売する常設マルシェが欲しい', 'e263d5ab-09d6-4b61-9296-265df25f78df', '9aa01bda-c0a8-4385-be5c-c1fed719b51b'),
	('8ab96b56-14ac-4a15-9b93-81b05037a769', '0101000000355EBA498C786140CE6DC2BD32D74140', '2024-10-30 16:03:19.39814+00', '地域の人々が集まれるコミュニティスペースが欲しい', 'e263d5ab-09d6-4b61-9296-265df25f78df', 'ec2a86cd-19e2-41ba-b3d1-ea687582506a');


--
-- Data for Name: sponsor_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."sponsor_data" ("project_id", "sponsor_id", "created_at", "motivation", "location", "target_amount_of_money") VALUES
	('08a78db3-f61b-4aac-bf7c-cad2fc45ebad', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '2024-10-30 16:42:07.03445+00', 'スポンサー1のモチベーション', '0101000000355EBA498C786140CE6DC2BD32D74140', 20000),
	('ad6d65e3-4299-4425-b724-192ebb253ebd', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '2024-10-30 16:42:07.03445+00', 'スポンサー1のモチベーション', '0101000000355EBA498C786140CE6DC2BD32D74140', 15000),
	('8d6bd040-6d4c-40d1-b674-807684596ff1', '7a8b06bf-0acb-40e0-89ec-5de2574ef460', '2024-10-30 16:42:07.03445+00', 'スポンサー1のモチベーション', '0101000000355EBA498C786140CE6DC2BD32D74140', 4000),
	('3a0ac0d1-f241-4786-9109-e878cb25faa1', '692a0913-e6d2-482f-9780-cdccee0e7c8d', '2024-10-30 16:42:07.03445+00', 'スポンサー1のモチベーション', '0101000000355EBA498C786140CE6DC2BD32D74140', 100000);


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
