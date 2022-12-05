import NavBar from "../components/NavBar";
import Link from "next/link";
import ButtonCom from "../components/ButtonCom";
import Image from "next/image";
import HeadComp from "../components/HeadComp";

export default function Resource() {
  return (
    <>
      <HeadComp title={"IET Resources"} />
      <NavBar />
      <main>
        <h1> Feedback Page</h1>
        <Image
          src="/IET/iceberg.jpg"
          alt="image of icerberg"
          height={600}
          width={600}
        />
        <iframe
        src="https://airtable.com/embed/shrkiPRE11Zoj3rc5?backgroundColor=green"
        width="100%"
        height="533"
      ></iframe>

        <p>Additional resources Links</p>
        <ol>
          <li>
            {" "}
            <Link href="https://rb.gy/uc0jnw">
              Stop & search rate by ethnicity April 2020 to March 2021
            </Link>
          </li>
          <li>
            <Link href="https://rb.gy/nsijfo">
              Timeline: Race and the Metropolitan police
            </Link>
          </li>
          <li>
            <Link href="https://rb.gy/m5dikr">
              How to Reduce Unconscious Bias in the Workplace
            </Link>
          </li>
          <li>
            <Link href="https://rb.gy/okgtoi">
              What Are the Benefits of Understanding Different Cultures?
            </Link>
          </li>
          <li>
            <Link href="https://rb.gy/4zvwle">
              How Do You Reduce Prejudice?
            </Link>
          </li>
        </ol>

        <ButtonCom btnName={"Home"} btnLink="/" />
      </main>
    </>
  );
}
