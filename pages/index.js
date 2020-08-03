import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { DatePicker, Button, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Card hoverable style={{ width: 240, padding: 20 }} cover={<img src="/vercel.svg" alt="hello" />}>
          <Card.Meta title="My New Logo" description="www.expo.io" />
        </Card>
        <DeleteOutlined style={{ fontSize: 36 }} />

        <Link href="/articles">
          <a>Article List</a>
        </Link>
        <Link href="/second">
          <a>Second Page</a>
        </Link>
        <Link href="/get-uuid">
          <a>Get UUID</a>
        </Link>
        <Link href="/get-double/[num]" as="/get-double/11">
          <a>Get Double 11</a>
        </Link>
        <Link href="/get-double/[num]" as="/get-double/33">
          <a>Get Double 33</a>
        </Link>
        <DatePicker />
        <Button onClick={() => console.log("Button click")}>Click Me</Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
