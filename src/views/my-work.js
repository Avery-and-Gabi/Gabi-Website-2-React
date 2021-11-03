import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import PushMe from '../components/push-me'
import ZoneG from '../components/zone-g'
import Cardscape from '../components/cardscape'
import CitrusIntollerant from '../components/citrus-intollerant'
import Nightmares from '../components/nightmares'
import TaskSurgeon from '../components/task-surgeon'
import AppComponent from '../components/component'
import projectStyles from '../style.module.css'
import styles from './my-work.module.css'

const MyWork = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>MyWork - Gabi Website 2</title>
        <meta property="og:title" content="MyWork - Gabi Website 2" />
      </Helmet>
      <div className={styles['Navbar-container']}>
        <div className={styles['Navbar']}>
          <div className={styles['Links-container']}>
            <Link to="/" className={styles['Link']}>
              Home
            </Link>
            <Link to="/my-work" className={styles['Link01']}>
              <span>My Work</span>
            </Link>
          </div>
          <div className={styles['SocialBar']}>
            <a
              href="https://www.youtube.com/ZygerGFX"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link02']}
            >
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/ZygerDesigns"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link03']}
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
              className={styles['link04']}
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
      <div className={styles['Banner']}>
        <h1 className={styles['text01']}>Games Development Portfolio</h1>
        <span className={styles['text02']}>
          <span>
            Over my 5 years of programming I have made many projects. Down below
            you will be able to see some of my work. Not everything I make gets
            published but those things that do can usually be found on my
            Itch.io page. However, this portfolio will also feature some of my
            non published work.
          </span>
          <span>&amp;#8203;</span>
        </span>
        <div className={styles['BtnGroup']}>
          <button
            className={` ${styles['Button']} ${projectStyles['button']} `}
          >
            Itch.io
          </button>
        </div>
      </div>
      <div className={styles['Blog']}>
        <a
          href="https://store.steampowered.com/app/1648340/Push_Me_If_You_Can/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link05']}
        >
          <PushMe
            rootClassName="rootClassName"
            className={styles['component']}
          ></PushMe>
        </a>
        <a
          href="https://zyger.itch.io/zone-g"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link06']}
        >
          <ZoneG
            rootClassName="rootClassName"
            className={styles['component1']}
          ></ZoneG>
        </a>
        <a
          href="https://zyger.itch.io/cardscape"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link07']}
        >
          <Cardscape
            rootClassName="rootClassName"
            className={styles['component2']}
          ></Cardscape>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.yuzu.citrusintolerant&amp;hl=en&amp;gl=US"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link08']}
        >
          <CitrusIntollerant
            rootClassName="rootClassName"
            className={styles['component3']}
          ></CitrusIntollerant>
        </a>
        <a
          href="https://zyger.itch.io/nightmares"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link09']}
        >
          <Nightmares
            rootClassName="rootClassName4"
            className={styles['component4']}
          ></Nightmares>
        </a>
        <a
          href="https://zyger.itch.io/task-surgeon"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link10']}
        >
          <TaskSurgeon
            rootClassName="rootClassName1"
            className={styles['component5']}
          ></TaskSurgeon>
        </a>
      </div>
      <div className={styles['Pricing']}>
        <span className={styles['text05']}>University Projects</span>
        <div className={styles['container1']}>
          <div className={styles['DirectX11']}>
            <span className={styles['text06']}>Direct X11 Project</span>
            <img
              alt="image"
              src="/playground_assets/direct%20x-400w.gif"
              className={styles['image']}
            />
            <div className={styles['container2']}></div>
            <div className={styles['container3']}>
              <span className={styles['text07']}>
                <span>â Graphics Rendering</span>
              </span>
              <span className={styles['text09']}>
                <span>â Sin Wave applied to objects</span>
              </span>
              <span className={styles['text11']}>
                <span>â Multiple Object Rendering</span>
              </span>
              <span className={styles['text13']}>
                <span>â Texturing and Materials</span>
              </span>
            </div>
          </div>
          <div className={styles['Pacman']}>
            <span className={styles['text15']}>C++ PACMAN</span>
            <img
              alt="image"
              src="/playground_assets/pacman-lead-graphic-300h.jpg"
              className={styles['image1']}
            />
            <div className={styles['container4']}></div>
            <div className={styles['container5']}>
              <span className={styles['text16']}>
                <span>â Text File level creator</span>
              </span>
              <span className={styles['text18']}>
                <span>â Different levels of A.I</span>
              </span>
              <span className={styles['text20']}>
                <span>â PNG, JPG &amp; other format texture loading</span>
              </span>
              <span className={styles['text22']}>
                <span>â Flexible UI system</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <AppComponent rootClassName="rootClassName"></AppComponent>
    </div>
  )
}

export default MyWork
