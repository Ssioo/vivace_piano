/*
 * Copyright: Copyright (c) 2021. wooisso <yeonwoo.cho@yonsei.ac.kr>
 * License: MIT
 * webcross_ar_app from Mobed Laboratory, Yonsei University
 * Last Updated At 21. 2. 23. 오후 4:17
 *
 * @link http://github.com/Ssioo/nnadhoc_ble for the original source repository
 */

export const isDev = process.env.NODE_ENV !== 'production'

export const BASE_URL = isDev ? 'http://localhost:5000' : 'https://www.vivacepiano.club'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyB4YdA0JOVS-91_9RLLb36Jug7eeHLKrF4',
  authDomain: 'vivacepiano-fb077.firebaseapp.com',
  databaseURL: 'https://vivacepiano-fb077-default-rtdb.firebaseio.com',
  projectId: 'vivacepiano-fb077',
  storageBucket: 'vivacepiano-fb077.appspot.com',
  messagingSenderId: '513386788533',
  appId: '1:513386788533:web:b55f6d3f614970f246b0fc',
  measurementId: 'G-7WF9D535D4'
}

export const FCM_KEY = 'BPowusk4igXsw2fQBJ856ZJUSAkTAE81LRe84c7_6ZWD2nP0WDew1BhBShVlXg856bgTD-YkmHEGP_i_GoZnwaA'

export const WINDOW_WIDTH = window.innerWidth
export const WINDOW_HEIGHT = window.innerHeight
export const WINDOW_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT
