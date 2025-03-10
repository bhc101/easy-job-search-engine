import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Easy Job Search Engine</title>
            </Head>
            <Header />
            <main style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Welcome to Easy Job Search Engine</h1>
                <p>Find your next big opportunity here!</p>
            </main>
        </div>
    );
}
