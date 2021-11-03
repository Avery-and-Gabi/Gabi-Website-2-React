import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Nightmares from '../components/nightmares'
import TaskSurgeon from '../components/task-surgeon'
import AppComponent from '../components/component'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Gabi Website 2</title>
        <meta property="og:title" content="Gabi Website 2" />
      </Helmet>
      <div className={styles['Navbar-container']}>
        <div className={styles['Navbar']}>
          <div className={styles['Links-container']}>
            <Link to="/" className={styles['Link']}>
              Home
            </Link>
            <Link to="/my-work" className={styles['Link1']}>
              <span>My Work</span>
            </Link>
          </div>
          <div className={styles['SocialBar']}>
            <a
              href="https://www.youtube.com/ZygerGFX"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link2']}
            >
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/ZygerDesigns"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link3']}
            >
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className={styles['icon2']}
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gabi-maczynska-3803691b7/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link4']}
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className={styles['icon4']}
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={styles['Intro']}>
        <div className={styles['container1']}>
          <span className={styles['text01']}>
            Programmer, Content Creator &amp; Developer
          </span>
          <h1 className={styles['text02']}>
            <span>GABI</span>
            <br></br>
            <span>MACZYNSKA</span>
          </h1>
        </div>
        <img
          alt="image"
          src="/playground_assets/0-400w.jpg"
          className={styles['image']}
        />
      </div>
      <div className={styles['AboutMe']}>
        <h1 className={styles['text06']}>Who Am I?</h1>
        <span className={styles['text07']}>
          <span>
            My name is Gabi, I am 20 years old currently studying Computer Games
            Programming while being a game developer/content creator on YouTube.
            I&apos;m currently working on my first Steam release game called
            &quot;Push Me If You Can&quot; a multiplayer platformer party game.
            The purpose of this portfolio is to demonstrate my work. It features
            things like game jam games, university projects and other
            programs/games that I&apos;ve worked on.
          </span>
          <span className={styles['text09']}></span>
        </span>
      </div>
      <div className={styles['Blog']}>
        <a
          href="https://zyger.itch.io/nightmares"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link5']}
        >
          <Nightmares
            rootClassName="rootClassName3"
            className={styles['component']}
          ></Nightmares>
        </a>
        <a
          href="https://zyger.itch.io/task-surgeon"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link6']}
        >
          <TaskSurgeon
            rootClassName="rootClassName"
            className={styles['component1']}
          ></TaskSurgeon>
        </a>
      </div>
      <div className={styles['Stats']}>
        <div className={styles['Stat']}>
          <h1 className={styles['text10']}>
            <span>+20</span>
          </h1>
          <span className={styles['text12']}>Published Games</span>
          <span className={styles['text13']}>
            On Itch.io, Google Play Store and Steam
          </span>
        </div>
        <div className={styles['Stat1']}>
          <h1 className={styles['text14']}>
            <span>10,000+</span>
          </h1>
          <span className={styles['text16']}>Downloads</span>
          <span className={styles['text17']}>
            Across all of my published projects
          </span>
        </div>
        <div className={styles['Stat2']}>
          <h1 className={styles['text18']}>
            <span>40,000+</span>
          </h1>
          <span className={styles['text20']}>Subscribers</span>
          <span className={styles['text21']}>On my YouTube channel</span>
        </div>
      </div>
      <AppComponent></AppComponent>
    </div>
  )
}

export default Home
