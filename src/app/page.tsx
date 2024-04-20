//import Image from "next/image";
//import styles from "./page.module.css";
import { jsx } from '@emotion/react';
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { table } from 'console';


const PasePage: React.FC = () => {
  
  return (
    <div style={{ display: 'flex', gap:'40px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
    <div style={{ marginBottom: '20px' }}>
      <table>
        <tr>
          <td>
              <Card sx={{ maxWidth: 280 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  src="/assets/harold.jpeg" 
                  alt="harold"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Harold Mosquera
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    DESARROLLADOR BACKEND
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </td>
          <td>
              <Card sx={{ maxWidth: 280 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  src="/assets/adrian.jpg" 
                  alt="adrian"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Adrian Ordoñez
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    DESARROLLADOR FRONTEND
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </td>
          <td>
              <Card sx={{ maxWidth: 280 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  src="/assets/esteban.jpeg" 
                  alt="esteban"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Esteban Josa
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    NO REGISTRADO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </td>
          <td>
              <Card sx={{ maxWidth: 280 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="280"
                  src="/assets/maicol.jpeg" 
                  alt="maicol"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Maicol Guerrero
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      NO REGISTRADO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </td>
        </tr>
      </table>
    </div>
    
    <time dateTime="2016-10-25" suppressHydrationWarning={true}><Button variant="outlined" href="/login">Proyecto gimnacio</Button></time>

  </div>
          
  );
}

export default PasePage;

/*   <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
          <div>
           <Link href="/login">Dashboard</Link>
    </div>
        </div>
      </div>
      
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>*/