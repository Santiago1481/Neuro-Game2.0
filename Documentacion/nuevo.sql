--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: articulos; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.articulos (
    id_articulos integer NOT NULL,
    nombre_articulos character varying(100) NOT NULL,
    precio numeric(18,2) NOT NULL
);


ALTER TABLE public.articulos OWNER TO soporte;

--
-- Name: cartas; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.cartas (
    id_cartas integer NOT NULL,
    fondo character varying(100) NOT NULL,
    musica character varying(100) NOT NULL,
    tiempo time without time zone NOT NULL,
    puntuacion integer NOT NULL
);


ALTER TABLE public.cartas OWNER TO soporte;

--
-- Name: copas; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.copas (
    id_copas integer NOT NULL,
    fondo character varying(100) NOT NULL,
    musica character varying(100) NOT NULL,
    tiempo time without time zone NOT NULL,
    puntuacion integer NOT NULL
);


ALTER TABLE public.copas OWNER TO soporte;

--
-- Name: hostorial; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.hostorial (
    id_hostorial integer NOT NULL,
    id_usuario integer NOT NULL,
    id_partida integer NOT NULL,
    id_puntuacion integer NOT NULL,
    resultado character varying(200) NOT NULL,
    fecha date NOT NULL
);


ALTER TABLE public.hostorial OWNER TO soporte;

--
-- Name: juego; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.juego (
    id_juego integer NOT NULL,
    nombrejuego character varying(30) NOT NULL,
    descripcion character varying(50) NOT NULL,
    fondopersonalizable character varying(100) NOT NULL,
    sonidopersonalizable character varying(100) NOT NULL
);


ALTER TABLE public.juego OWNER TO soporte;

--
-- Name: modojuego; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.modojuego (
    id_modojuego integer NOT NULL,
    nombremodo character varying(50) NOT NULL
);


ALTER TABLE public.modojuego OWNER TO soporte;

--
-- Name: modosala; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.modosala (
    id_modosala integer NOT NULL,
    codigosala bigint NOT NULL,
    ganador integer NOT NULL
);


ALTER TABLE public.modosala OWNER TO soporte;

--
-- Name: modosolo; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.modosolo (
    id_modosolo integer NOT NULL,
    id_partida integer NOT NULL,
    id_usuario integer NOT NULL
);


ALTER TABLE public.modosolo OWNER TO soporte;

--
-- Name: partida; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.partida (
    id_partida integer NOT NULL,
    id_modojuego integer NOT NULL,
    id_modosala integer NOT NULL,
    id_juego integer NOT NULL,
    estado boolean NOT NULL,
    fechafin timestamp without time zone NOT NULL,
    fechainicio timestamp without time zone NOT NULL
);


ALTER TABLE public.partida OWNER TO soporte;

--
-- Name: perfil; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.perfil (
    id_perfil integer NOT NULL,
    id_usuario integer NOT NULL,
    nivel character(1) NOT NULL,
    moneda integer NOT NULL
);


ALTER TABLE public.perfil OWNER TO soporte;

--
-- Name: puntuacion; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.puntuacion (
    id_puntuacion integer NOT NULL,
    puntos integer NOT NULL,
    tiempo time without time zone NOT NULL,
    dificultad integer NOT NULL
);


ALTER TABLE public.puntuacion OWNER TO soporte;

--
-- Name: simon; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.simon (
    id_simon integer NOT NULL,
    fondo character varying(100) NOT NULL,
    musica character varying(100) NOT NULL,
    tiempo time without time zone NOT NULL,
    puntuacion integer
);


ALTER TABLE public.simon OWNER TO soporte;

--
-- Name: tienda; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.tienda (
    id_tienda integer NOT NULL,
    id_usuario integer NOT NULL,
    id_articulos integer NOT NULL
);


ALTER TABLE public.tienda OWNER TO soporte;

--
-- Name: usuario; Type: TABLE; Schema: public; Owner: soporte
--

CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    nombre_usuario character varying(50) NOT NULL,
    email_usuario character varying(50) NOT NULL,
    "contraseña_usuario" character varying(50) NOT NULL,
    avatar character varying(50) NOT NULL
);


ALTER TABLE public.usuario OWNER TO soporte;

--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: soporte
--

CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_id_usuario_seq OWNER TO soporte;

--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: soporte
--

ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;


--
-- Name: usuario id_usuario; Type: DEFAULT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);


--
-- Data for Name: articulos; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.articulos (id_articulos, nombre_articulos, precio) FROM stdin;
\.


--
-- Data for Name: cartas; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.cartas (id_cartas, fondo, musica, tiempo, puntuacion) FROM stdin;
\.


--
-- Data for Name: copas; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.copas (id_copas, fondo, musica, tiempo, puntuacion) FROM stdin;
\.


--
-- Data for Name: hostorial; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.hostorial (id_hostorial, id_usuario, id_partida, id_puntuacion, resultado, fecha) FROM stdin;
\.


--
-- Data for Name: juego; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.juego (id_juego, nombrejuego, descripcion, fondopersonalizable, sonidopersonalizable) FROM stdin;
\.


--
-- Data for Name: modojuego; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.modojuego (id_modojuego, nombremodo) FROM stdin;
\.


