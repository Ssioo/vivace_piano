export const isDev = process.env.NODE_ENV !== 'production'

export const BASE_URL = 'https://us-central1-vivacepiano-fb077.cloudfunctions.net/v1'

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

export const FCM_KEY = 'BJ-gOUz7jJlX95gEjvGSdf8brBns_iiqT6-lcCmhH21F1uqK8GDgJ4aEBOMKH2EGHL_m7sPPVNywoNUTEtz6tA0'

export const WINDOW_WIDTH = window.innerWidth
export const WINDOW_HEIGHT = window.innerHeight
export const WINDOW_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT
