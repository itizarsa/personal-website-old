import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Arshath</title>
				<meta name="description" content="Arshath personal website" />
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>

			<main>
				<h1 style={{ textAlign: "center" }}>Welcome to Arshath!</h1>
			</main>
		</div>
	)
}

export default Home