--
-- Data for Name: modosala; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.modosala (id_modosala, codigosala, ganador) FROM stdin;
\.


--
-- Data for Name: modosolo; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.modosolo (id_modosolo, id_partida, id_usuario) FROM stdin;
\.


--
-- Data for Name: partida; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.partida (id_partida, id_modojuego, id_modosala, id_juego, estado, fechafin, fechainicio) FROM stdin;
\.


--
-- Data for Name: perfil; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.perfil (id_perfil, id_usuario, nivel, moneda) FROM stdin;
\.


--
-- Data for Name: puntuacion; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.puntuacion (id_puntuacion, puntos, tiempo, dificultad) FROM stdin;
\.


--
-- Data for Name: simon; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.simon (id_simon, fondo, musica, tiempo, puntuacion) FROM stdin;
\.


--
-- Data for Name: tienda; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.tienda (id_tienda, id_usuario, id_articulos) FROM stdin;
\.


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: soporte
--

COPY public.usuario (id_usuario, nombre_usuario, email_usuario, "contraseña_usuario", avatar) FROM stdin;
1	juan	juan@gmail.com	tilin	principiante
\.


--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: soporte
--

SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 1, true);


--
-- Name: articulos articulos_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.articulos
    ADD CONSTRAINT articulos_pkey PRIMARY KEY (id_articulos);


--
-- Name: cartas cartas_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.cartas
    ADD CONSTRAINT cartas_pkey PRIMARY KEY (id_cartas);


--
-- Name: copas copas_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.copas
    ADD CONSTRAINT copas_pkey PRIMARY KEY (id_copas);


--
-- Name: hostorial hostorial_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.hostorial
    ADD CONSTRAINT hostorial_pkey PRIMARY KEY (id_hostorial);


--
-- Name: juego juego_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.juego
    ADD CONSTRAINT juego_pkey PRIMARY KEY (id_juego);


--
-- Name: modojuego modojuego_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.modojuego
    ADD CONSTRAINT modojuego_pkey PRIMARY KEY (id_modojuego);


--
-- Name: modosala modosala_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.modosala
    ADD CONSTRAINT modosala_pkey PRIMARY KEY (id_modosala);


--
-- Name: modosolo modosolo_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.modosolo
    ADD CONSTRAINT modosolo_pkey PRIMARY KEY (id_modosolo);


--
-- Name: partida partida_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.partida
    ADD CONSTRAINT partida_pkey PRIMARY KEY (id_partida);


--
-- Name: perfil perfil_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.perfil
    ADD CONSTRAINT perfil_pkey PRIMARY KEY (id_perfil);


--
-- Name: puntuacion puntuacion_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.puntuacion
    ADD CONSTRAINT puntuacion_pkey PRIMARY KEY (id_puntuacion);


--
-- Name: simon simon_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.simon
    ADD CONSTRAINT simon_pkey PRIMARY KEY (id_simon);


--
-- Name: tienda tienda_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.tienda
    ADD CONSTRAINT tienda_pkey PRIMARY KEY (id_tienda);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);


--
-- Name: hostorial hostorial_id_partida_fkey; Type: FK CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.hostorial
    ADD CONSTRAINT hostorial_id_partida_fkey FOREIGN KEY (id_partida) REFERENCES public.partida(id_partida);


--
-- Name: hostorial hostorial_id_puntuacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.hostorial
    ADD CONSTRAINT hostorial_id_puntuacion_fkey FOREIGN KEY (id_puntuacion) REFERENCES public.puntuacion(id_puntuacion);


--
-- Name: hostorial hostorial_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.hostorial
    ADD CONSTRAINT hostorial_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- Name: modosolo modosolo_id_partida_fkey; Type: FK CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.modosolo
    ADD CONSTRAINT modosolo_id_partida_fkey FOREIGN KEY (id_partida) REFERENCES public.partida(id_partida);


--
-- Name: modosolo modosolo_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.modosolo
    ADD CONSTRAINT modosolo_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- Name: partida partida_id_juego_fkey; Type: FK CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.partida
    ADD CONSTRAINT partida_id_juego_fkey FOREIGN KEY (id_juego) REFERENCES public.juego(id_juego);


--
-- Name: partida partida_id_modojuego_fkey; Type: FK CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.partida
    ADD CONSTRAINT partida_id_modojuego_fkey FOREIGN KEY (id_modojuego) REFERENCES public.modojuego(id_modojuego);


--
-- Name: partida partida_id_modosala_fkey; Type: FK CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.partida
    ADD CONSTRAINT partida_id_modosala_fkey FOREIGN KEY (id_modosala) REFERENCES public.modosala(id_modosala);


--
-- Name: perfil perfil_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.perfil
    ADD CONSTRAINT perfil_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- Name: tienda tienda_id_articulos_fkey; Type: FK CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.tienda
    ADD CONSTRAINT tienda_id_articulos_fkey FOREIGN KEY (id_articulos) REFERENCES public.articulos(id_articulos);


--
-- Name: tienda tienda_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: soporte
--

ALTER TABLE ONLY public.tienda
    ADD CONSTRAINT tienda_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- PostgreSQL database dump complete
--

